import React from "react";
import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "./SkillList";

const skillList1 = ["HTML","CSS","JavaScript","TypeScript","Node"]
const skillList2 = ["React","Angular","Vue","TailwindCSS"]
const skillList3 = ["Redux","Webpack","Git","Jest","Bootstrap"]

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        {skillList1.map((item,key)=> {
            return (
                <SkillList img={checkMarkIcon} skill={item} />
            )
        })}
      </div>
      <hr />
      <div className={styles.skillList}>
        {skillList2.map((item,key)=> {
            return (
                <SkillList img={checkMarkIcon} skill={item} />
            )
        })}
      </div>
      <hr />
      <div className={styles.skillList}>
        {skillList3.map((item,key)=> {
            return (
                <SkillList img={checkMarkIcon} skill={item} />
            )
        })}
      </div>
    </section>
  );
}

export default Skills;
