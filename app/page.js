import styles from './page.module.css'
import { DM_Mono, Work_Sans, JetBrains_Mono } from "next/font/google";

const DMMono = DM_Mono({subsets: ["latin"], weight: ["300", "400", "500"]})
const WorkSans = Work_Sans({subsets: ["latin"], weight: ["300", "400", "500"]})
const JetBrainsMono = JetBrains_Mono({subsets: ["latin"], weight: ["variable"]})

export default function Home() {
  return (
    <div className = {styles.page}>
      <div className = {styles.container}>
        <h2 className = {styles.massivetext}>Welcome, traveller.</h2>
        <p>You have entered the land of the Sour Gecko.</p>
        <br></br>
        <hr></hr>
        <br></br>
        <h2 className = {styles.question}>BUT WHAT DO YOU SEEK?</h2>
        <br></br>
        <hr></hr>
        <br></br>
        <div className = {styles.buttoncontainer}>
          <a href = "/projects/monopodo"><button className = {styles.button}>see latest project</button></a>
        </div>
      </div>
    </div>

  )
}