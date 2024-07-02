import React from 'react'
import styles from '@/styles/Dashboard.module.scss'
import NotificationHearder from '../notificationHearder'

const Dashborad = () => {
  return (
    <div className={styles.dashboard}>
      <NotificationHearder title={'Dashboard'}/>
    </div>
  )
}

export default Dashborad
