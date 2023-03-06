import st from 'assets/styles/pages/control.pages.module.scss'
import {InventoryTable, TitleBar} from 'components'
import {useState} from 'react'


export const Inventory = () => {
   const [addStatus , setAddStatus] = useState(st.inactive)
   const [updatedPrice,setUpdatedPrice] = useState({})
   const [updatedQuantity,setUpdatedQuantity] = useState({})
   console.log(updatedPrice,updatedQuantity )
   return (
      <>
         <TitleBar 
            title="موجودی و قیمت کالاها" 
            btnTxt="ذخیره" 
            setAddStatus={setAddStatus}
            updatedPrice={updatedPrice}
            updatedQuantity={updatedQuantity}
         />
         <InventoryTable 
            setUpdatedPrice={setUpdatedPrice}
            setUpdatedQuantity={setUpdatedQuantity}
         />
      </>
   )
}
