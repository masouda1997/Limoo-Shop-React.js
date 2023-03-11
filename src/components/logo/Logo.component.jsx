import React from 'react'
import logo from 'assets/images/limoo-logo.png'
import logo2 from 'assets/images/llll.png'
import st from  'assets/styles/layouts/header.layout.module.scss'
import { Link, NavLink } from 'react-router-dom'
import { INTERNAL_PATHS } from 'configs/routes.config'

const Logo = () => {
   return (
      <div className={st.logoWrapper}>
         <NavLink to={INTERNAL_PATHS.HOME}>
            <div className={st.logo}>
               <img src={logo} alt=" " />
            </div>
         </NavLink>
         <NavLink style={{textDecoration:"none"}}>
            <div className={st.logoTxt}>فروشگاه لیمو</div>
         </NavLink>
      </div>
   )
}

export default Logo