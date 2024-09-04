import styles from './page.module.css'

export default function ProjectPage({ params }) {
  const { slug } = params

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>This one is different</h1>
      <p>Because we replaced the slug code</p>
      {/* Add more project details here */}
    </div>
  )
}