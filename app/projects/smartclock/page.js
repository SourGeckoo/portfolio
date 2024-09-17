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
            <img src='/ADD IMAGE HERE.png' alt='Hello world on LCD' className={styles.inlineimage}/>
            <p className={styles.caption}>Fig. 1: Working LCD with message rendered from Raspberry Pi</p>
        </div>

        <p>Then I moved on to writing the backend code. I first ran some tests setting up the Notion API, and sent requests and pings to the API from my laptop. They worked, and so I started linking up my database and formatting time strings. I wrote a short script in Python to do this:</p>

        <div className = {styles.codecontainer}>
          <CodeBlock language = "python" codeString=
          {
  `from notion_client import Client
import datetime
import json
import pytz
import httpx

def load_secrets():
    with open('secrets.json', 'r') as secrets_file:
        return json.load(secrets_file)

config = load_secrets()

database_id = config['databaseid']
secret = config['api_secret']

notion = Client(auth=secret)

timezone = pytz.timezone('Australia/Sydney')

def get_event():
    global output
    global event_name
    global relative_time

    now = datetime.datetime.now(timezone)

    try:
        response = notion.databases.query(
            database_id=database_id,
            filter={
                "property": "Date",
                "date": {
                    "on_or_after": now.isoformat()
                }
            },
            sorts=[
                {
                    "property": "Date",
                    "direction": "ascending"
                }
            ],
            page_size=1
        )

        def format_relative_time(event_date):
            global output
            diff = event_date - now
            days = diff.days
            hours, remainder = divmod(diff.seconds, 3600)
            minutes, _ = divmod(remainder, 60)

            if days > 0:
                if days > 7:
                    weeks = days // 7
                    return f"in {weeks}w"
                return f"in {days}d"
            if hours > 0:
                if hours < 5:
                    return f"in {hours}h {minutes}m"
                return f"in {hours}h"
            if minutes > 1:
                return f"in {minutes}m"
            return "Now"

        if response["results"]:
            event = response["results"][0]
            event_name = event["properties"]["Name"]["title"][0]["text"]["content"]
            event_date_str = event["properties"]["Date"]["date"]["start"]

            event_date = datetime.datetime.fromisoformat(event_date_str).astimezone(pytz.UTC)
            event_date = event_date.astimezone(timezone)

            relative_time = format_relative_time(event_date)

            output = f"{event_name} \n{relative_time}"
        else:
            output = "No upcoming events"

    except httpx.ConnectError:
        output = "Failed to connect to Notion servers"}
        `
          }></CodeBlock>
        <p className = {styles.caption}>Fig. 2: A script used to make Notion API queries about upcoming events</p>
        </div>
        <p>
          From this, I knew that I could integrate this script as a module into my next test, which would be dynamically displaying text from Python scripts on a Raspberry Pi. I wrote some more code, and eventually got to the stage where I could display the date and time from the Pi.
        </p>

        <div className={styles.figurecontainer}>
            <img src='/smartclock-timedate.jpg' alt='Time and date on LCD' className={styles.inlineimage}/>
            <p className={styles.caption}>Fig. 3: Working LCD with message rendered from Raspberry Pi</p>
        </div>

        <p>Now, the challenge was bringing everything together. I cloned my Github repo and ran the Notion API grabber on the Pi, and it worked first try. Then, I imported the module into the LCD script and changed the text to display the variable from the API getter. The first time, all the text corrupted and I was getting garbled text, but after some tweaking to the string handling I got it to work!</p>

        <div className={styles.figurecontainer}>
            <img src='/smartclockmonitor.jpg' alt='Monitor from Raspberry Pi' className={styles.inlineimage}/>
            <p className={styles.caption}>Fig. 4: Raspberry Pi monitor displaying nvim and btop</p>
        </div>

        <div className={styles.figurecontainer}>
            <img src='/smartclock.jpg' alt='Event on LCD' className={styles.inlineimage}/>
            <p className={styles.caption}>Fig. 5: The final product, an LCD HUD displaying upcoming events</p>
        </div>

        <p>I set it in such a way that after a 3s interval, it toggles between showing the time and date and the upcoming event. That way, it still functions as a clock!</p>

        <a href="/projects">
          <button className={styles.button}>Go back to projects</button>
        </a>
      </div>
    </div>
    
  )
}