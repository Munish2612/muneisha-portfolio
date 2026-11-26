import FadeIn from '../components/FadeIn';

const SKILL_GROUPS = [
  {
    number: '01',
    name: 'Programming',
    description: 'Python, C, C++, JavaScript.',
  },
  {
    number: '02',
    name: 'Web Development',
    description: 'HTML, CSS, React, FastAPI.',
  },
  {
    number: '03',
    name: 'AI / ML & Data',
    description:
      'Machine Learning, PyTorch, TensorFlow Lite, NLP, Scikit-learn.',
  },
  {
    number: '04',
    name: 'Tools & Platforms',
    description: 'GitHub, Android Studio, PostgreSQL, SQLite, Google Colab.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SKILL_GROUPS.map((group, i) => (
          <FadeIn key={group.number} y={30} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 py-8 sm:gap-10 sm:py-10 md:py-12"
              style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="font-black leading-none text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {group.number}
              </span>
              <div className="pt-2 sm:pt-4">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {group.name}
                </h3>
                <p
                  className="mt-2 max-w-2xl font-light leading-relaxed text-[#0C0C0C] opacity-60 sm:mt-3"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {group.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
        <div style={{ borderTop: '1px solid rgba(12, 12, 12, 0.15)' }} />
        <p className="pt-6 text-center font-light text-[#0C0C0C] opacity-50" style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)' }}>
          Skills shown reflect technologies explored across coursework, self-learning and project work.
        </p>
      </div>
    </section>
  );
}
