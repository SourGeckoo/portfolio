import Link from 'next/link'
import styles from './BentoBox.module.css'

export default function PhotoBox({ slug, description, image }) {
  return (
    <Link href={image} className={styles.bentoBox}>
      <img src = {image} width={"100%"}></img>
      <p>{description}</p>
    </Link>
  )
}