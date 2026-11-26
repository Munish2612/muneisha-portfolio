import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact'];

const PORTRAIT_URL =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=1000&q=75';

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen flex-col"
      style={{ overflowX: 'clip' }}
    >
      <FadeIn y={-20} delay={0}>
        <nav className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="relative flex-1">
        <FadeIn
          y={30}
          delay={0.6}
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:translate-y-0"
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={PORTRAIT_URL}
              alt="Portrait of Muneisha Chandru G."
              className="h-[320px] w-[280px] rounded-3xl object-cover object-[center_20%] shadow-2xl shadow-black/60 sm:h-[420px] sm:w-[360px] md:h-[500px] md:w-[440px] lg:h-[560px] lg:w-[520px]"
            />
          </Magnet>
        </FadeIn>

        <div className="overflow-hidden">
          <FadeIn y={40} delay={0.15}>
            <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[15vw] md:-mt-5 md:text-[16vw] lg:text-[17.5vw]">
              Hi, i&apos;m muneisha
            </h1>
          </FadeIn>
        </div>
      </div>

      <div className="flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn y={20} delay={0.35}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a cs student exploring ai, ml and practical software
          </p>
        </FadeIn>
        <FadeIn y={20} delay={0.5}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
