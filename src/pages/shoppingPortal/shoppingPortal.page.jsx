import { useAddNewOrderMutation } from 'apis'
import portal from 'assets/images/payPortal.jpg'
import st from "assets/styles/pages/shoppingPortal.page.module.scss"
import { INTERNAL_PATHS } from 'configs/routes.config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ShoppingPortal =() => {
   const navigate  = useNavigate()
   const [newOrder,isSuccess ] = useAddNewOrderMutation()
   // const [payStatus , setPayStatus] = useState(false)


   const orderList = JSON.parse(localStorage.getItem('orders'))
   console.log("orderList", orderList);

   const payHandler = ()=>{
      newOrder(orderList)
      if(isSuccess){
         localStorage.removeItem('cartItem')
         // setPayStatus(true)
         localStorage.setItem("paymentStatus" , true)
      }
      setTimeout(() => {
         navigate(INTERNAL_PATHS.PAYMENTSTATUS)
      }, 200);
   }
   const cancelPayHandler = ()=>{
      // navigate(INTERNAL_PATHS.HOME)
      // setPayStatus(false)
      localStorage.setItem("paymentStatus" , false)
      console.log(localStorage);
      setTimeout(() => {
         navigate(INTERNAL_PATHS.PAYMENTSTATUS)
      }, 200);
   }

   return (
      <div className={st.container}>

         {/* <div className={st.imageWrapper}>
            <img src={portal} alt=" " />
         </div> */}
         <div className={st.btnWrapper}>
            <button onClick={()=>payHandler()}>پرداخت</button>
            <button onClick={()=>cancelPayHandler()}>اصراف</button>
         </div>
      </div>
   )
}

export {ShoppingPortal}