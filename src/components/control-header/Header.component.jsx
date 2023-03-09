
import st from 'assets/styles/pages/control.pages.module.scss'
import backward from 'assets/images/backward.svg'
import { Link, useNavigate } from 'react-router-dom'
import { INTERNAL_PATHS } from 'configs/routes.config'


function Header(props) {
   const navigate = useNavigate()

   const handleClick = ()=>{
      localStorage.setItem('flg' , JSON.stringify(false));
      navigate(INTERNAL_PATHS.HOME)
   }

   const analyses = ()=>{
      props.setStatus(true)
      props.setStyleInventory(st.btn)
      props.setStyleOrders(st.btn)
      props.setStyleGoods(st.btn)
      navigate("/control")
   }
   return (
		<header className={st.header}>
			<h1>پنل میریت فروشگاه</h1>
			<butoon onClick={analyses}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					fill="currentColor"
					className="bi bi-clipboard-data"
					viewBox="0 0 16 16"
				>
					<path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z" />
					<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
					<path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
				</svg>
			</butoon>
			<button className={st.link} onClick={handleClick}>
				<img src={backward} alt="بازگشت" />
			</button>
		</header>
   );
}

export {Header}