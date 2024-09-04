import Link from 'next/link'
import styles from './BentoBox.module.css'

export default function BentoBox({ slug, title, description, image }) {
  return (
    <Link href={`/projects/${slug}`} className={styles.bentoBox}>
      <h2 className={styles.title}>{title}</h2>
      <img src = {image} width={"100%"}></img>
      <p>{description}</p>
    </Link>
  )
}