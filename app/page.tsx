import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
export const metadata = {
  title: 'Home',
  description: 'This is the Home page'
}
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
    page
    </main>
  )
}
