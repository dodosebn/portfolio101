import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const TnavItems = [
  {
    name: "Journals",
    path: "/trading/journals",
  },
  {
    name: "Trading Tools",
    path: "/trading/tools",
  },
];

const TradingHomePage = () => {
  const [today, setToday] = useState<string>("");

  useEffect(() => {
    setToday(
      new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    );
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Top Navigation */}
      <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-900/95 backdrop-blur-lg">
        <div className="max-w-screen-2xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center text-black font-bold text-2xl shadow-inner">
              D
            </div>
            <div>
              <div className="text-2xl font-semibold tracking-tight">Dominion</div>
              <div className="text-xs text-zinc-500 -mt-1">TRADING ARCHIVES</div>
            </div>
          </div>

          <div className="flex items-center gap-x-2">
            {TnavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-6 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 
                         hover:bg-zinc-800 hover:text-emerald-400 border border-transparent 
                         hover:border-zinc-700 active:scale-[0.985]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-x-3">
            <div className="px-4 py-1.5 text-xs font-mono tracking-widest bg-red-950 text-red-400 border border-red-900/50 rounded-full">
              INTERNAL ONLY
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20 text-center">
        <div className="mb-8 inline-flex items-center gap-x-2 px-5 py-2 bg-zinc-900 border border-zinc-700 rounded-2xl text-sm">
          <span className="text-red-500 animate-pulse">●</span>
          RESTRICTED ACCESS
        </div>

        <h1 className="text-7xl font-bold tracking-tighter mb-6 bg-linear-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
          You Found The Vault
        </h1>

        <p className="text-xl text-zinc-400 mb-16 max-w-md mx-auto">
          This page is hidden.<br />
          You weren’t supposed to be here... or were you?
        </p>

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-12 shadow-2xl">
          <div className="space-y-6 text-left text-zinc-300 text-lg leading-relaxed">
            <p>
              This area contains <span className="text-emerald-400 font-semibold">Dominion’s Trading Journals</span> and 
              advanced <span className="text-emerald-400 font-semibold">Trading Tools</span>.
            </p>
            <p className="text-zinc-400">
              Not meant for public viewing.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-zinc-800 text-xs text-zinc-500 font-mono flex justify-between items-center">
            <div>ACCESS PROTOCOL: ALPHA-7</div>
            <div>{today}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TradingHomePage;