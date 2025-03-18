import Link from "next/link"
import styles from "./CompanyInfo.module.scss"

const CompanyInfo = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>About G-select</h2>
        <p className={styles.subtitle}>Your trusted automotive partner</p>

        <div className={styles.content}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Our Company</h3>
            <p className={styles.cardText}>
              G-select Motors has been serving customers since 1985. We pride ourselves on providing exceptional service and
              building long-lasting relationships with our customers.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Our Services</h3>
            <p className={styles.cardText}>
              From new and used car sales to comprehensive repair and inspection services, we offer everything you need
              to keep your vehicle in top condition.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Our Team</h3>
            <p className={styles.cardText}>
              Our team of certified professionals is committed to providing you with the highest level of service and
              expertise in all automotive matters.
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <Link href="/company" className={styles.button}>
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CompanyInfo

