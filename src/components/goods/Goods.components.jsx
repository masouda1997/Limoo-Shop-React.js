import st from 'assets/styles/pages/control.pages.module.scss'
import {EditGoods ,GoodsTable , AddGoods, TitleBar} from 'components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { goodsAction } from 'store'


export const Goods = () => {
   const [editStatus , setEditStatus] = useState(st.inactive)
   const [addStatus , setAddStatus] = useState(st.inactive)
   const dispatch = useDispatch()

   const handleOpenModal = ()=>{
      setAddStatus(st.active)
   }
   return (
      <>
      <div className={st.wrap}>
            <h2>{"مدیریت کالا ها"}</h2>
            <button 
               onClick={handleOpenModal} 
               className={st.btn}>
                  {"افزودن کالا"}
            </button>
         </div>
      <GoodsTable setStatus={setEditStatus}/>
      {/* modals */}
      <EditGoods setStatus={setEditStatus} status={editStatus}/> 
      <AddGoods setStatus={setAddStatus} status={addStatus}/>
      </>
   )
}
