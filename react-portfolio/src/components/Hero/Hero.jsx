import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Najma</h1>
        <p className={styles.description}>
          I'm a software developer currently enrolled in a Full Stack MERN
          bootcamp. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:najmasy20@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="hero image of me"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
