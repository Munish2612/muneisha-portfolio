import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';

interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Sentinel AI',
    category: 'Concept / Development',
    description:
      'An offline-first Android concept for detecting potential emergency events using smartphone sensors and providing emergency assistance.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=675&q=70',
    alt: 'Earth seen from space at night',
  },
  {
    number: '02',
    name: 'Oil Spill Detection AI',
    category: 'Hackathon Project',
    description:
      'A satellite-imagery analysis concept combining SAR-based oil-spill segmentation, look-alike classification and drift forecasting.',
    image:
      'https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=1200&h=675&q=70',
    alt: 'Aerial view of the ocean surface',
  },
  {
    number: '03',
    name: 'FurnaceIQ',
    category: 'Prototype',
    description:
      'A web-based furnace monitoring and energy analysis prototype that brings furnace inputs and performance insights into one place.',
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&h=675&q=70',
    alt: 'Industrial manufacturing plant',
  },
  {
    number: '04',
    name: 'Scheme Saathi',
    category: 'Hackathon Prototype',
    description:
      'An AI-assisted government scheme discovery concept surfacing potentially relevant schemes, eligibility details and application guidance.',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&h=675&q=70',
    alt: 'Modern city skyline with civic buildings',
  },
  {
    number: '05',
    name: 'CrewNexa',
    category: 'Early-stage Venture',
    description:
      'A student-focused marketplace concept connecting college students seeking flexible event work with event contractors who need temporary staff.',
    image:
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&h=675&q=70',
    alt: 'Event venue set up for a celebration',
  },
  {
    number: '06',
    name: 'Manuscript Formatter',
    category: 'Hackathon Concept',
    description:
      'A document-processing concept transforming raw DOCX manuscripts into publication-ready DOCX and PDF files through automated formatting.',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&h=675&q=70',
    alt: 'Professional writing workspace',
  },
];

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.015;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 md:top-32">
      <motion.div
        style={{
          scale,
          top: `${index * 20}px`,
          transformOrigin: 'top center',
        }}
        className="rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:rounded-[50px] sm:p-8 md:rounded-[60px] md:p-10"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8">
          <span
            className="font-black leading-none text-[#D7E2EA]"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
          >
            {project.number}
          </span>
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
              {project.category}
            </span>
            <span
              className="font-medium uppercase leading-tight text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 3rem)' }}
            >
              {project.name}
            </span>
          </div>
        </div>

        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          className="h-[220px] w-full rounded-[40px] object-cover sm:h-[300px] md:rounded-[50px] md:h-[340px] lg:rounded-[60px]"
        />

        <p
          className="max-w-3xl pt-6 font-light leading-relaxed text-[#D7E2EA] opacity-70"
          style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
        >
          {project.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div ref={containerRef} className="flex flex-col gap-8 md:gap-12">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>

      <div className="flex justify-center pt-20">
        <a
          href="https://github.com/muneishachandru-ai"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-base"
        >
          More experiments on GitHub ↗
        </a>
      </div>
    </section>
  );
}
