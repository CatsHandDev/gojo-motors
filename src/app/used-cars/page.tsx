import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import UsedCarSearchPage from "@/components/UsedCarSearchPage/UsedCarSearchPage"
import styles from "./page.module.scss"

export default function UsedCarsPage() {
  return (
    <main>
      <Header />
      <div className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Used Car Search</h1>
          <p className={styles.subtitle}>Find quality pre-owned vehicles</p>
        </div>
      </div>
      <UsedCarSearchPage />
      <Footer />
    </main>
  )
}

