import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

function Character({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block whitespace-pre">
      <span className="invisible">{char}</span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });
  const characters = Array.from(text);

  return (
    <p ref={ref} className={className}>
      {characters.map((char, i) => (
        <Character
          key={i}
          char={char}
          index={i}
          total={characters.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}
