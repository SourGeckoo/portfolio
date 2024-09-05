import styles from './page.module.css'
import { DM_Mono, Work_Sans } from "next/font/google";

const DMMono = DM_Mono({subsets: ["latin"], weight: ["300", "400", "500"]})
const WorkSans = Work_Sans({subsets: ["latin"], weight: ["300", "400", "500"]})

export default function Home() {
  return (
    <div className = {styles.container}>
      <h1 className= {styles.title}>Home</h1>
      <h1>Welcome</h1>
      <h2>This is a test</h2>
      <h3>For global styling</h3>
      <p>
        For the entire website, when no external styles are applied from module.css files.
        These styles could be used in articles, write-ups, general text, etc.
      </p>
      <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='blank'>this is a link</a>
      <p></p>
      <img src='rice v2.png'></img>
      <p>Woah that's a big image...</p>
    </div>
  )
}