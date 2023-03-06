import st from 'assets/styles/components/paymentStatus.component.module.scss'
import fail from 'assets/images/fail.svg'
import { Link } from 'react-router-dom'
import { INTERNAL_PATHS } from 'configs/routes.config'


const PayStatusFail = () => {
   return (
      <div className={st.fail}>
         <h1>  
            <img src={fail} alt=" " />
            پرداخت ناموفق 
         </h1>
         <h3> پرداخت شما موفق نبود </h3>
         <p>سفارش شما در انتظار پرداخت می باشد</p>
         
         <Link to={INTERNAL_PATHS.HOME} className={st.homeLinkFail} >
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="bi bi-house-fill" viewBox="0 0 16 16">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
               </svg>
            </div>
         </Link>

      </div>
   )
}

export {PayStatusFail}