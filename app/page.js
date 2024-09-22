import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2 className={styles.massivetext}>Welcome, traveller.</h2>
        <br />
        <div className={styles.buttoncontainer}>
          <a href="/projects/smartclock">
            <button className={styles.button}>see latest project</button>
          </a>
        </div>
      </div>
    </div>
  );
}