import Link from "next/link"
import Image from "next/image"
import styles from "./UsedCarSearch.module.scss"

const UsedCarSearch = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Used Car Search</h2>
        <p className={styles.subtitle}>Find quality pre-owned vehicles</p>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Quality Used Cars</h3>
            <p className={styles.infoText}>
              We offer a wide selection of thoroughly inspected used cars. Whether you&apos;re looking to buy or sell a used
              vehicle, our team is here to provide expert guidance and ensure you get the best value.
            </p>
            <Link href="/used-cars" className={styles.button}>
              Search Used Cars
            </Link>
          </div>
          <div className={styles.imageWrapper}>
            <Image src="/used-car.jpg" alt="Used Car" width={500} height={300} className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default UsedCarSearch

