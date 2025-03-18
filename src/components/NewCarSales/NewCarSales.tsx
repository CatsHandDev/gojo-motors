import Link from "next/link"
import Image from "next/image"
import styles from "./NewCarSales.module.scss"

const NewCarSales = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>New Car Sales</h2>
        <p className={styles.subtitle}>Authorized Suzuki Dealership</p>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image src="/new-car.jpg" alt="New Suzuki Car" width={500} height={300} className={styles.image} />
          </div>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Find Your Perfect New Suzuki</h3>
            <p className={styles.infoText}>
              As an authorized Suzuki dealership, we offer the complete range of new Suzuki vehicles. Our knowledgeable
              sales team is here to help you find the perfect car that meets your needs and budget.
            </p>
            <Link href="/new-cars" className={styles.button}>
              View Models & Search
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewCarSales

