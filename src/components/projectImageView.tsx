import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ProjectImageView = () => {
  const imagesToView = [
    "/imgs/farmculator.png",
    "/imgs/country-details.png",
    "/imgs/job-listing.png",
    "/imgs/car-hub.png",
    "/imgs/room-home-page.png",
    "/imgs/filosofi.png",
    "/imgs/wena-shop.png",
    "/imgs/survey.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagesToView.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagesToView.length]);

  return (
    <div className="relative h-96 overflow-hidden">
      <motion.div
        key={currentIndex}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.img 
          src={imagesToView[currentIndex]} 
          className="rounded-2xl border-2 shadow-2xl border-[#121212] object-cover"
          alt={`Project-${currentIndex}`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export default ProjectImageView;