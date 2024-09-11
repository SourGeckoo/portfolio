import Link from 'next/link'
import styles from './socialsbox.module.css'

export default function SocialsBox({ title, description, link, target, linktext }) {
  return (
    <Link href={link} className={styles.bentoBox} target={target}>
      <h2 className={styles.title}>{title}</h2>
      <p className = {styles.secondthingy}>{linktext}</p>
      <p>{description}</p>
    </Link>
  )
}