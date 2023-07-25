"use client";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

export default async function Home() {
  const headingVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 2 },
    },
  };
  const divsVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.div
      variants={divsVariants}
      initial="hidden"
      animate="animate"
      transition={{ staggerChildren: 0.5 }}
      className="Home"
    >
      <div className="home-text">
        <motion.h3
          variants={headingVariants}
          initial="hidden"
          animate="animate"
        >
          "Indulge in clucking perfection! Explore our exquisite hens and
          chicks, raised with care. Taste the farm-fresh difference. Order now
          for poultry perfection delivered to your door"
        </motion.h3>
        <div className="button">
          <Link href="">Read more</Link>
        </div>
      </div>
      <div className="home-empty"></div>
    </motion.div>
  );
}
