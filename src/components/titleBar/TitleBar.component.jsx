import st from 'assets/styles/pages/control.pages.module.scss'
import { useProductUpdateMutation } from 'apis'

const TitleBar = (props) => {
   console.log(props.updatedPrice , props.updatedQuantity);
   const[updatePrice] = useProductUpdateMutation(props.updatedPrice)
   const[updateQuantity] = useProductUpdateMutation(props.updatedQuantity)
   const handleSave = ()=>{
      console.log("enterd")
      updatePrice(props.updatedPrice)
      updateQuantity(props.updatedQuantity)
      setTimeout(window.location.reload(), 3000);
      console.log("done")
   }
   return (
      <div className={st.wrap}>
            <h2>{props.title}</h2>
            <button 
               onClick={handleSave} 
               className={st.btn}>
                  {props.btnTxt}
            </button>
         </div>
   )
}

export {TitleBar}