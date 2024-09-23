import WebsiteBox from '../components/WebsiteBox';
import styles from './page.module.css'
import { DM_Mono, Work_Sans } from "next/font/google";

const DMMono = DM_Mono({subsets: ["latin"], weight: ["300", "400", "500"]})
const WorkSans = Work_Sans({subsets: ["latin"], weight: ["300", "400", "500"]})

const websites = [
  { title: 'monopodo',
    description: 'The simplest podomoro timer ever.', 
    image: "/monopodo.png",
    link: "https://monopodo.vercel.app"},

]

export default function Projects() {
  return (
    <div className = {styles.page}>
      <div className = {styles.container}>
        <h1 className= {styles.title}>Websites</h1>
        <div className = {styles.bentoGrid}>
          {websites.map((websites) => (
            <WebsiteBox key={websites.title} {...websites} />
          ))}
        </div>
      </div>
    </div>
    
  )
}