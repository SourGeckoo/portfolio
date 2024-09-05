import styles from './page.module.css'
import { DM_Mono, Work_Sans } from "next/font/google";

const DMMono = DM_Mono({subsets: ["latin"], weight: ["300", "400", "500"]})
const WorkSans = Work_Sans({subsets: ["latin"], weight: ["300", "400", "500"]})

export default function Home() {
  return (
    <div className = {styles.container}>
      <h1 className= {styles.title}>Home</h1>

      <h1>Welcome, traveller.</h1>
      
      <p> <img src = "cam.jpg" className = {styles.inlineimage}></img>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan neque in lacus efficitur maximus. Ut sollicitudin lobortis arcu, non pharetra dolor mollis sit amet. Suspendisse cursus diam ligula, in aliquet nunc tincidunt vel. Nulla gravida libero non dui dapibus, vitae porta est varius. Nunc justo nisi, tristique vel lobortis vitae, elementum at sapien. Sed eros nisl, sagittis at ultricies eu, hendrerit a eros. Maecenas congue lacus enim, vel interdum ipsum interdum non.</p>
    </div>
  )
}