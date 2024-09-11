import Link from 'next/link'
import styles from './BentoBox.module.css'

export default function SocialsBox({ title, description, link, target }) {
  return (
    <Link href={link} className={styles.bentoBox} target={target}>
      <h2 className={styles.title}>{title}</h2>
      <p>{description}</p>
    </Link>
  )
}