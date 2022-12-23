import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'

import { sortTicketByPrice, sortTicketByDuration, sortTicketOptimal } from '../../store/ticketsSlice'

import styles from './tabs.module.scss'

function Tabs() {
  const [isActive, setActive] = useState({
    cheep: false,
    fast: false,
    optimal: false,
  })
  const dispatch = useDispatch()
  const classChange = (e) => {
    if (e.currentTarget.id === 'cheep') {
      setActive({
        fast: false,
        optimal: false,
        [e.currentTarget.id]: !isActive[e.currentTarget.id],
      })
    }
    if (e.currentTarget.id === 'fast') {
      setActive({
        cheep: false,
        optimal: false,
        [e.currentTarget.id]: !isActive[e.currentTarget.id],
      })
    }
    if (e.currentTarget.id === 'optimal') {
      setActive({
        fast: false,
        cheep: false,
        [e.currentTarget.id]: !isActive[e.currentTarget.id],
      })
    }
  }
  return (
    <div className={styles.tabs}>
      <div
        role="presentation"
        id="cheep"
        className={`${styles.tab} ${isActive.cheep ? styles.select : ''}`}
        onClick={(e) => {
          classChange(e)
          dispatch(sortTicketByPrice())
        }}
      >
        <span>САМЫЙ ДЕШЕВЫЙ</span>
      </div>
      <div
        role="presentation"
        id="fast"
        className={`${styles.tab} ${isActive.fast ? styles.select : ''}`}
        onClick={(e) => {
          classChange(e)
          dispatch(sortTicketByDuration())
        }}
      >
        <span>САМЫЙ БЫСТРЫЙ</span>
      </div>
      <div
        role="presentation"
        id="optimal"
        className={`${styles.tab} ${isActive.optimal ? styles.select : ''}`}
        onClick={(e) => {
          classChange(e)
          dispatch(sortTicketOptimal())
        }}
      >
        <span>ОПТИМАЛЬНЫЙ</span>
      </div>
    </div>
  )
}

export default Tabs
