import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Emmanuel Ajayi",
    role: "Snr Marketer",
    company: "Wakanow",
    quote:
      "Our old website was losing us customers — bounce rate was 78% and we hadn't gotten a single inquiry in 3 months. After the rebuild, bounce rate dropped to 32% and we closed 4 new contracts worth $85K in the first 6 weeks.",
    image: "/images/testimonials/emmanuel.jpg",
  },
  {
    name: "Amaka Osei",
    role: "Founder",
    company: "BrightCart",
    quote:
      "Handed over the brief on a Monday, had a live staging link by Thursday. The attention to detail was unreal — every interaction felt intentional. Our customers noticed immediately.",
    image: "/images/testimonials/amaka.jpg",
  },
  {
    name: "Tunde Adeyemi",
    role: "CTO",
    company: "PayStack Clone",
    quote:
      "The backend architecture he delivered scaled from 200 to 40,000 users without a single outage. Clean code, zero shortcuts. Exactly what we needed.",
    image: "/images/testimonials/tunde.jpg",
  },
  {
    name: "Chisom Eze",
    role: "Head of Growth",
    company: "Sendbox",
    quote:
      "We needed a WhatsApp automation bot in two weeks. Not only did he ship it on time, it handled edge cases we hadn't even thought of. Game changer for our support team.",
    image: "/images/testimonials/chisom.jpg",
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  }),
};

const TestimonialSection = () => {
   const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="p-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span
            className="text-xs font-mono tracking-widest uppercase font-semibold
                       bg-linear-to-r from-green-500 via-green-400 to-yellow-400
                       dark:from-green-400 dark:via-green-500 dark:to-yellow-500
                       bg-clip-text text-transparent"
          >
            What clients say
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
          Testimonials
        </h1>
      </motion.div>

      <div
        className="relative rounded-2xl overflow-hidden
                   border border-white/10
                   bg-white/5 backdrop-blur-md"
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 gap-0"
          >
            <div className="relative h-72 md:h-auto min-h-80 overflow-hidden">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="hidden md:block absolute inset-y-0 right-0 w-16 bg-linear-to-r from-transparent to-white/5" />
              <div className="md:hidden absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black/40 to-transparent" />
            </div>

            <div className="flex flex-col justify-between p-7 md:p-10">
              <div>
                <FaQuoteLeft className="text-white/15 text-4xl mb-5" />
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  {current.quote}
                </p>
              </div>

              <div className="mt-8">
                <p className="font-semibold text-white text-base">{current.name}</p>
                <p className="text-sm mt-0.5">
                  <span
                    className="bg-linear-to-r from-green-400 to-yellow-400
                               bg-clip-text text-transparent font-medium"
                  >
                    {current.role}
                  </span>
                  <span className="text-white/40"> · {current.company}</span>
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <button
                    onClick={() => go(-1)}
                    aria-label="Previous"
                    className="w-9 h-9 rounded-full border border-white/20
                               flex items-center justify-center text-white/60
                               hover:border-white/50 hover:text-white
                               transition-all duration-200"
                  >
                    <FaChevronLeft size={12} />
                  </button>
                  <button
                    onClick={() => go(1)}
                    aria-label="Next"
                    className="w-9 h-9 rounded-full border border-white/20
                               flex items-center justify-center text-white/60
                               hover:border-white/50 hover:text-white
                               transition-all duration-200"
                  >
                    <FaChevronRight size={12} />
                  </button>

                  <div className="flex items-center gap-1.5 ml-1">
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                        className={`rounded-full transition-all duration-200 ${
                          i === index
                            ? "w-4 h-1.5 bg-white"
                            : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TestimonialSection;