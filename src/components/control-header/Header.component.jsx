
import st from 'assets/styles/pages/control.pages.module.scss'
import backward from 'assets/images/backward.svg'
import { Link, useNavigate } from 'react-router-dom'
import { INTERNAL_PATHS } from 'configs/routes.config'


function Header() {
   const navigate = useNavigate()

   const handleClick = ()=>{
      localStorage.setItem('flg' , JSON.stringify(false));
      navigate(INTERNAL_PATHS.HOME)
   }
   return (
      <header className={st.header}>
         <h1>پنل میریت فروشگاه</h1>
         <button className={st.link} onClick={handleClick}>
            <img src={backward} alt="بازگشت" />
         </button>
      </header>
   )
}

export {Header}