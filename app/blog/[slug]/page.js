import posts from '@/data/posts.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';

function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content ? content.split(/\s+/).length : 0;
  return `${Math.ceil(wordCount / wordsPerMinute)} min read`;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const post = posts[currentIndex];

  if (!post) {
    notFound();
  }

  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-200 py-12 relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10" />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Back */}
        <div className="mb-8 font-mono">
          <Link
            href="/blog"
            className="inline-flex items-center text-xs text-slate-400 hover:text-emerald-400 bg-[#111827] border border-slate-800 px-3 py-1.5 rounded-lg transition-colors"
          >
            &lt;-- RETURN_TO_LOGS
          </Link>
        </div>

        {/* Main Article Card */}
        <div className="bg-[#111827] rounded-2xl p-8 sm:p-12 border border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <header className="mb-8 pb-6 border-b border-slate-800">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 mb-4">
              <span className="text-emerald-400 bg-emerald-950/80 border border-emerald-500/20 px-2.5 py-1 rounded">
                #{post.category || 'Tech'}
              </span>
              <span>•</span>
              <time dateTime={post.date}>{post.date}</time>
              <span>•</span>
              <span className="text-slate-400">{calculateReadTime(post.content)}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-invert prose-emerald max-w-none prose-p:text-slate-300 prose-p:leading-relaxed">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Previous / Next Article Navigation */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 grid sm:grid-cols-2 gap-4 font-mono text-xs">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="p-4 bg-[#0B0F17] border border-slate-800 rounded-xl hover:border-emerald-500/40 transition"
              >
                <span className="text-slate-500 block mb-1">&lt; PREV_LOG</span>
                <span className="text-emerald-400 font-bold truncate block">{prevPost.title}</span>
              </Link>
            ) : <div />}

            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="p-4 bg-[#0B0F17] border border-slate-800 rounded-xl hover:border-emerald-500/40 text-right transition"
              >
                <span className="text-slate-500 block mb-1">NEXT_LOG &gt;</span>
                <span className="text-emerald-400 font-bold truncate block">{nextPost.title}</span>
              </Link>
            ) : <div />}
          </div>
        </div>
      </article>
    </div>
  );
}