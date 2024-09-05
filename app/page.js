import styles from './page.module.css'
import { DM_Mono, Work_Sans } from "next/font/google";

const DMMono = DM_Mono({subsets: ["latin"], weight: ["300", "400", "500"]})
const WorkSans = Work_Sans({subsets: ["latin"], weight: ["300", "400", "500"]})

export default function Home() {
  return (
    <div className = {styles.container}>
      <h1 className= {styles.title}>Home</h1>
    </div>
  )
}