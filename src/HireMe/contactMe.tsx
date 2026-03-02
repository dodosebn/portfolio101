import { Link } from "@tanstack/react-router";
import ContactDetails from "./customs/contactMaps";
import FormItself from "@/components/utils/formItself";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(4px)",
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      delay: custom * 0.18,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const ContactMe: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="px-4 mt-4"
      id="Contact"
    >
      <h1 className="lg:text-3xl text-2xl text-center font-semibold pb-5">
        I'm always open to new opportunities and excited to collaborate on
        innovative projects.
      </h1>

      <div className="flex lg:flex-row flex-col justify-center mx-auto text-center mt-5">
        <FormItself />

        <div className="lg:border-l-2 border-b-2 border-gray-400 lg:mx-4 my-4"></div>

        <div className="mt-5">
          {ContactDetails.map((item, index) => {
            const isWhatsApp = item.id === 4;
            const isEmail = item.id === 2;

            return (
              <motion.div
                key={item.id}
                custom={index}
                variants={cardVariants}
                className={`flex gap-2 p-2 items-center ${
                  isWhatsApp && "bg-green-800 text-white  rounded-full w-40 text-center"
                }`}
              >
                <item.logo />

                {isWhatsApp ? (
                  <a
                    href="https://wa.me/2347069280208?text=Hi%20I%20got%20your%20message%20from%20the%20website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{item.content}</span>
                  </a>
                ) : isEmail ? (
                  <a href="mailto:orjidominion32@gmail.com">
                    <span>{item.content}</span>
                  </a>
                ) : (
                  <span>{item.content}</span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
