import Dashborad from '@/components/Dashboard'
import SideNav from '@/components/sideNav'
import React, { useEffect } from 'react'
import styles from '@/styles/Dashboard.module.scss'
import { GetUsers } from './api/auth'

const Dashboard = () => {
  useEffect(()=>{
    if (window) {
      getUserApi()
    }
  },[])

  const getUserApi = async()=> {
    const response = await GetUsers();
    console.log(response,"ressss")
  }
  return (
    <div className={styles.dashboardContainer}>
      <SideNav />
      <Dashborad />
    </div>
  )
}

export default Dashboard
