import styles from './page.module.css'
import { DM_Mono, Work_Sans } from "next/font/google";
import PhotoGrid from '../components/photogrid';

const DMMono = DM_Mono({subsets: ["latin"], weight: ["300", "400", "500"]})
const WorkSans = Work_Sans({subsets: ["latin"], weight: ["300", "400", "500"]})

const photos = [
  { image: 'mapleforest.png',
    description: "Minecraft with Biomes o' plenty, complimentary reimagined and falling leaves (maple biome)"
   },

   { image: 'moon.jpg',
    description: 'Full moon from southern hemisphere'
   },

   { image: 'rice v2.png',
    description: 'My Linux rice, on Raspberry Pi OS'
   },
]

export default function Projects() {
  return (
    <div className = {styles.page}>
      <div className = {styles.container}>
        <h1 className= {styles.title}>Gallery</h1>
        <PhotoGrid projects = {photos}></PhotoGrid>
      </div>
    </div>
  )
}