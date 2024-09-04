import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/projects/" className={styles.link}>Projects</Link>
      </nav>
    </header>
  )
}