import { useAllCategoryQuery } from 'apis'
import st from 'assets/styles/components/circleMenu.component.module.scss'
import { Loading } from 'components'
import { INTERNAL_PATHS } from 'configs/routes.config'
import { Link } from 'react-router-dom'
import { goodsAction } from 'store'
import mouse from 'assets/images/icons8-cursor-100.png'
import pc from 'assets/images/icons8-laptop-100.png'
import headphone from 'assets/images/icons8-headset-100.png'
import videoCart from 'assets/images/icons8-video-card-100.png'
import monitor from 'assets/images/icons8-monitor-100.png'
import keyboard from 'assets/images/icons8-keyboard-100.png'
import accessory from 'assets/images/icons8-apple-watch-100.png'
import mobile from 'assets/images/icons8-ipad-100.png'
import handsfree from 'assets/images/icons8-earbud-headphones-100.png'
// import mouse from 'assets/images/icons8-mouse-64.png'
// import mouse from 'assets/images/icons8-mouse-64.png'
// import mouse from 'assets/images/icons8-mouse-64.png'
// import mouse from 'assets/images/icons8-mouse-64.png'

const CircleMenu = () => {
   const{data:category ,isLoading} = useAllCategoryQuery() 

   if(isLoading){
      return <Loading/>
   }
   console.log(category);
   return (
		<div className={st.circleMenu}>
			{/* {category.map((group) => {
            <Link to={INTERNAL_PATHS.PRODUCTS} id={group.id}>
               <div className={st.circleCat} key={group.id}>
                  <div></div>
                  <div>
                     <span>{group.name} </span>
                  </div>
               </div>;
            </Link>
			})} */}
         <Link style={{textDecoration:"none" , color:"black"}} to={"/products/mouse"} >
            <div className={st.circleCat} >
               <div> <img src={mouse} alt=" " /></div>
               <div>
                  <span >موس </span>
               </div>
            </div>
         </Link>
         <Link style={{textDecoration:"none" , color:"black"}} to={'/products/pc'} >
            <div className={st.circleCat} >
            <div> <img src={pc} alt=" " /></div>
               <div>
                  <span >کامپیوتر شخصی </span>
               </div>
            </div>
         </Link>
         <Link style={{textDecoration:"none" , color:"black"}} to={"/products/headphone"} >
            <div className={st.circleCat} >
               <div> <img src={headphone} alt=" " /></div>
               <div>
                  <span >هدفون </span>
               </div>
            </div>
         </Link>
         <Link style={{textDecoration:"none" , color:"black"}} to={`/products/graphic-cart`} >
            <div className={st.circleCat} >
               <div> <img src={videoCart} alt=" " /></div>
               <div>
                  <span >کارت گرافیک </span>
               </div>
            </div>
         </Link>
         <Link style={{textDecoration:"none" , color:"black"}} to={`/products/monitor`} >
            <div className={st.circleCat} >
               <div> <img src={monitor} alt=" " /></div>
               <div>
                  <span >مانیتور </span>
               </div>
            </div>
         </Link>
         <Link style={{textDecoration:"none" , color:"black"}} to={`/products/keyboard`} >
            <div className={st.circleCat} >
               <div> <img src={keyboard} alt=" " /></div>
               <div>
                  <span >کیبورد </span>
               </div>
            </div>
         </Link>
         <Link style={{textDecoration:"none" , color:"black"}} to={`/products/accessories`} >
            <div className={st.circleCat} >
               <div> <img src={accessory} alt=" " /></div>
               <div>
                  <span >لوازم جانبی </span>
               </div>
            </div>
         </Link>
         <Link style={{textDecoration:"none" , color:"black"}} to={`/products/mobile`} >
            <div className={st.circleCat} >
               <div> <img src={mobile} alt=" " /></div>
               <div>
                  <span >موبایل </span>
               </div>
            </div>
         </Link>
         <Link style={{textDecoration:"none" , color:"black"}} to={'/products/handsfree'} >
            <div className={st.circleCat} >
               <div> <img src={handsfree} alt=" " /></div>
               <div>
                  <span >هندزفری </span>
               </div>
            </div>
         </Link>

		</div>
   );
}

export {CircleMenu}