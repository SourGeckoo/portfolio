import styles from './page.module.css'

export default function ProjectPage({ params }) {
  const { slug } = params

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Error 404.</h1>
      <p>The page: {slug} does not exist.</p>
      <a href = "/projects"><button className = {styles.button}>Go back to projects</button></a>
    </div>
  )
}