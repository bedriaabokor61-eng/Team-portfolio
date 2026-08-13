'use client';

import { useState, useMemo, Suspense, useCallback, useTransition } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import posts from '@/data/posts.json';
import BlogFilters from './BlogFilters'; // Make sure this path matches your structure

const POSTS_PER_PAGE = 6;

// Helper function to calculate estimated reading time
function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content ? content.split(/\s+/).length : 0;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

// Terminal-styled Skeleton Card component
function PostCardSkeleton() {
  return (
    <div className="flex flex-col bg-[#111827]/90 rounded-xl border border-slate-800/80 p-6 animate-pulse font-mono">
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="h-5 w-16 bg-emerald-950/60 border border-emerald-500/20 rounded-md" />
        <div className="h-3 w-20 bg-slate-800 rounded" />
      </div>

      {/* Title Lines */}
      <div className="space-y-2 mb-4">
        <div className="h-5 bg-slate-800 rounded w-5/6" />
        <div className="h-5 bg-slate-800 rounded w-2/3" />
      </div>

      {/* Excerpt Lines */}
      <div className="space-y-2 mb-6">
        <div className="h-3 bg-slate-800/60 rounded w-full" />
        <div className="h-3 bg-slate-800/60 rounded w-11/12" />
        <div className="h-3 bg-slate-800/60 rounded w-4/5" />
      </div>

      {/* Card Footer Divider & Metadata */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <div className="h-3 w-16 bg-slate-800/70 rounded" />
        <div className="h-3 w-24 bg-emerald-950/80 border border-emerald-500/20 rounded" />
      </div>
    </div>
  );
}

function BlogContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // 1. Read state directly from URL Search Parameters
  const searchQuery = searchParams.get('q') || '';
  const selectedCategory = searchParams.get('cat') || 'All';
  const currentPage = Number(searchParams.get('page')) || 1;

  // Local state for newsletter form
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  // 2. Generate unique categories from posts
  const categories = useMemo(() => {
    const list = posts.map((post) => post.category || 'Tech');
    return ['All', ...Array.from(new Set(list))];
  }, []);

  // 3. NEW: Calculate category counts dynamically based on the JSON data
  const categoryCounts = useMemo(() => {
    return categories.reduce((acc, category) => {
      if (category === 'All') {
        acc[category] = posts.length;
      } else {
        acc[category] = posts.filter(
          (post) => (post.category || 'Tech') === category
        ).length;
      }
      return acc;
    }, {});
  }, [categories]);

  // Filter posts based on URL-driven category and search query
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        (post.category || 'Tech') === selectedCategory;

      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Calculate total pages and slice current page results
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  // Handler for pagination (URL updating)
  const setPage = (newPage) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    });
  };

  // Handler to clear all parameters if search yields 0 results
  const resetFilters = () => {
    startTransition(() => {
      router.push(pathname, { scroll: false });
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 font-mono py-12 relative overflow-hidden">
      {/* Background Tech Mesh & Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent pointer-events-none blur-3xl -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* System Bar */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 px-2 border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                isPending ? 'bg-amber-400 animate-ping' : 'bg-emerald-400 animate-pulse'
              }`}
            />
            <span>STATUS: {isPending ? 'FETCHING...' : 'SYNCED'}</span>
          </div>
          <span>
            POSTS_MATCHED: {filteredPosts.length} / {posts.length}
          </span>
        </div>

        {/* Header Terminal Box */}
        <header className="relative mb-12 text-center py-10 px-6 rounded-2xl bg-[#111827]/80 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(16,185,129,0.1)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 rounded-full mb-4">
            SYSTEM_LOGS // REPOSITORY
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            &lt;<span className="text-emerald-400">DEV</span>_LOGS /&gt;
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-sans">
            Technical notes, architecture patterns, and engineering insights from the development team.
          </p>
        </header>

        {/* NEW: Replaced inline UI with the abstracted BlogFilters component */}
        <BlogFilters 
          categories={categories}
          categoryCounts={categoryCounts}
          currentQuery={searchQuery}
          currentCategory={selectedCategory}
        />

        {/* Article Grid / Skeleton Loader */}
        {isPending ? (
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 font-sans">
            {Array.from({ length: POSTS_PER_PAGE }).map((_, index) => (
              <PostCardSkeleton key={index} />
            ))}
          </section>
        ) : paginatedPosts.length > 0 ? (
          <>
            <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 font-sans">
              {paginatedPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col bg-[#111827]/90 rounded-xl border border-slate-800 hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                        <span className="text-emerald-400 font-semibold bg-emerald-950/80 border border-emerald-500/20 px-2 py-0.5 rounded">
                          {post.category || 'Tech'}
                        </span>
                        <time dateTime={post.date}>{post.date}</time>
                      </div>

                      <h2 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed mb-6 font-sans">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-xs">
                      <span className="text-slate-500">{calculateReadTime(post.content)}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center font-bold text-emerald-400 group-hover:translate-x-1 transition-transform"
                      >
                        READ_MORE &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-between border-t border-slate-800/80 pt-6">
                <button
                  onClick={() => setPage(currentPage - 1)}
                  disabled={currentPage <= 1 || isPending}
                  className="px-4 py-2 text-xs rounded-lg border border-slate-800 bg-[#111827] text-slate-300 hover:border-emerald-500/50 disabled:opacity-40 disabled:hover:border-slate-800 transition"
                >
                  &larr; PREV
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setPage(page)}
                      disabled={isPending}
                      className={`w-8 h-8 text-xs rounded-lg border transition ${
                        currentPage === page
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                          : 'bg-[#111827] text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setPage(currentPage + 1)}
                  disabled={currentPage >= totalPages || isPending}
                  className="px-4 py-2 text-xs rounded-lg border border-slate-800 bg-[#111827] text-slate-300 hover:border-emerald-500/50 disabled:opacity-40 disabled:hover:border-slate-800 transition"
                >
                  NEXT &rarr;
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 bg-[#111827] rounded-xl border border-dashed border-slate-800">
            <p className="text-slate-400 text-sm font-mono">
              QUERY_RETURNED_NULL: No articles match search parameters.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 rounded-lg hover:bg-emerald-900/40 transition-colors"
            >
              reset_query()
            </button>
          </div>
        )}

        {/* Newsletter Terminal Footer Box */}
        <section className="mt-16 bg-[#111827] border border-slate-800 rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-2">SUBSCRIBE_TO_FEED</h3>
            <p className="text-xs text-slate-400 font-sans mb-6">
              Get notified when new engineering logs and articles are published.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs rounded-xl">
                SUCCESS: Address registered to publication stream.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="developer@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 text-xs text-emerald-300 bg-[#0B0F17] border border-slate-800 rounded-xl focus:border-emerald-500 outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0B0F17] text-slate-400 font-mono p-12 text-center">
          LOADING_LOGS...
        </div>
      }
    >
      <BlogContent />
    </Suspense>
  );
}