import { useEffect, useRef, useState } from 'react';

const IMAGES = [
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=675&q=70',
  'https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=1200&h=675&q=70',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&h=675&q=70',
  'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&h=675&q=70',
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&h=675&q=70',
  'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&h=675&q=70',
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&h=675&q=70',
  'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&h=675&q=70',
];

const ALTS = [
  'Earth seen from space',
  'Aerial view of the ocean surface',
  'Industrial manufacturing plant',
  'Modern city skyline',
  'Event venue set up for a celebration',
  'Writing workspace with documents',
  'Satellite orbiting Earth',
  'Notebook and study workspace',
];

function useScrollOffset(ref: React.RefObject<HTMLElement>) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return offset;
}

function Tile({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="h-[270px] w-[420px] rounded-2xl object-cover"
    />
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const offset = useScrollOffset(sectionRef);
  const row1 = IMAGES.slice(0, 4);
  const row2 = IMAGES.slice(4);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3" style={{ overflowX: 'clip' }}>
        <div
          className="flex w-max gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {[...row1, ...row1, ...row1].map((src, i) => (
            <Tile key={`r1-${i}`} src={src} alt={ALTS[IMAGES.indexOf(src)] ?? ''} />
          ))}
        </div>
        <div
          className="flex w-max gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {[...row2, ...row2, ...row2].map((src, i) => (
            <Tile key={`r2-${i}`} src={src} alt={ALTS[IMAGES.indexOf(src)] ?? ''} />
          ))}
        </div>
      </div>
    </section>
  );
}
