import styles from './page.module.css'

export default function ProjectPage({ params }) {
  const { slug } = params

  return (
    <div className = {styles.container}>
      <h1>Podomoro timer web app</h1>
      <h3>The simplest podomoro timer ever.</h3>
      <p>
        When browsing online for podomoro timers I could embed in my Notion page, I struggled to find one with just the timer, which would fit in such a small space without overcomplicating the tool.
      </p>
      <div className={styles.figurecontainer}>
        <figure>
          <img src='/monopodo2.png' className={styles.inlineimage}/>
          <figcaption className={styles.caption}>Fig. 1: The timer itself, before colours were added.</figcaption>
        </figure>
      </div>

      <p>
        Turns out, the best solution was to create a web app myself using Next.js and Vercel. I decided to go with this framework for simplicity and because it was easy to learn. I basically self-taught myself the framework through this project, and made a fully functional tool in the process!
      </p>


      <p> You can use the tool yourself<a href = "https://monopodo.vercel.app" target = "blank">here</a>for free, forever. Source code is available on my Github repository<a href = "https://github.com/SourGeckoo/monopodo" target = "blank">here</a>
      </p>
      <a href = "/projects"><button className = {styles.button}>Go back to projects</button></a>
    </div>
  )
}