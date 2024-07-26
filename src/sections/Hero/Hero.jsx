import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import Sun from "../../assets/sun.svg";
import Moon from "../../assets/moon.svg";
import twitterIconLight from "../../assets/twitter-light.svg";
import twitterIconDark from "../../assets/twitter-dark.svg";
import githubIconLight from "../../assets/github-light.svg";
import githubIconDark from "../../assets/github-dark.svg";
import linkedinIconLight from "../../assets/linkedin-light.svg";
import linkedinIconDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useContext } from "react";
import { ThemeProvider, useTheme } from "../../common/contexts/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.HeroImg}
          src={heroImg}
          alt="Profile Picture of Shushant Ghosh "
        />
        <img
        className={styles.colorMode}
          src={theme === "light" ? Sun : Moon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Shushant
          <br />
          Ghosh
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="#" target="_blank">
            <img
              src={theme === "light" ? twitterIconLight : twitterIconDark}
              alt="Twitter Icon"
            />
          </a>
          <a href="#" target="_blank">
            <img
              src={theme === "light" ? githubIconLight : githubIconDark}
              alt="Github Icon"
            />
          </a>
          <a href="#" target="_blank">
            <img
              src={theme === "light" ? linkedinIconLight : linkedinIconDark}
              alt="LinkedIn Icon"
            />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesss.
        </p>
        <a href={CV} download="shushant_ghosh_resume" target="_blank">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
