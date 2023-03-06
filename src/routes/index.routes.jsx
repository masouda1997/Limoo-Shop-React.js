import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { INTERNAL_PATHS } from "configs/routes.config"
import React from "react"
import { PublicRoutes } from "./public.routes"
import { PrivateRoutes } from "./private.routes"
import NotFound from "pages/NotFound/notFound.page"
import { LogIn, Registry,ShoppingPortal } from "pages"
import { Goods , Inventory ,Orders} from "components"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'



// const LazyHomePage = React.lazy(async()=>{
//    await new Promise((resolve) => setTimeout(resolve , 3000))
//    return import('pages/Home/home.page')
// })

const LazyHomePage = React.lazy(()=> import('pages/Home/home.page'))
const LazyAboutUsPage = React.lazy(() => import('pages/AboutUs/about-us.page'))
const LazySingleProductPage = React.lazy(() => import('pages/singlePageProduct/singleProduct.page'))
const LazyProducts = React.lazy(()=> import('pages/products/products.page'))
const LazyPay = React.lazy(()=> import('pages/pay/pay.page'))
const LazyControl = React.lazy(()=> import('pages/control/control.page'))
const LazyPayStatus = React.lazy(()=> import('pages/payment-status/payment-status.page'))
const LazyBasket = React.lazy(()=>import('pages/basket/basket.page'))




export const AppRouting = ()=>{
   return(
      <BrowserRouter>
      <ToastContainer
         autoClose={3000}
         limit={3}
      />
         <Routes>
            <Route element={<PublicRoutes/>}>
               <Route path={INTERNAL_PATHS.HOME} element={<LazyHomePage/>}/>
               <Route path={INTERNAL_PATHS.ABOUT_US} element={<LazyAboutUsPage/>}/>
               <Route path={INTERNAL_PATHS.NOT_FOUND} element={<NotFound/>}/>
               <Route path={INTERNAL_PATHS.SINGLE_PRODUCT_PAGE} element={<LazySingleProductPage/>}/>
               <Route path={INTERNAL_PATHS.LOGIN} element={<LogIn/>}/>
               <Route path={INTERNAL_PATHS.REGISTRY} element={<Registry/>}/>
               <Route path={INTERNAL_PATHS.PRODUCTS} element={<LazyProducts/>}/>
               {/* <Route path="products" element={<Navigate to={`products/mouse`}/>}/> */}
               <Route path={INTERNAL_PATHS.PAY} element={<LazyPay/>}/>
               <Route path={INTERNAL_PATHS.PAYMENTSTATUS} element={<LazyPayStatus/>}/>
               <Route path={INTERNAL_PATHS.BASKET} element={<LazyBasket/>}/>
               <Route path={INTERNAL_PATHS.SHOPPINGPORTAL} element={<ShoppingPortal/>}/>
            </Route>

            <Route element={<PrivateRoutes/>}>
               <Route path={INTERNAL_PATHS.CONTROL} element={<LazyControl/>}>
                  <Route path='goods' element={<Goods/>}></Route>
                  <Route path='inventory' element={<Inventory/>}></Route>
                  <Route path='orders' element={<Orders/>}></Route>
               </Route>
            </Route>
            
         </Routes>
      </BrowserRouter>
   )
}