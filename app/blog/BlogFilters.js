// app/blog/BlogFilters.js
'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect, useTransition, useCallback } from 'react';

export default function BlogFilters({ categories, currentQuery = '', currentCategory = 'All' }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [isPending, startTransition] = useTransition();
  const [searchInput, setSearchInput] = useState(currentQuery);

  // Keep local input state in sync if URL search params change externally 
  // (e.g. browser back/forward buttons or 'reset_query' link)
  useEffect(() => {
    setSearchInput(currentQuery);
  }, [currentQuery]);

  // Centralized URL search parameter updater
  const updateParams = useCallback((updates) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== 'All' && value !== 1) {
        params.set(key, value.toString());
      } else {
        params.delete(key);
      }
    });

    const newQueryString = params.toString();
    const targetUrl = newQueryString ? `${pathname}?${newQueryString}` : pathname;

    startTransition(() => {
      // scroll: false prevents Next.js from resetting scroll position to top on every filter change
      router.push(targetUrl, { scroll: false });
    });
  }, [pathname, router, searchParams]);

  // Debounced search handler
  useEffect(() => {
    // Prevent trigger on initial mount or when input already matches URL prop
    if (searchInput === currentQuery) return;

    const timer = setTimeout(() => {
      updateParams({ q: searchInput, page: 1 });
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput, currentQuery, updateParams]);

  const handleCategoryClick = (category) => {
    updateParams({ cat: category, page: 1 });
  };

  return (
    <div className="mb-10 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between gap-4">
      {/* Search Input */}
      <div className="relative flex-1 max-w-md">
        <input
          type="text"
          placeholder="grep 'keyword'..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full px-4 py-2.5 pl-10 text-xs text-emerald-300 bg-[#111827] border border-slate-800 rounded-xl focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 outline-none transition-all placeholder:text-slate-600 font-mono"
        />
        <span className="absolute left-3.5 top-3 text-xs text-emerald-500 font-bold font-mono">$</span>
        
        {/* Active pending spinner indicator */}
        {isPending && (
          <span className="absolute right-3.5 top-3.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = currentCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryClick(category)}
              disabled={isPending && isActive}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-lg border transition-all duration-200 ${
                isActive
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-sm shadow-emerald-950'
                  : 'bg-[#111827] text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              #{category}
            </button>
          );
        })}
      </div>
    </div>
  );
}