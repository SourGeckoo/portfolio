import CodeBlock from '@/app/components/CodeBlock'
import styles from './page.module.css'

export default function ProjectPage({ params }) {
  const { slug } = params

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Podomoro timer web app</h1>
        <h3>The simplest podomoro timer ever.</h3>
        <p>
          When browsing online for podomoro timers I could embed in my Notion page, I struggled to find one with just the timer, which would fit in such a small space without overcomplicating the tool.
        </p>
        <p>
          Turns out, the best solution was to create a web app myself using Next.js and Vercel. I decided to go with this framework for simplicity and because it was easy to learn. I basically self-taught myself the framework through this project, and made a fully functional tool in the process! This was my first time making a fully fledged website which I could publish, and using a proper Javascript framework while doing so.
        </p>
        <div className={styles.figurecontainer}>
            <img src='/monopodo2.png' alt='Podomoro Timer' className={styles.inlineimage}/>
            <p className={styles.caption}>Fig. 1: The timer itself, before colours were added.</p>
        </div>

        <p>This is the code for the reducer, which I'm very proud of. It's basically just a timer function, with different modes and lengths associated with them. I learnt about function cases, which I actually never learnt when I was first learning the basics of Javascript.</p>

        <div className = {styles.codecontainer}>
          <CodeBlock language = "javascript" codeString=
          {
  `function reducer(state, action) {
  switch (action.type) {
    case 'TICK':
      if (state.seconds > 0) {
        return { ...state, seconds: state.seconds - 1 };
      } else if (state.minutes > 0) {
        return { ...state, minutes: state.minutes - 1, seconds: 59 };
      } else {
        const newMode = state.mode === 'work' ? 'break' : 'work';
        return {
          ...state,
          isActive: false,
          mode: newMode,
          minutes: newMode === 'work' ? 25 : 5,
          seconds: 0,
          backgroundColor: newMode === 'work' ? '#8c443e' : '#3b5d75',
        };
      }
    case 'TOGGLE_TIMER':
      return { ...state, isActive: !state.isActive };
    case 'RESET_TIMER':
      return {
        ...state,
        isActive: false,
        minutes: state.mode === 'work' ? 25 : 5,
        seconds: 0,
      };
    case 'TOGGLE_STATE':
      const newMode = state.mode === 'work' ? 'break' : 'work';
      return {
        ...state,
        mode: newMode,
        backgroundColor: newMode === 'work' ? '#8c443e' : '#3b5d75',
        isActive: false,
        minutes: state.mode === 'break' ? 25 : 5,
        seconds: 0,
      };
    default:
      return state;
  }
}`
          }></CodeBlock>
        <p className = {styles.caption}>Fig. 2: A snapshot of the reducer function used in the timer backend</p>
        </div>
        <p>
          You can use the tool yourself <a href="https://monopodo.vercel.app" target="_blank" rel="noopener noreferrer">here</a> for free, forever. Source code is available on my GitHub repository <a href="https://github.com/SourGeckoo/monopodo" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
        <a href="/projects">
          <button className={styles.button}>Go back to projects</button>
        </a>
      </div>
    </div>
    
  )
}