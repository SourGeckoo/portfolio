import styles from './page.module.css'
import { DM_Mono, Work_Sans } from "next/font/google";
import Carousel from '../components/Carousel';

const DMMono = DM_Mono({subsets: ["latin"], weight: ["300", "400", "500"]})
const WorkSans = Work_Sans({subsets: ["latin"], weight: ["300", "400", "500"]})

const photos = [
  { image: '/mapleforest.png',
    description: "Maple forest with shaders"
   },
   { image: '/moon.jpg',
    description: 'Full moon from southern hemisphere'
   },
   { image: '/rice v2.png',
    description: 'My Linux rice, on Raspberry Pi OS'
   },
   {image: '/cow.png',
    description: "cow."
   },
   {image: '/bowerbird.png',
    description: "Satin bowerbird in a rainforest"
   }
]

export default function Projects() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Gallery</h1>
        <Carousel photos={photos} />
      </div>
    </div>
  )
}