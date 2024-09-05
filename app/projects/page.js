import styles from './page.module.css'
import BentoBox from '../components/BentoBox'
import { DM_Mono, Work_Sans } from "next/font/google";

const DMMono = DM_Mono({subsets: ["latin"], weight: ["300", "400", "500"]})
const WorkSans = Work_Sans({subsets: ["latin"], weight: ["300", "400", "500"]})

const projects = [
  { slug: 'project1',
     title: 'FPV drone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
      image: "fpvdrone.jpg" },

  { slug: 'project2', 
    title: 'Computer vision dashcam', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
    image: "computervision.png" },

  { slug: 'project3',
     title: 'Digital clock', 
     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
     image: "7 segment.jpg" },

  { slug: 'project4', 
    title: 'Auto turret', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
    image: "turret.png" },

]

export default function Projects() {
  return (
    <div className = {styles.container}>
      <h1 className= {styles.title}>projects</h1>
      <div className = {styles.bentoGrid}>
        {projects.map((project) => (
          <BentoBox key={project.slug} {...project} />
        ))}
      </div>
    </div>
  )
}