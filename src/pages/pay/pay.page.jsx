import { PageContainer } from "layouts"
import st from 'assets/styles/pages/pay.pages.module.scss'
import { INTERNAL_PATHS } from "configs/routes.config"
import { useNavigate } from "react-router-dom"
import { FormInput } from "components"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { useState } from "react"
import { DateValue, DateInput } from "mantine-datepicker-jalali";
import "dayjs/locale/fa"
import { useSelector } from "react-redux"
import { useAddNewUserMutation } from "apis"



const Pay = () => {
   const [newUser] = useAddNewUserMutation()
   const navigate = useNavigate()
   const [singleValue, setSingleValue] = useState(null);
   // const [userId, setUserId] = useState(null)
   const shoppingOrdersInfo = useSelector((state)=>state.CartSlice)
   const {finalPrice} = shoppingOrdersInfo
   // console.log(shoppingOrdersInfo.cartItem , finalPrice);

   const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			address: "",
			phoneNumber: "",
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.required("این فیلد نباید خالی باشد")
				.min(2, "ورودی کمتر از حد مجاز است "),
			lastName: Yup.string().required("این فیلد نباید خالی باشد"),
			phoneNumber: Yup.string()
				.required("شماره تلفن همراه الزامی است ")
				.max(11, "ورودی بیش از حد مجاز ")
				.min(11, "ورودی کمتر از حد مجاز "),
			address: Yup.string()
				.required("ادرس الزامی می باشد ")
				.min(5, "ورودی کمتر از حد مجاز است"),
		}),
		onSubmit: async (value) => {
         // enter new added user to dataBase
         newUser({
            username: value.firstName,
				lastname: value.lastName,
				address: value.address,
				phone: value.phoneNumber,
         })

			const expectAt = singleValue && singleValue.getTime();
			const createdAt = new Date();
			const orders = {
				username: value.firstName,
				lastname: value.lastName,
				address: value.address,
				phone: value.phoneNumber,
				expectAt,
				products: shoppingOrdersInfo.cartItem,
				createdAt,
				delivered: "false",
				prices:finalPrice
			};
         console.log(orders);
			localStorage.setItem("orders", JSON.stringify(orders));
			navigate(INTERNAL_PATHS.SHOPPINGPORTAL);
		},
   });

   return (
      <PageContainer>
         <main className={st.wrapper}>
            <h3> نهایی کردن خرید</h3>
            <form onSubmit={formik.handleSubmit} className={st.mainContent} >
               <div className={st.right}>
                  <label htmlFor="">نام  : </label>
                  {formik.touched.firstName && formik.errors.firstName 
                  ? <span className={st.inputValidation}>{formik.errors.firstName}</span> 
                  : ''}
                  <FormInput
                     className={st.input}
                     name="firstName"
                     id="firstName"
                     placeholder='مسعود'
                     value={formik.values.firstName}
                     onChange={formik.handleChange}
                     onBlur ={formik.handleBlur}
                     isvalid={formik.touched.firstName && formik.errors.firstName ? true : false}
                  />

                  <label htmlFor="">نام خانوادگی :</label>
                  {formik.touched.lastName && formik.errors.lastName 
                  ? <span className={st.inputValidation}>{formik.errors.lastName}</span> 
                  : ''}
                  <FormInput 
                     className={st.input}
                     type="text"
                     name='lastName'
                     id="lastName"
                     placeholder=' انارکی'
                     value={formik.values.lastName}
                     onChange={formik.handleChange}
                     onBlur ={formik.handleBlur}
                     isvalid={formik.touched.lastName && formik.errors.lastName ? true : false}
                  />

                  <label htmlFor=""> تلفن  :</label>
                  {formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? <span className={st.inputValidation} > {formik.errors.phoneNumber}</span>
                  : ''}
                  <FormInput
                     className={st.input}
                     type={Yup.number}  
                     name="phoneNumber"
                     id="phoneNumber"
                     placeholder="09XX-XXX-XXXX"
                     value={formik.values.phoneNumber}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     isvalid={formik.touched.phoneNumber && formik.errors.phoneNumber ? true : false}
                  />
               </div>
               
               <div className={st.left}>
                  <div>
                     <label htmlFor=""> آدرس  :</label>
                     {formik.touched.address && formik.errors.address
                     ? <span className={st.inputValidation}> {formik.errors.address} </span>
                     : ''}
                     <textarea
                        placeholder='  اصفهان - چهارباغ بالا - فرعی ...  '
                        className={st.textArea}
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} 
                        name="address"
                        id="address"
                        style={
                           formik.touched.address && formik.errors.address 
                           ? { backgroundColor: '#ff00002e', border:"1px solid red" } 
                           : {  backgroundColor: '#f7f7f7' , border:'1px solid darkgrey'}}
                     ></textarea>

                     {/* <label htmlFor=""> تاریخ  :</label> */}
                     <DateInput 
                        label="تاریخ :"
                        placeholder="تاریخ را وارد کنید"
                        style={{ direction: "rtl" }} // RTL lable
                        defaultValue={new Date()} // Initial date that is displayed, used for uncontrolled component
                        value={singleValue}
                        onChange={setSingleValue}
                        locale="fa"
                        className={st.dateP}
                        weekendDays={[5]}
                        firstDayOfWeek={6}
                        />
                  </div>
                  <button type="submit" >  پرداخت </button>
                  {/* onClick={()=>navigate(INTERNAL_PATHS.PAYMENTSTATUS)} */}

               </div>
            </form>
         </main>
      </PageContainer>
   )
}

export default Pay