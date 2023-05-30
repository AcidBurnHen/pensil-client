import Image from 'next/image'
import styles from '../public/styles/App.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.hello}>Hello dude</h1>
    </main>
  )
}
