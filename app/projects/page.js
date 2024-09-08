import styles from './page.module.css'
import { DM_Mono, Work_Sans } from "next/font/google";
import ProjectsGrid from '../components/projectsgrid';

const DMMono = DM_Mono({subsets: ["latin"], weight: ["300", "400", "500"]})
const WorkSans = Work_Sans({subsets: ["latin"], weight: ["300", "400", "500"]})

const projects = [
  { slug: 'monopodo', 
    title: 'monopodo', 
    description: 'Simple podomoro timer made in Next.js', 
    image: "monopodo.png",
    date: "July 2024" },
  
  { slug: 'fpvdrone',
    title: 'FPV drone',
    description: 'Short description of project goes here', 
    image: "fpvdrone.jpg",
    date: "Coming soon"
    },

  { slug: 'digitalclock',
     title: 'Digital clock', 
     description: 'Short description of project goes here', 
     image: "7 segment.jpg",
     date: "Coming soon" },

  { slug: 'autoturret', 
  title: 'Auto turret', 
  description: 'Short description of project goes here', 
  image: "turret.png",
  date: "Coming soon" },

  { slug: 'something1', 
  title: 'what', 
  description: 'Short description of project goes here', 
  image: "",
  date: "Coming soon" },

  { slug: 'something2', 
    title: 'should', 
    description: 'Short description of project goes here', 
    image: "",
    date: "Coming soon" },

  { slug: 'something3', 
    title: 'i', 
    description: 'Short description of project goes here', 
    image: "",
    date: "Coming soon" },

  { slug: 'something4', 
    title: 'build?', 
    description: 'Short description of project goes here', 
    image: "",
    date: "Coming soon" },

]

export default function Projects() {
  return (
    <div className = {styles.page}>
      <div className = {styles.container}>
      <h1 className= {styles.title}>Projects</h1>
      <ProjectsGrid projects = {projects}></ProjectsGrid>
    </div>
    </div>
    
  )
}