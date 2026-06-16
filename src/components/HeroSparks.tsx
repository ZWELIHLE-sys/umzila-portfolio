// Decorative drifting "sunset embers" layer for the hero.
// Each string carries position, size and timing as Tailwind arbitrary-value
// utilities (kept as literals so Tailwind can scan them).
const SPARKS = [
  "left-[8%] bottom-[6%] h-1.5 w-1.5 [animation-duration:8s] [animation-delay:0s]",
  "left-[18%] bottom-[14%] h-1 w-1 [animation-duration:11s] [animation-delay:2.5s]",
  "left-[29%] bottom-[8%] h-2 w-2 [animation-duration:9s] [animation-delay:1s]",
  "left-[41%] bottom-[18%] h-1 w-1 [animation-duration:12s] [animation-delay:4s]",
  "left-[53%] bottom-[10%] h-1.5 w-1.5 [animation-duration:10s] [animation-delay:0.8s]",
  "left-[64%] bottom-[16%] h-1 w-1 [animation-duration:13s] [animation-delay:3s]",
  "left-[73%] bottom-[7%] h-2 w-2 [animation-duration:9s] [animation-delay:5s]",
  "left-[82%] bottom-[15%] h-1 w-1 [animation-duration:11s] [animation-delay:1.8s]",
  "left-[90%] bottom-[9%] h-1.5 w-1.5 [animation-duration:10s] [animation-delay:3.6s]",
  "left-[13%] bottom-[20%] h-1 w-1 [animation-duration:14s] [animation-delay:6s]",
  "left-[47%] bottom-[6%] h-1 w-1 [animation-duration:12s] [animation-delay:2s]",
  "left-[59%] bottom-[22%] h-1.5 w-1.5 [animation-duration:9s] [animation-delay:6.5s]",
];

export default function HeroSparks() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {SPARKS.map((cls, i) => (
        <span key={i} className={`spark ${cls}`} />
      ))}
    </div>
  );
}
