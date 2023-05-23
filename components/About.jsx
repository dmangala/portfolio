import React from "react";
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles/style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt glareEnable={true} tiltMaxAngleX={10} 
        tiltMaxAngleY={10} perspective={1500} 
        glareColor={"rgb(255,0,0)"}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon.src}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Aperçu.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Je suis un développeurayant accumulé de l'expérience au fil des années, et une expertise dans des frameworks tels que Drupal, React, Wordpress...
        J'apprends rapidement et je collabore étroitement avec les clients pour créer des solutions efficaces, évolutives et conviviales qui résolvent les problèmes 
        du monde réel. 
        Travaillons ensemble pour donner vie à vos idées !


      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 card-flip">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export {About, ServiceCard} ;
