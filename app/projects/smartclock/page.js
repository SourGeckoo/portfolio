import CodeBlock from '@/app/components/CodeBlock'
import styles from './page.module.css'

export default function ProjectPage({ params }) {
  const { slug } = params

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Raspberry Pi smart clock</h1>
        <h3>Events at a glance</h3>
        <p>
          One morning, I woke up and immediately reached for my phone. Then I realised, as I sat on the lock screen of my phone, that maybe that wasn't so good for me. I would end up starting my days with checking the time and my alarm, then my agenda, but falling back into the doom scroll.
        </p>
        <p>
          To combat this, I decided to design a Raspberry Pi smart alarm clock. It would fulfill all the basic needs of my phone in the mornings, like my agenda and the time, without the lure of social media.
        </p>
        <p>
          I started by wiring up an LCD display to my Raspberry Pi. It took me a little while to get it right, after the backlight not working, and the potentiometer messing up the circuit, I finally got to display "Hello World" on my LCD display from the Raspberry Pi.
        </p>
        <div className={styles.figurecontainer}>
            <img src='/helloworld.jpg' className={styles.inlineimage}/>
            <p className={styles.caption}>Fig. 1: Working LCD with message rendered from Raspberry Pi</p>
        </div>

        <p>Then I moved on to writing the backend code. I first ran some tests setting up the Notion API, and sent requests and pings to the API from my laptop. They worked, and so I started linking up my database and formatting time strings. I wrote a short script in Python to do this repeatedly.</p>

        <p>
          Now I knew that I could integrate this script as a module into my next test, which would be dynamically displaying text from Python scripts on a Raspberry Pi. I wrote some more code, and eventually got to the stage where I could display the date and time from the Pi.
        </p>

        <div className={styles.figurecontainer}>
            <img src='/smartclock-timedate.jpg' className={styles.inlineimage}/>
            <p className={styles.caption}>Fig. 2: Working LCD with live time rendered from Raspberry Pi (updated every second)</p>
        </div>

        <p>Now, the challenge was bringing everything together. I cloned my Github repo and ran the Notion API grabber on the Pi, and it worked first try. Then, I imported the module into the LCD script and changed the text to display the variable from the API getter. The first time, all the text corrupted and I was getting garbled text, but after some tweaking to the string handling I got it to work!</p>

        <div className={styles.figurecontainer}>
            <img src='/smartclockmonitor.jpg' className={styles.inlineimage}/>
            <p className={styles.caption}>Fig. 3: Raspberry Pi monitor displaying nvim and btop</p>
        </div>

        <div className={styles.figurecontainer}>
            <img src='/smartclock.jpg' className={styles.inlineimage}/>
            <p className={styles.caption}>Fig. 4: The LCD HUD displaying upcoming events</p>
        </div>

        <p>I set it in such a way that after a 3s interval, it toggles between showing the time and date and the upcoming event. That way, it still functions as a clock.</p>

        <p>But then I realised I could take this project a little further. So I decided to add a button and hook it up to the DPIO pins to send input to the Pi. Then, after some additions to the code, I could switch between modes by pressing the button.</p>

        <div className={styles.figurecontainer}>
            <img src='/hmmmm.jpg' className={styles.inlineimage}/>
            <p className={styles.caption}>Fig. 5: The full clock system with the button added</p>
        </div>

        <a href="/projects">
          <button className={styles.button}>Go back to projects</button>
        </a>
      </div>
    </div>
    
  )
}