import styles from "./ProjectsStyles.module.css";
import Viberr from "../../assets/viberr.png";
import FreshBurger from "../../assets/fresh-burger.png";
import HipssterGlasses from "../../assets/hipsster.png";
import FitLift from "../../assets/fitlift.png";
import ProjectCard from "./ProjectCard";

const projectsList = [
  {
    link: "https://www.youtube.com/",
    img: Viberr,
    title: "Viberr",
    desc: "Streaming App",
  },
  {
    link: "https://www.youtube.com/",
    img: FreshBurger,
    title: "Fresh Burger",
    desc: "Food Delivery App",
  },
  {
    link: "https://www.youtube.com/",
    img: HipssterGlasses,
    title: "Hipsster",
    desc: "Glasses Shopping App",
  },
  {
    link: "https://www.youtube.com/",
    img: FitLift,
    title: "FitLift",
    desc: "Fitness App",
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projectsList.map((item,key) => {
          return (
            <ProjectCard
          link={item.link}
          img={item.img}
          title={item.title}
          desc={item.desc}
        />
          )
        })}
      </div>
    </section>
  );
}

export default Projects;
