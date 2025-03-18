import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>G - select</h1>
          <p className={styles.subtitle}>
            Your trusted partner for new and used cars,
            <br />
            repairs, and inspections
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

