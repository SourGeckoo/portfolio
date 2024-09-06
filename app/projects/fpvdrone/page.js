import styles from './page.module.css'

export default function ProjectPage({ params }) {
  const { slug } = params

  return (
    <div className = {styles.container}>
      <h1>Hello, world!</h1>
      <h2>This is a test</h2>
      <h3>For global styling</h3>
      <p>
        For the entire website, when no external styles are applied from module.css files.
        These styles could be used in articles, write-ups, general text, etc.
      </p>
      <a href = "/projects"><button className = {styles.button}>Go back to projects</button></a>
    </div>
  )
}