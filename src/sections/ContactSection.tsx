import FadeIn from '../components/FadeIn';

const LINKS = [
  { label: 'Email', value: 'muneishachandru@gmail.com', href: 'mailto:muneishachandru@gmail.com' },
  { label: 'GitHub', value: 'View my code ↗', href: 'https://github.com/muneishachandru-ai' },
  { label: 'LinkedIn', value: 'Professional profile ↗', href: 'https://www.linkedin.com/in/muneisha-chandru-ab50b5384' },
];

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-14">
        <FadeIn y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 110px)' }}
          >
            Let&apos;s connect
          </h2>
          <p className="mx-auto mt-6 max-w-[460px] text-center font-light leading-relaxed text-[#D7E2EA] opacity-70" style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.2rem)' }}>
            I&apos;m open to learning opportunities, internships, hackathon collaborations and conversations about practical technology.
          </p>
        </FadeIn>

        <div className="flex flex-col">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="flex items-center justify-between border-b border-white/15 py-6 transition-opacity duration-200 hover:opacity-70"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
                {link.label}
              </span>
              <span
                className="font-medium text-[#D7E2EA]"
                style={{ fontSize: 'clamp(0.9rem, 2vw, 1.4rem)' }}
              >
                {link.value}
              </span>
            </a>
          ))}
        </div>

        <p className="text-center text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-50">
          © {new Date().getFullYear()} Muneisha Chandru G. — Designed and built with curiosity.
        </p>
      </div>
    </footer>
  );
}
