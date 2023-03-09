import { hover } from '@testing-library/user-event/dist/hover'
import st from 'assets/styles/pages/control.pages.module.scss'
import {EditGoods, Goods, Header ,Orders,Table} from 'components'
import { useState } from 'react'
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom'


const Control = () => {

   // localStorage.setItem("checker" , Boolean(false))
   const [status , setStatus] = useState(true)
   const [styleGoods, setStyleGoods]= useState(st.btn)
   const [styleInventory, setStyleInventory]= useState(st.btn)
   const [styleOrders, setStyleOrders]= useState(st.btn)
   const navigate = useNavigate()
   console.log(status);
   const handleGoods = ()=>{
      setStatus(false)
      setStyleGoods(st.linkActive)
      setStyleOrders(st.btn)
      setStyleInventory(st.btn)
      navigate("goods")
   }
   const handleInventory = ()=>{
      setStatus(false)
      setStyleInventory(st.linkActive)
      setStyleGoods(st.btn)
      setStyleOrders(st.btn)
      navigate("inventory")
   }
   const handleOrders = ()=>{
      setStatus(false)
      setStyleOrders(st.linkActive)
      setStyleInventory(st.btn)
      setStyleGoods(st.btn)
      navigate("orders")
   }

   return (
		<div className={st.fragment}>
			<Header 
            setStatus={setStatus}
            setStyleGoods={setStyleGoods}
            setStyleInventory={setStyleInventory}
            setStyleOrders={setStyleOrders} 
            status={status}/>
			<section className={st.nav}>
				<button
					// to={"goods"}
					// className={({ isActive }) =>
					// 	isActive ? st.linkActive : st.btn
					// }
					onClick={handleGoods}
               className={styleGoods}
				>
					کالاها
				</button>

				<button
					// to={"inventory"}
					// className={({ isActive }) =>
					// 	isActive ? st.linkActive : st.btn
					// }
					onClick={handleInventory}
               className={styleInventory}
				>
					موجودی و قیمت ها
				</button>

				<button
					// to={"orders"}
					// className={({ isActive }) =>
					// 	isActive ? st.linkActive : st.btn
					// }
               onClick={handleOrders}
               className={styleOrders}

				>
					سفارشات
				</button>
			</section>

			<div className={st.line} />
			{status ? (
				<>
					<h1 className={st.builder}>پنل عملکرد فروشگاه</h1>
					<h2 className={st.h2Builder}>
						⚠️در درست ساخت میباشد⚠️
					</h2>
				</>
			) : (
				<Outlet setStatus={setStatus}/>
			)}
		</div>
   );
}

export default Control