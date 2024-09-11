import React from 'react'
import Link from 'next/link'
import { Home, FolderOpen, User, Image, Globe } from 'lucide-react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.link}>
          <Home className={styles.icon} />
          <span className={styles.linkText}>Home</span>
        </Link>
        <Link href="/projects/" className={styles.link}>
          <FolderOpen className={styles.icon} />
          <span className={styles.linkText}>Projects</span>
        </Link>
        <Link href="/about/" className={styles.link}>
          <User className={styles.icon} />
          <span className={styles.linkText}>About</span>
        </Link>
        <Link href="/gallery/" className={styles.link}>
          <Image className={styles.icon} />
          <span className={styles.linkText}>Gallery</span>
        </Link>
        <Link href="/websites/" className={styles.link}>
          <Globe className={styles.icon} />
          <span className={styles.linkText}>Websites</span>
        </Link>
      </nav>
    </header>
  )
}

export default Header