import styles from './page.module.css'

export default function ProjectPage({ params }) {
  const { slug } = params

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{slug}</h1>
      <p>This is the page for project: {slug}</p>
      {/* Add more project details here */}
    </div>
  )
}