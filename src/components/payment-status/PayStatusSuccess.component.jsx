import st from 'assets/styles/components/paymentStatus.component.module.scss'
import success from 'assets/images/Approval.svg'
import house from 'assets/images/house.svg'
import { Link } from 'react-router-dom'
import { INTERNAL_PATHS } from 'configs/routes.config'

const PayStatusSuccess = () => {
   return (
      <div className={st.success}>
         <h1>  
            <img src={success} alt=" " />
            پرداخت موفق 
         </h1>
         <h3> با تشکر از خرید شما</h3>
         <p> سفارش شما ثبت شده و جهت هماهمگی ارسال با شما تماس گرفته خواهد شد </p>

         <Link to={INTERNAL_PATHS.HOME} className={st.homeLink} >
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

export {PayStatusSuccess}