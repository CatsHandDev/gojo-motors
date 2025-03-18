import Link from "next/link"
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            {/* <Image src="/logo.svg" alt="G-select Logo" width={150} height={60} priority /> */}
            <div className={styles.alluraRegular}>
              <span style={{fontSize: '3rem', lineHeight: 1}}>G</span>
              -select
            </div>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>

            <li className={styles.navItem}>
              <Link href="/new-cars" className={styles.navLink}>
                New Cars
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/used-cars" className={styles.navLink}>
                Used Cars
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/repair-inspection" className={styles.navLink}>
                Repair
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/company" className={styles.navLink}>
                Company
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

