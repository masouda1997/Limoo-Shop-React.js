import ReactDOM from "react-dom"
import s1 from 'assets/styles/components/ordersModal.component.module.scss'
import st2 from 'assets/styles/pages/registry.pages.module.scss'
import closeIc from 'assets/images/close.svg'
import imgIc from 'assets/images/imgic.svg'
import { useSelector } from "react-redux"
import { useState } from "react"
import { useEffect } from "react"
import {ToastCart} from 'components'
import { convertNumberToPersian,toPersianDate } from "utils"
import { useDeliveredOrdersMutation } from "apis"
import { toast } from "react-toastify"

const EditOrders = ({ setEditStatus,editStatus,dataMover,setDataMover}) => {

   // const [inputUpdate]= useProductUpdateMutation(tableData)
   const [delivery,isSuccess ]=useDeliveredOrdersMutation()

   let ordersList , data
   if(!dataMover.products){
      ordersList = [{name:"..." , price:"...", count:'...'}]
   }else{
      ordersList = dataMover.products
      data=dataMover
   }
   
   const handleDelivery = ()=>{
      console.log("object");
      console.log( "************",ordersList,"************")
      console.log( "**",dataMover,"**")
      // setDataMover((prev)=>({...prev,delivered:true}))   
      data = {...data , delivered:true , deliverdAt:Date.now()}   
      console.log(data);
      delivery(data)
      isSuccess?toast.success(`😍سفارش تحویل شد`, {
         position: "bottom-right",
         theme: "colored",
      }):toast.error(`😥سفارش تحویل نشد `, {
         position: "bottom-right",
         theme: "colored",
      })
      setEditStatus(s1.inactive)
   }

   return ReactDOM.createPortal(
		<div className={` ${editStatus} , ${s1.modal}`}>
			<div className={s1.modalContent}>
				<div className={s1.modalHeader}>
					<h3>نمایش سفارش </h3>
					<img
						src={closeIc}
						onClick={() => setEditStatus(s1.inactive)}
						alt=""
					/>
				</div>
            <div className={s1.infoLine1}>
               <label htmlFor="" className={s1.modaltitle}>نام مشتری </label>
               <label htmlFor="" className={s1.modalText}>{dataMover.username}</label>
               <label htmlFor="" className={s1.modaltitle}>تلفن همراه</label>
               <label htmlFor="" className={s1.modalText}> {convertNumberToPersian(+dataMover.phone)}</label>
            </div>
            <div className={s1.infoLine2}>
               <label htmlFor="" className={s1.modaltitle}>زمان تحویل  </label>
               <label htmlFor="" className={s1.modalText}>{toPersianDate(Date.now())}</label>
               <label htmlFor="" className={s1.modaltitle}>زمان سفارش</label>
               <label htmlFor="" className={s1.modalText}> {toPersianDate(dataMover.expectAt)} </label>
            </div>
            <div className={s1.infoLine3}>
               <label htmlFor="" className={s1.modaltitle}>  آدرس  <span> {dataMover.address}</span></label>
            </div>

            <table className={s1.orderModalTable}>
               <thead>
                  <tr>
                     <td>کالا</td>
                     <td>قیمت</td>
                     <td>تعداد</td>
                  </tr>
               </thead>
               <tbody>

                  {ordersList.map((order)=>(
                     <tr>
                        <td>{order.name}</td>
                        <td>{convertNumberToPersian(order.price)}</td>
                        <td>{convertNumberToPersian(order.count)}</td>
                     </tr>
                  ))}

               </tbody>
            </table> 

            <button onClick={handleDelivery} >
               تحویل 
            </button>


				{/* <ToastCart close={st.inactive}/> */}
			</div>
		</div>,
		document.getElementById("modalEditOrder")
   );
}

export {EditOrders}