import styles from './page.module.css'
import { DM_Mono, Work_Sans } from "next/font/google";
import SocialsGrid from '../components/socialsgrid';

const DMMono = DM_Mono({subsets: ["latin"], weight: ["300", "400", "500"]})
const WorkSans = Work_Sans({subsets: ["latin"], weight: ["300", "400", "500"]})

const socials = [
  { title: 'Github',
    linktext: 'github.com/SourGeckoo',
    description: 'All source code and repositories are available here!',
    link: "https://github.com/SourGeckoo",
    target: "_blank"},

  { title: 'This site',
    linktext: 'sourgecko.vercel.app',
    description: "This site is just a place where I can show off all the cool stuff I've made and done over the years. I've made it from scratch using Next.js, and themed it around the Gruvbox Dark theme.",
    link: "/",},

  { title: 'Ko-fi',
    linktext: 'ko-fi.com/sourgecko',
    description: "Fund my projects by donating anything from $1 to a dinosaur.",
    link: "https://ko-fi.com/sourgecko",
    target: "_blank"},
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