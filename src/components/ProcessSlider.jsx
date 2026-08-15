import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { process } from '../data/content';
import Reveal from './Reveal';

export default function ProcessSlider() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (delta) => {
    setDir(delta);
    setIndex((i) => (i + delta + process.length) % process.length);
  };

  const current = process[index];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Reveal className="text-center max-w-2xl mx-auto mb-12">
        <p className="eyebrow mb-3">How We Work</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mb-4">Our Proven Process</h2>
        <p className="text-gray-500">
          A clear, collaborative path from idea to launch — and beyond.
        </p>
      </Reveal>

      {/* Desktop: all steps visible */}
      <div className="hidden md:grid md:grid-cols-5 gap-4">
        {process.map((step, i) => (
          <button
            key={step.step}
            onClick={() => {
              setDir(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`text-left rounded-2xl p-5 border transition-all duration-300 ${
              i === index
                ? 'bg-primary-gradient text-white border-transparent shadow-soft scale-[1.02]'
                : 'bg-white border-gray-100 hover:border-primary-200 text-ink'
            }`}
          >
            <span
              className={`text-2xl font-extrabold ${
                i === index ? 'text-white/80' : 'text-primary-200'
              }`}
            >
              {step.step}
            </span>
            <h3 className={`font-bold mt-2 mb-1 ${i === index ? 'text-white' : 'text-ink'}`}>
              {step.title}
            </h3>
            <p className={`text-xs leading-relaxed ${i === index ? 'text-white/80' : 'text-gray-500'}`}>
              {step.desc}
            </p>
          </button>
        ))}
      </div>

      {/* Mobile: carousel */}
      <div className="md:hidden relative">
        <div className="card !p-8 min-h-[200px] flex flex-col justify-center overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={current.step}
              custom={dir}
              initial={{ opacity: 0, x: dir > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir > 0 ? -40 : 40 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-3xl font-extrabold text-primary-200">{current.step}</span>
              <h3 className="text-xl font-bold text-ink mt-2 mb-2">{current.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{current.desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => go(-1)}
            aria-label="Previous step"
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {process.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDir(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-6 bg-primary-600' : 'w-2 bg-gray-200'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next step"
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
