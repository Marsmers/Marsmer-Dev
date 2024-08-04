import { motion } from "framer-motion";
import style from "./main.module.css";
import { useEffect } from "react";
import Slider from "../Slider/Slider.";


const Props = () => {


  // Використання
  
  var setVanta = () => {
    window.VANTA.DOTS({
  el: "#bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xffffff,
  color2: 0x8820ff,
  backgroundColor: 0x1e1e1e,
  size: 4.60,
  spacing: 60.00
    });
  };

  useEffect(() => {
    setVanta();
  });

  return (
    <div className={style.main}>
      <div className={style.container} id="bg">
        <motion.div className={style.text}
         initial={{ x: "100%" }}
         animate={{ x: 0 }}
         transition={{ type: "spring", stiffness: 100 }}>
          <h1
           
          >
            HI, I am <span> Maryan Smerchinskiy </span>
          </h1>
          <h2>Front end developer</h2>
          <img
            className={style.icons}
            width="128"
            height="128"
            src="https://img.icons8.com/glyph-neue/128/github.png"
            alt="github"
          />
          <img
            className={style.icons}
            width="128"
            height="128"
            src="https://img.icons8.com/glyph-neue/128/linkedin-circled.png"
            alt="linkedin-circled"
          />
          <img
            className={style.icons}
            width="100"
            height="100"
            src="https://img.icons8.com/ios-filled/100/telegram.png"
            alt="telegram"
          />
          <img
            className={style.icons}
            width="100"
            height="100"
            src="https://img.icons8.com/ios-filled/100/circled-envelope.png"
            alt="circled-envelope"
          />
          <img className={style.sticker} src="/icons/sticker.png" alt="" />
        </motion.div>
      </div>
      <div className={style.aboutMe}>
          <div className={style.background}></div>
        <div className={style.aboutContent}>
          <h1>About me</h1>
          <p>
            I am a software developer with nearly 2 years of experience in the
            IT industry. Proficient in developing web applications from the
            ground up, my primary tech stack includes React, NextJS, TypeScript,
            and Redux. I am passionate about continuously improving my skills
            and learning new technologies. In the future, I aim to expand my
            expertise into backend development and cloud computing, believing
            that a well-rounded skill set will enable me to create more robust
            and scalable applications.
          </p>
          <img className={style.stickerAbout} src="/icons/sticker-hello.png" alt="" />
        </div>
      </div>
      <div className={style.projects}>
        <Slider/>
        <div className={style.projectsAbout}>
        <h1>Projects</h1>
        </div>
      </div>
    </div>
  );
};

export default Props;
