import styles from './page.module.css'

export default function ProjectPage({ params }) {
  const { slug } = params

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Coming soon</h1>
        <h2 className = {styles.subtitle}>Currently working on it.</h2>
        <p>Building more cool stuff right now. Check back soon to see!</p>
        <a href = "/projects"><button className = {styles.button}>Go back to projects</button></a>
      </div>
    </div>
  )
}