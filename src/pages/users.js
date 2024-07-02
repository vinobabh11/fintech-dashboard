import UsersPage from '@/components/Users'
import SideNav from '@/components/sideNav'
import React from 'react'
import styles from '@/styles/Dashboard.module.scss'

const Users = () => {
  return (
    <div className={styles.dashboardContainer}>
      <SideNav />
      <UsersPage />
    </div>
  )
}

export default Users
