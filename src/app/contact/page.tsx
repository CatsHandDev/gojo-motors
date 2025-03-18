import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import ContactForm from "@/components/ContactForm/ContactForm"
import styles from "./page.module.scss"

export default function ContactPage() {
  return (
    <main>
      <Header />
      <div className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>We&apos;d love to hear from you</p>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </main>
  )
}

