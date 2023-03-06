import st from 'assets/styles/pages/control.pages.module.scss'
import {EditGoods, Goods, Header ,Table} from 'components'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const Control = () => {

   // localStorage.setItem("checker" , Boolean(false))
   const handleGoods = ()=>{
      
   }
   const handleInventory = ()=>{
      console.log('first')
   }
   const handleOrders = ()=>{
      console.log('first')
   }

   return (
      <div className={st.fragment}>
         <Header/>
         <section className={st.nav}>
            <NavLink 
               to={'goods'} 
               className={({isActive})=>(isActive ? st.linkActive : st.btn)}
               // onClick={handleGoods}
               >
                  کالاها 
            </NavLink>

            <NavLink  
               to={'inventory'}
               className={({isActive})=>(isActive ? st.linkActive : st.btn)}
               // onClick={handleInventory}
               >
                  موجودی و قیمت ها 
            </NavLink>

            <NavLink 
               to={"orders"} 
               className={({isActive})=>(isActive ? st.linkActive : st.btn)}
               // onClick={handleOrders}
               >
                  سفارشات 
            </NavLink>

         </section>

         <div className={st.line} />
         
         <Outlet/> 

      </div>
   )
}

export default Control