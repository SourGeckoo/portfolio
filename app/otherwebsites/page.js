import WebsiteBox from '../components/WebsiteBox';
import styles from './page.module.css'
import { DM_Mono, Work_Sans } from "next/font/google";

const DMMono = DM_Mono({subsets: ["latin"], weight: ["300", "400", "500"]})
const WorkSans = Work_Sans({subsets: ["latin"], weight: ["300", "400", "500"]})

const websites = [
  { slug: 'website1',
     title: 'monopodo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula a dui id placerat.', 
      image: "monopodo.png" },

]

export default function Projects() {
  return (
    <div className = {styles.container}>
      <h1 className= {styles.title}>Other Websites</h1>
      <div className = {styles.bentoGrid}>
        {websites.map((websites) => (
          <WebsiteBox key={websites.slug} {...websites} />
        ))}
      </div>
    </div>
  )
}