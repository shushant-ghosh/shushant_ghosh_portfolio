import React from 'react'
function ProjectCard(props) {
    const {link, img, title, desc } = props
  return (
    <a href={link} target="_blank">
          <img src={img} alt={`${title} icon`} />
          <h3>{title}</h3>
          <p>{desc}</p>
        </a>
  )
}
export default ProjectCard
