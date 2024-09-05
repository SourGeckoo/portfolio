import styles from './page.module.css'

export default function ProjectPage({ params }) {
  const { slug } = params

  return (
    <div className = {styles.container}>
      <h1>Welcome, traveller.</h1>
      <h2>This is a test</h2>
      <h3>For global styling</h3>
      <p>
        For the entire website, when no external styles are applied from module.css files.
        These styles could be used in articles, write-ups, general text, etc.
      </p>
      <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='blank'>this is a link</a>
      <p></p>
    </div>
  )
}