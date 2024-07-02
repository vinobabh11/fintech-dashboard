import React from 'react'
import styles from '@/styles/Users.module.scss'
import NotificationHearder from '../notificationHearder'

const UsersPage = () => {
  return (
    <div className={styles.usersPage}>
      <NotificationHearder title={'Users'}/>
    </div>
  )
}

export default UsersPage
