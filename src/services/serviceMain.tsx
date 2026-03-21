import { motion, type Variants } from "framer-motion";

const Areas = [
  {
    name: "Frontend Development",
    desc: "I build interfaces people actually enjoy using - pixel-precise, fast-loading, and built to impress on every screen.",
  },
  {
    name: "Backend Development",
    desc: "I architect server-side systems that hold up under pressure - clean logic, optimized queries, zero shortcuts.",
  },
  {
    name: "Mobile App Development",
    desc: "I ship iOS and Android apps that feel native and perform like it - no lag, no compromise.",
  },
  {
    name: "AI Agent / Bot",
    desc: "I build custom AI agents and automation bots that do the heavy lifting - from WhatsApp bots to full workflow automation.",
  },
  {
    name: "Website Management",
    desc: "I keep your site sharp, fast, and up-to-date - so you never have to think about it.",
  },
  {
    name: "Advertising & Marketing",
    desc: "I run campaigns with one goal: real results. More traffic, better conversions, measurable ROI.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const ServiceMain = () => {
  return (
    <section id="services" className="p-4">
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="mb-8"
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
            Available for hire
          </span>
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold dark:text-white text-gray-900 tracking-tight">
          What I Do
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md text-sm leading-relaxed">
          Freelance, contract, or full-time - I'm open across these areas.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {Areas.map((area, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-5 rounded-xl cursor-pointer border border-gray-500/60
                      dark:bg-[#0e0e0e]/30
                       transition-colors duration-200"
          >
            <h2 className="font-semibold text-gray-900 dark:text-gray-100 text-md mb-1.5">
              {area.name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {area.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServiceMain;