import ReactDOM from "react-dom"
import st from 'assets/styles/pages/control.pages.module.scss'
import closeIc from 'assets/images/close.svg'
import imgIc from 'assets/images/imgic.svg'
import { useSelector } from "react-redux"
import { useCategoryDataQuery, useProductAddMutation } from "apis"
import { useState , useEffect } from "react"
import {Loading, ToastCart} from 'components'




export const AddGoods = ({status , setStatus})=>{
   const {data:cat , isLoading} = useCategoryDataQuery()
   const [addNewData, response] = useProductAddMutation()
   const [name,setName] = useState("")
   const [brand,setBrand] = useState("")
   const [desc,setDesc] = useState("")
   const [quantity,setQuantity] = useState("")
   const [thumbnail,setThumbnail] = useState("")
   const [price,setPrice] = useState("")
   const [category,setCategory] = useState("")

   const addAllData = {
      name, 
      brand, 
      description:desc ,
      price,
      quantity,
      category ,
      thumbnail ,
      image:"image should be added" 
   }
   console.log(addAllData)

   const handleAdd = ()=>{
      // console.log("enterd but not added yet");
      // console.log(addAllData)
      if(
         addAllData.name==='' || 
         addAllData.brand==='' || 
         addAllData.description===''|| 
         addAllData.price===''|| 
         addAllData.quantity===''|| 
         isNaN(addAllData.category)|| 
         addAllData.thumbnail===''){
         console.warn("some field are empty");
         alert("بعضی از فیلد ها خالی میباشد\n لطفا تمام فیلد ها را پر کنید")
      }else{
         addNewData(addAllData)
         handleClose();
         console.log('done' )
      }
   }


   const handleClose =()=>{
      setStatus(st.inactive)
      setName("")
      setBrand("")
      setDesc("")
      setQuantity("")
      setThumbnail("")
      setPrice("")
      setCategory("")
   }

   const handleUploadImg = (e)=>{
      console.log("test function");
      // console.log(e.target.files[0]);
      const formData = new FormData();
      const x = e.target.files
      formData.append("image" , x[0])
      // setImg(e.target.files[0])
      // console.log(img,"img");
      console.log(formData);
   }

   const handleChooseCat = (event)=>{
      console.log("inside cat func");
      const idOfCat = +event.target.value
      setCategory(idOfCat)
   }
   if(isLoading){
      return <Loading/>
   }

   return ReactDOM.createPortal(
		<div className={`${st.modal} , ${status}`}>
			<div className={st.modalContent}>
				<div className={st.modalHeader}>
					<h3>افزودن کالا</h3>
					<img src={closeIc} onClick={handleClose} alt="" />
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
								onChange={(e) => handleUploadImg(e)}
							/>
							<div>
								<img src={imgIc} alt="" />
							</div>
						</label>
					</div>
				</div>

				<div className={st.r1}>
					<input
						placeholder="نام کالا"
						type="text"
						className={st.input}
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						placeholder="برند کالا"
						type="text"
						className={st.input}
						// value={tableData.goodsCategory?tableData.goodsCategory: ""}
						value={brand}
						onChange={(e) => setBrand(e.target.value)}
					/>
				</div>

				<div className={st.r2}>
					<select className={st.input} onChange={(e)=>handleChooseCat(e)}>
                  <option defaultValue={"دسته بندی"} className={st.option}>دسته بندی </option>
                  {cat.map(item=>(
                     <option 
                        key={item.id}
                        value={+item.id}  
                        // id={item.id} 
                        // onChange={e => setCategory(e.target.value)}
                        // onClick={e => handleChooseCat(e)  }
                     >
                        {item.persianName}
                     </option>
                  ))}
					</select>
					<input
						placeholder="قیمت کالا "
						type="number"
						className={st.input}
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
					<input
						placeholder=" تعداد کالا"
						type="number"
						className={st.input}
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
					/>
				</div>

				<div className={st.r3}>
					<input
						className={st.input}
						type="text"
						placeholder="خلاصه توضیحات"
						value={thumbnail}
						onChange={(e) => setThumbnail(e.target.value)}
					/>
				</div>
				<div>
					<textarea
						placeholder="توضیحات"
						type="text"
						className={st.textArea}
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
					/>
				</div>

				<button onClick={handleAdd}>ذخیره</button>

				{/* <ToastCart close={st.inactive}/> */}
			</div>
		</div>,
		document.getElementById("modalAdd")
   );
}