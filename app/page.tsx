import Image from 'next/image'
import styles from '../public/styles/App.module.scss'
import Header from '../components/Header'

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <Header />
      {/** TODO -> Create feed */}
    </main>
  )
}
