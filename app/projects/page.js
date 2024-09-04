import styles from './page.module.css'
import BentoBox from '../components/BentoBox'
import { DM_Mono, Work_Sans } from "next/font/google";

const DMMono = DM_Mono({subsets: ["latin"], weight: ["300", "400", "500"]})
const WorkSans = Work_Sans({subsets: ["latin"], weight: ["300", "400", "500"]})

const projects = [
  { slug: 'project1',
     title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula a dui id placerat.', 
      image: "fpvdrone.jpg" },

  { slug: 'project2', 
    title: 'Project 2', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula a dui id placerat.', 
    image: "computervision.png" },

  { slug: 'project3',
     title: 'Project 3', 
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula a dui id placerat.', 
     image: "7 segment.jpg" },

  { slug: 'project4', 
    title: 'Project 4', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula a dui id placerat. ', 
    image: "turret.png" },

]

export default function Projects() {
  return (
    <div className = {styles.container}>
      <h1 className= {styles.title} >title</h1>
      <div className = {styles.bentoGrid}>
        {projects.map((project) => (
          <BentoBox key={project.slug} {...project} />
        ))}
      </div>
    </div>
  )
}