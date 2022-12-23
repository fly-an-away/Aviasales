import React from 'react'

import logo from './Logo.png'
import styles from './header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} alt="logo" src={logo} />
    </header>
  )
}

export default Header
