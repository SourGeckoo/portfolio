import styles from './page.module.css'

export default function ProjectPage({ params }) {
  const { slug } = params

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <h2 className = {styles.subtitle}>error. page not found.</h2>
        <p>The page "{slug}" does not exist, or has been moved.</p>
        <a href = "/projects"><button className = {styles.button}>Go back to projects</button></a>
      </div>
    </div>
  )
}