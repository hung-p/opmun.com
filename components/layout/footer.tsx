import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full px-8 py-12 flex flex-col md:flex-row justify-between items-center border-t border-[#3b494c]/20 bg-[#111317]">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex items-center gap-2">
          <svg aria-hidden="true" className="text-white" fill="none" height="20" viewBox="0 0 24 24" width="20">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
            <rect fill="currentColor" height="2" width="20" x="2" y="11"></rect>
          </svg>
          <span className="text-lg font-black text-white font-headline">Opmun</span>
        </div>
        <div className="flex gap-8">
          <Link className="font-label text-sm text-[#849396] hover:text-[#c3c0ff] transition-opacity opacity-80 hover:opacity-100" href="#">Roadmap</Link>
          <Link className="font-label text-sm text-[#849396] hover:text-[#c3c0ff] transition-opacity opacity-80 hover:opacity-100" href="#">v0.1 Indicator</Link>
        </div>
      </div>
      <div className="mt-8 md:mt-0 flex flex-col items-center md:items-end gap-2">
        <p className="font-label text-[10px] text-[#849396] uppercase tracking-[0.2em]">2026 Opmun System Architecture</p>
        <div className="text-[9px] font-label text-outline/40 mt-1">Licensed under Apache 2.0 & CC BY-SA 4.0</div>
      </div>
    </footer>
  );
}
