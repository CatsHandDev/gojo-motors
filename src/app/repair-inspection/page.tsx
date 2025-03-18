import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import RepairInspection from "@/components/RepairInspection/RepairInspection"
import styles from "./page.module.scss"

export default function RepairInspectionPage() {
  return (
    <main>
      <Header />
      <div className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Repair & Inspection</h1>
          <p className={styles.subtitle}>Professional automotive services you can trust</p>
        </div>
      </div>
      <RepairInspection />
      <Footer />
    </main>
  )
}

