import MarqueeStrip from "./MarqueeStrip";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <MarqueeStrip
        items={["Flutter", "Laravel", "React", "Web Developer", "Mobile Developer", "Wild Card", "Rosansyadid"]}
        className="border-t-0 border-b border-border/30"
        speed={30}
      />
      <div className="container mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-['Anton'] text-lg text-foreground tracking-wide">♦ R/S</span>
        <p className="text-muted-foreground text-sm font-['DM_Sans']">Made with ❤️ by Rosansyadid © 2026</p>
        <p className="font-['Share_Tech_Mono'] text-[10px] text-primary/15 tracking-widest">♠ ♥ ♦ ♣ ACE HIGH ♠ ♥ ♦ ♣</p>
      </div>
    </footer>
  );
}
