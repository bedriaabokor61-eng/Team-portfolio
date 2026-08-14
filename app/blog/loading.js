// app/blog/loading.js

export default function BlogLoading() {
    return (
      <div className="min-h-screen bg-[#0B0F17] text-slate-100 font-mono py-12 relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent pointer-events-none blur-3xl -z-10" />
  
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* System Bar Skeleton */}
          <div className="flex items-center justify-between text-xs text-slate-600 mb-6 px-2 border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500/50 animate-pulse" />
              <span>FETCHING_SERVER_DATA...</span>
            </div>
            <div className="h-3 w-32 bg-slate-800/80 rounded animate-pulse" />
          </div>
  
          {/* Header Terminal Box Skeleton */}
          <header className="relative mb-12 text-center py-10 px-6 rounded-2xl bg-[#111827]/80 border border-slate-800 backdrop-blur-md">
            <div className="h-6 w-44 bg-slate-800 rounded-full mx-auto mb-4 animate-pulse" />
            <div className="h-10 w-64 bg-slate-800 rounded-lg mx-auto mb-3 animate-pulse" />
            <div className="h-4 w-96 bg-slate-800/60 rounded mx-auto animate-pulse" />
          </header>
  
          {/* Filter Controls Skeleton */}
          <div className="mb-10 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between gap-4">
            <div className="h-10 w-full md:w-80 bg-[#111827] border border-slate-800 rounded-xl animate-pulse" />
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-7 w-20 bg-[#111827] border border-slate-800 rounded-lg animate-pulse" />
              ))}
            </div>
          </div>
  
          {/* Article Grid Skeleton */}
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 font-sans">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-[#111827]/90 rounded-xl border border-slate-800 p-6 flex flex-col justify-between h-64 animate-pulse"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-4 w-16 bg-slate-800 rounded" />
                    <div className="h-3 w-20 bg-slate-800/60 rounded" />
                  </div>
                  <div className="h-6 w-3/4 bg-slate-800 rounded mb-3" />
                  <div className="h-4 w-full bg-slate-800/60 rounded mb-2" />
                  <div className="h-4 w-2/3 bg-slate-800/60 rounded" />
                </div>
  
                <div className="pt-4 border-t border-slate-800/80 flex justify-between items-center">
                  <div className="h-3 w-16 bg-slate-800/50 rounded" />
                  <div className="h-3 w-20 bg-slate-800/50 rounded" />
                </div>
              </div>
            ))}
          </section>
  
        </div>
      </div>
    );
  }