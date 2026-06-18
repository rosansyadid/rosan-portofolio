interface Props {
  items: string[];
  className?: string;
  speed?: number;
}

export default function MarqueeStrip({ items, className = "", speed = 20 }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden py-4 border-y border-border/30 ${className}`}>
      <div
        className="marquee-track"
        style={{ animation: `marquee-scroll ${speed}s linear infinite` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-['Anton'] text-base tracking-widest uppercase whitespace-nowrap px-8 text-foreground/20 hover:text-primary/60 transition-colors"
          >
            {item}
            <span className="mx-6 text-primary/40">♦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
