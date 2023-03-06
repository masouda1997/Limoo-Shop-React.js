import style from 'assets/styles/layouts/footer.layout.module.scss'
import { Link } from 'react-router-dom'
import { INTERNAL_PATHS } from 'configs/routes.config'
import phonelogo from 'assets/images/Phone enabled.svg'
import emaillogo from 'assets/images/mail.svg'
import locationlogo from 'assets/images/loc.svg'
import t1 from 'assets/images/t1.png'
import t2 from 'assets/images/t2.png'
// import { useHistory } from 'react-router-dom'
// import {Redirect} from 'react-router'

export const Footer= () => {
   // const history = useHistory()
   // const navigateHome = ()=> history.push(INTERNAL_PATHS.HOME)
   // const navigateAboutUs = ()=> history.push(INTERNAL_PATHS.ABOUT_US)
   
   return (
      <footer className={style.footer}>
         <div className={style.container}>

            <div className={style.links}>
               <ul>
                  <li>
                     <Link to={INTERNAL_PATHS.HOME} className={style.link}>خانه</Link>
                  </li>
                  <li>
                     <Link to={INTERNAL_PATHS.ABOUT_US} className = {style.link}>درباره ما</Link>
                  </li>
               </ul>
            </div>

            <div className={style.verticalLine}></div>

            <div className={style.contacts}>
               <div>
                  <img src={phonelogo}/>
                  <span>0913107396</span>
               </div>
               <div> 
                  <img src={locationlogo}/>
                  <span>اصفهان ، مرداویج،خیابان سهند ،مجتمع یلدا</span>
               </div>
               <div >
                  <img src={emaillogo}/>
                  <span>masoud.anaraki@yahoo.com</span>

               </div>
            </div>

            <div className={style.verticalLine}></div>

            <div className={style.trust}>
               <img src={t1} alt="نماد الکترونیکی " />
               <img src={t2} alt=" ستاد سازماندهی" />
            </div>
         </div>
         {/* <Link to={INTERNAL_PATHS.HOME}>home</Link> */}
         {/* <Link to={INTERNAL_PATHS.ABOUT_US}>about us</Link> */}
         {/* <button onClick={navigateHome}>home</button>
         <button onClick={navigateAboutUs}>about us</button> */}
      </footer>
   )
}

