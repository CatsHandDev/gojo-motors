import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import CarModels from "@/components/CarModels/CarModels"
import styles from "./page.module.scss"

export default function NewCarsPage() {
  return (
    <main>
      <Header />
      <div className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>New Car Sales & Model Search</h1>
          <p className={styles.subtitle}>Explore our range of new Suzuki vehicles</p>
        </div>
      </div>
      <CarModels />
      <Footer />
    </main>
  )
}

