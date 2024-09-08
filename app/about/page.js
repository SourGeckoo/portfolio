import styles from './page.module.css'
import { DM_Mono, Work_Sans } from "next/font/google";
import SocialsGrid from '../components/socialsgrid';

const DMMono = DM_Mono({subsets: ["latin"], weight: ["300", "400", "500"]})
const WorkSans = Work_Sans({subsets: ["latin"], weight: ["300", "400", "500"]})

const socials = [
  { title: 'Github',
    description: 'All source code and repositories are available here!',
    link: "https://github.com/SourGeckoo"},

  { title: 'what',
    description: 'i dunno',
    link: ""},
]

export default function Projects() {
  return (
    <div className = {styles.page}>
      <div className = {styles.container}>
        <h1 className= {styles.title}>About</h1>
        <SocialsGrid projects = {socials}></SocialsGrid>
      </div>
    </div> 
  )
}