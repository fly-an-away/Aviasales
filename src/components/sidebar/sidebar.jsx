import React from 'react'

import Transfers from '../transfers'

import styles from './sidebar.module.scss'

function Sidebar() {
  return (
    <section className={styles.sidebar}>
      <Transfers />
    </section>
  )
}

export default Sidebar
