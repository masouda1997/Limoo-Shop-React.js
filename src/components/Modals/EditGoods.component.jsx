import ReactDOM from "react-dom"
import st from 'assets/styles/pages/control.pages.module.scss'
import st2 from 'assets/styles/pages/registry.pages.module.scss'
import closeIc from 'assets/images/close.svg'
import imgIc from 'assets/images/imgic.svg'
import { useSelector } from "react-redux"
import { useState } from "react"
import { useEffect } from "react"
import { useCategoryDataQuery,useProductUpdateMutation } from "apis"
import {Loading, ToastCart} from 'components'
import { usePostImgMutation } from "apis/imageUpload"
// import {usePostImgMutation } from "apis"

const EditGoods = ({status , setStatus}) => {
   const {data:cat , isLoading} = useCategoryDataQuery()
   const tableData = useSelector((state)=>state.goodsSlice.goods)
   const [inputValue,setInputValue] = useState(tableData)
   const [inputUpdate]= useProductUpdateMutation(tableData)
   const [imageUpload] = usePostImgMutation()
   
   useEffect(()=>{
      setInputValue(tableData)
   },[tableData])

   const handleUploadImg = (e)=>{
      const selectedFile = e.target.files
      const formData = new FormData()
      // console.log(selectedFile );
      // console.log(formData );
      // console.log(e.target.value);
      formData.append('image',selectedFile[0])
      console.log(selectedFile[0])
      imageUpload(formData)
         .then(res =>{
            console.log(res.data.filename);
            setInputValue((prev)=>({...prev,image:`http://localhost:3002/files/${res.data.filename}`}))
            console.log(inputValue);})
         // .then(s)

      // setInputValue((prev)=>({...prev,image:`http://localhost:3002/files/${res.data.filename}`}))

      // setTimeout(() => {
      //    setStatus(st.inactive)
      // }, 300);
      // setInputValue((prev)=>({...prev,image:formData.data.file}))
   }
   const handleNameChange = (e)=>{
      console.log(e.target)
      setInputValue((prev)=>({...prev,name:e.target.value}))
   }
   const handleBrandChange = (e)=>{
      console.log(e.target)
      setInputValue((prev)=>({...prev,brand:e.target.value}))
   }
   const handlePriceChange = (e)=>{
      setInputValue((prev)=>({...prev,price: +e.target.value}))
   }
   const handleQuantityChange = (e)=>{
      setInputValue((prev)=>({...prev,quantity: +e.target.value}))
   }
   const handleThumbnailChange = (e)=>{
      setInputValue((prev)=>({...prev,thumbnail:e.target.value}))
   }
   const handleDescriptionChange = (e)=>{
      setInputValue((prev)=>({...prev,description:e.target.value}))
   }
   const handleChooseCat = (e)=>{
      setInputValue((prev)=>({...prev,category: +e.target.value}))
   }
   // the main handler 
   const handleEdit = ()=>{
      // patch request
         inputUpdate(inputValue)
         console.log(inputValue);
         setStatus(st.inactive)
   }

   if(isLoading){return <Loading/>}
   return ReactDOM.createPortal(
      <div className={`${st.modal} , ${status}`}>
         <div className={st.modalContent}>

            <div className={st.modalHeader}>
               <h3>ویرایش کالا</h3>
               <img src={closeIc} onClick={()=> setStatus(st.inactive)} alt="" />
            </div>

            <div className={st.goodsImg}>
					<div>
						{/* <input type="file"  accept="image/jpeg,image/jpg,image/png"/> */}
						<label htmlFor="formData" className={st.formData}>
							{/* <span>انتخاب تصویر </span> */}
							<input
								id="formData"
								type="file"
								className={st.fileInput}
								accept="image/*"
								onChange={handleUploadImg}
							/>
							<div>
								<img src={imgIc} alt="" />
							</div>
						</label>
					</div>
				</div>

            {/********************************* r1 *********************************/}

            <div  className={st.r1}>
               <input 
                  type="text" 
                  className={st.input}
                  value={inputValue.name}
                  onChange={handleNameChange}/>
               <input 
                  type="text" 
                  className={st.input}
                  value={inputValue.brand}
                  onChange={handleBrandChange}/>
            </div>

            {/********************************* r2 *********************************/}

            <div className={st.r2} > 
            <select className={st.input} 
               onChange={(e)=>handleChooseCat(e)}
            >
                  <option defaultValue={"دسته بندی"} className={st.option}>دسته بندی </option>
                  {cat.map(item=>(
                     <option 
                        key={item.id}
                        value={+item.id}  
                     >
                        {item.persianName}
                     </option>
                  ))}
					</select>
					<input
						placeholder="قیمت کالا "
						type="number"
						className={st.input}
						value={inputValue.price}
						onChange={handlePriceChange}
					/>
					<input
						placeholder=" تعداد کالا"
						type="number"
						className={st.input}
						value={inputValue.quantity}
						onChange={handleQuantityChange}
					/>
            </div>

            {/********************************* r3 *********************************/}

            <div className={st.r3}>
					<input
						className={st.input}
						type="text"
						placeholder="خلاصه توضیحات"
						value={inputValue.thumbnail}
						onChange={handleThumbnailChange}
					/>
				</div>

            <div >
               <textarea 
                  type="text" 
                  placeholder="توضیحات"
                  className={st.textArea}
                  value={inputValue.description}
                  onChange={handleDescriptionChange}
               />
            </div>

            <button onClick={handleEdit}>
                  ذخیره      
            </button>
            {/* <ToastCart close={st.inactive}/> */}
         </div>
      </div>,
      document.getElementById('modal')
   )
}

export {EditGoods}