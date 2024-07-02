import React, { useEffect, useState } from 'react'
import { MdDashboard, MdSupervisedUserCircle, MdOutlineProductionQuantityLimits, MdLiveHelp } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { IoBag } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";

import styles from '@/styles/Dashboard.module.scss'
import { useRouter } from 'next/router';

const SideNav = () => {
  const [userData, setUserData] = useState();
  const router = useRouter();
  const pathname = router.pathname;

  const handleNavClick = (link) => {
    router.push(`/${link}`)
  }
  return (
    <div className={styles.sidenav}>
      <div className={styles.header}>
        <img src="/assets/img_avatar.png" alt="Avatar" className={styles.avatar} />
        <div className={styles.avatarName}>
          <h3>Admin</h3>
          <div>adminstration</div>
        </div>
      </div>
      <div className={styles.navPages}>
        <p>Pages</p>
        <div className={styles.navLink}>
          <div style={{ backgroundColor: `${pathname === '/dashboard' && '#2d3746'}`, borderRadius: `${pathname === '/dashboard' && '5px'}` }} onClick={() => handleNavClick('dashboard')}><MdDashboard /><span>Dashboard</span></div>
          <div style={{ backgroundColor: `${pathname === '/users' && '#2d3746'}`, borderRadius: `${pathname === '/users' && '5px'}` }} onClick={() => handleNavClick('users')}><MdSupervisedUserCircle /><span>Users</span></div>
          <div><MdOutlineProductionQuantityLimits /><span>Products</span></div>
          <div><BiDollar /><span>Transaction</span></div>
        </div>

        <p>Analytics</p>
        <div className={styles.navLink}>
          <div><IoBag /><span>Revenue</span></div>
          <div><HiOutlineDocumentReport /><span>Reports</span></div>
          <div><PiMicrosoftTeamsLogoFill /><span>Team</span></div>
        </div>

        <p>User</p>
        <div className={styles.navLink}>
          <div><IoIosSettings /><span>Settings</span></div>
          <div><MdLiveHelp /><span>Help</span></div>
          <div><RiLogoutBoxLine /><span>Logout</span></div>
        </div>

      </div>
    </div>
  )
}

export default SideNav
