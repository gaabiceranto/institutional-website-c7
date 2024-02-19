import { Header } from './components/header/header'
import styles from './page.module.scss'

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Hoome</h1>
      <Header />
    </>
  )
}
