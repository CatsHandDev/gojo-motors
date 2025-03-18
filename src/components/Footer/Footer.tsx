import Link from "next/link"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <Link href="/">
              <h3 className={styles.infoTitle}>G-select</h3>
            </Link>
            <p className={styles.infoText}>
              Your trusted partner for new and used cars,<br />
              repairs, and inspections since 1985.
            </p>
            <address className={styles.address}>
              123 Automotive Street
              <br />
              Tokyo, Japan 123-4567
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@gojomotors.com
            </address>
          </div>

          <div className={styles.sitemap}>
            <h3 className={styles.sitemapTitle}>Sitemap</h3>
            <nav className={styles.sitemapNav}>
              <ul className={styles.sitemapList}>
                <li className={styles.sitemapItem}>
                  <Link href="/" className={styles.sitemapLink}>
                    Home
                  </Link>
                </li>
                <li className={styles.sitemapItem}>
                  <Link href="/new-cars" className={styles.sitemapLink}>
                    New Cars
                  </Link>
                </li>
                <li className={styles.sitemapItem}>
                  <Link href="/used-cars" className={styles.sitemapLink}>
                    Used Cars
                  </Link>
                </li>
                <li className={styles.sitemapItem}>
                  <Link href="/repair-inspection" className={styles.sitemapLink}>
                    Repair
                  </Link>
                </li>
                <li className={styles.sitemapItem}>
                  <Link href="/company" className={styles.sitemapLink}>
                    Company
                  </Link>
                </li>
                <li className={styles.sitemapItem}>
                  <Link href="/contact" className={styles.sitemapLink}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} G-select. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

