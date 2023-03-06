import st from 'assets/styles/layouts/header.layout.module.scss'
import Logo from 'components/logo/Logo.component'
import SearchBox from 'components/searchbox/SearchBox.component'
import { Link } from 'react-router-dom'
import { INTERNAL_PATHS } from 'configs/routes.config'
import { menuTitleAction } from 'store'
import { useSelector , useDispatch } from 'react-redux'
import {useSearchDataQuery} from 'apis'
import { useState } from 'react'


export const Header= () => {
   const dispatch = useDispatch();
   const {cartTotalQuantity} = useSelector(state => state.CartSlice)
   // const menuData = useSelector((state)=>state.MenuTitle.menuTitle)
   // console.log(menuData,"🔴")
   const{data:searchData} = useSearchDataQuery()

   const handlePassTitle=(e)=>{
      console.log(e.target.innerText)
      dispatch(menuTitleAction.showTitle({title:e.target.innerText}))
   }
   return (
      <header className={st.header}>
         <div className={st.specialOccasion}>
         </div>
         <div className={st.container}>
            <div className={st.mainContent}>
               <Logo/>
               <SearchBox data={searchData}/>
               <div className={st.enter}>
                  <Link to={INTERNAL_PATHS.CONTROL} className={st.control}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                     <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>
                  </Link>

                  <Link to={INTERNAL_PATHS.BASKET} className={st.basket}>
                     <svg 
                     xmlns="http://www.w3.org/2000/svg" 
                     width="20" 
                     height="20"
                     fill="currentColor" 
                     class="bi bi-bag-plus-fill" 
                     viewBox="0 0 16 16">
                     <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
                     </svg>
                     <span className={st.badge}>{cartTotalQuantity}</span>
                  </Link>
               </div>              
            </div>

            <ul className={st.mainList}>
               <li>
                  <Link to={`/products/mouse`} 
                  className={st.Link}
                  onClick={handlePassTitle} >موس</Link> 
               </li>

               <li>
                  <Link to={'/products/pc'}
                  className={st.Link}
                  onClick={handlePassTitle}>
                     کامپیوتر شخصی
                  </Link> 
               </li>

               <li>
                  <Link to={`/products/headphone`} 
                  className={st.Link}
                  onClick={handlePassTitle}>
                     هدفون
                  </Link> 
               </li>

               <li>
                  <Link to={`/products/graphic-cart`} 
                  className={st.Link}
                  onClick={handlePassTitle}>
                     کارت گرافیک
                  </Link> 
               </li>

               <li>
                  <Link to={`/products/monitor`} 
                  className={st.Link}
                  onClick={handlePassTitle}>
                     مانیتور
                  </Link> 
               </li>

               <li>
                  <Link to={`/products/keyboard`} 
                  className={st.Link}
                  onClick={handlePassTitle}>
                     کیبورد
                  </Link> 
               </li>

               <li>
                  <Link to={`/products/accessories`} 
                  className={st.Link}
                  onClick={handlePassTitle}>
                     لوازم جانبی
                  </Link> 
               </li>

               <li>
                  <Link to={`/products/mobile`} 
                  className={st.Link}
                  onClick={handlePassTitle}>
                     موبایل
                  </Link> 
               </li>

               <li>
                  <Link to={'/products/handsfree'} 
                  className={st.Link}
                  onClick={handlePassTitle}>
                     هندزفری
                  </Link> 
               </li>
            </ul>
         </div>
      </header>
   )
}

