import React from 'react'
import styles from '@/styles/NotificationHeader.module.scss'

const NotificationHearder = ({title}) => {
  return (
    <div className={styles.notificationComonent}>
      <div>{title}</div>
      <div className={styles.searchComponent}>
        <div className={styles.component}>search</div>
        <div className={styles.component}>notification</div>
        <div className={styles.component}>avtar</div>
      </div>
    </div>
  )
}

export default NotificationHearder
