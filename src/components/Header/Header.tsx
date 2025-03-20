'use client'

import Link from "next/link"
import styles from "./Header.module.scss"
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <div className={styles.alluraRegular}>
              <span style={{fontSize: '3rem', lineHeight: 1}}>G</span>
              -select
            </div>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={`
            ${styles.navList}
            ${isOpen && styles.isOpen}
          `}>
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
      <div className={styles.mobile}>
        {isOpen
          ? <CloseIcon
              className={`
                ${styles.menuIcon}
                ${isOpen && styles.active}
              `}
              onClick={() => setIsOpen(false)}
            />
          : <MenuIcon
              className={`
                ${styles.menuIcon}
                ${!isOpen && styles.active}
              `}
              onClick={() => setIsOpen(true)}
            />
        }
      </div>
    </header>
  )
}

export default Header

