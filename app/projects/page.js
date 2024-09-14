import styles from './page.module.css'
import ProjectsGrid from '../components/projectsgrid';

const projects = [
  { slug: 'monopodo', 
    title: 'monopodo', 
    description: 'Simple podomoro timer made in Next.js', 
    image: "monopodo.png",
    date: "July 2024" },
  
  { slug: 'tbd1',
    title: '???',
    description: 'More projects currently in development', 
    date: "Coming soon"
    },

  { slug: 'tbd2',
    title: '???',
    description: 'More projects currently in development', 
    date: "Coming soon"
    },

  { slug: 'tbd3',
    title: '???',
    description: 'More projects currently in development', 
    date: "Coming soon"
    },

  { slug: 'tbd4',
    title: '???',
    description: 'More projects currently in development', 
    date: "Coming soon"
    },

  { slug: 'tbd5',
    title: '???',
    description: 'More projects currently in development', 
    date: "Coming soon"
    },

  { slug: 'tbd6',
    title: '???',
    description: 'More projects currently in development', 
    date: "Coming soon"
    },
]

export default function Projects() {
  return (
    <div className = {styles.page}>
      <div className = {styles.container}>
      <h1 className= {styles.title}>Projects</h1>
      <ProjectsGrid projects = {projects}></ProjectsGrid>
    </div>
    </div>
    
  )
}