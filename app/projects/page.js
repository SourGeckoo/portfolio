import styles from './page.module.css'
import { DM_Mono, Work_Sans } from "next/font/google";
import VariedBentoGrid from '../components/projectsgrid';

const DMMono = DM_Mono({subsets: ["latin"], weight: ["300", "400", "500"]})
const WorkSans = Work_Sans({subsets: ["latin"], weight: ["300", "400", "500"]})

const projects = [
  { slug: 'fpvdrone',
     title: 'FPV drone',
      description: 'Short description of project goes here', 
      image: "fpvdrone.jpg" },


  { slug: 'autoturret', 
    title: 'Auto turret', 
    description: 'Short description of project goes here', 
    image: "turret.png" },

  { slug: 'digitalclock',
     title: 'Digital clock', 
     description: 'Short description of project goes here', 
     image: "7 segment.jpg" },

  { slug: 'computervisioncam', 
  title: 'Computer vision cam', 
  description: 'Short description of project goes here', 
  image: "cam.jpg" },

  { slug: 'monopodo', 
    title: 'monopodo', 
    description: 'Simple podomoro timer made in Next.js (my first deployed website)', 
    image: "" },

]

export default function Projects() {
  return (
    <div className = {styles.page}>
      <div className = {styles.container}>
      <h1 className= {styles.title}>Projects</h1>
      <VariedBentoGrid projects = {projects}></VariedBentoGrid>
    </div>
    </div>
    
  )
}