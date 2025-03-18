import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import CompanyOverview from "@/components/CompanyOverview/CompanyOverview"
import styles from "./page.module.scss"

export default function CompanyPage() {
  return (
    <main>
      <Header />
      <div className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Company Overview</h1>
          <p className={styles.subtitle}>Learn more about G-select</p>
        </div>
      </div>
      <CompanyOverview />
      <Footer />
    </main>
  )
}

