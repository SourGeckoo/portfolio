import Link from 'next/link'
import styles from './WebsiteBox.module.css'

export default function WebsiteBox({ title, description, image, link }) {
  return (
    <Link href={link} className={styles.WebsiteBox} target='blank'>
      <h1 className={styles.title}>{title}</h1>
      <p>{description}</p>
      <img src = {image} width={"100%"}></img>
    </Link>
  )
}