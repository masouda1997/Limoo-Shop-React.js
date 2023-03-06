import {Fragment} from 'react'
import { Header } from 'layouts/header/header.layout'
import { Footer } from 'layouts/footer/footer.layout'
import style from 'assets/styles/layouts/container.layout.module.scss'
import { Provider } from 'react-redux'
import { useContext } from 'react'
import Context from 'store'

export const PageContainer = (props) => {

   // const ctx = useContext()
   
   return (
      <Fragment>
         {/* <Context> */}
         <Header/>
         <div className ={style.container}>
            {props.children}
         </div>
         <Footer/>
         {/* </Context> */}
      </Fragment>
   )
}
