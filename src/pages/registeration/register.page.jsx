import  st from'assets/styles/pages/registry.pages.module.scss'
import { Link } from 'react-router-dom'
import {INTERNAL_PATHS} from 'configs/routes.config'

const Registry = () => {
   return (
      <div className={st.container}>
         
         {/* <div className={st.xxx}>
         </div>
         <svg width='600' height='600' fill="blue" stroke="red">
            <path d='05.82898 C 21.984488,45.175857 83.514917,-5.3001588 142.19627,4.2941008 c 78.46504,-0.32631 154.65758,42.8282502 233.37698,20.1128842 96.433,-10.733578 189.47234,74.586242 188.8912,171.313065 10.61202,63.52223 46.1364,129.75072 19.29149,193.85175 -23.29129,32.55341 -70.96387,39.67538 -88.48014,78.26182 -20.2411,38.43543 8.44598,92.62436 -37.29786,119.35926 C 418.16247,618.6665 377.57538,574.85134 336.07015,572.32208 247.40736,559.15219 149.43985,593.07739 68.614105,541.55649 12.483107,509.69566 3.6888119,433.47625 32.326052,380.0841 64.592935,326.99251 78.039531,253.50113 38.578336,200.36856 13.212567,178.36422 -15.473637,127.46478 26.228359,105.82898 Z' />
         </svg> */}

         {/* animations */}
         {/* <div className={st.animations}>
            <div className={st.zlayer}>
               <div className={st.ylayer}>
                  <div className={st.xlayer}></div>
               </div>
            </div>
            <div className={st.zlayer2}>
               <div className={st.ylayer2}>
                  <div className={st.xlayer2}></div>
               </div>
            </div>
            <div className={st.zlayer3}>
               <div className={st.ylayer3}>
                  <div className={st.xlayer3}></div>
               </div>
            </div>
         </div> */}

         <div className={st.wrapper}>
            <h1>فروشگاه لیمو</h1>
            <form action="">
               <label className={st.label} htmlFor="">نام کاربری : </label>
               <input className={st.input} type="text" />
               <label className={st.label} htmlFor="">ایمیل :</label>
               <input className={st.input} type="email" />
               <label className={st.label} htmlFor=""> رمز عبور :</label>
               <input className={st.input} type="password" />
               <label className={st.label} htmlFor=""> تکرار رمز عبور:</label>
               <input className={st.input} type="text" />
               <div>
                  <button> ثبت نام </button>
               </div>
               <Link to={INTERNAL_PATHS.HOME}>بازگشت به سایت </Link>
            </form>
         </div>
      </div>
   )
}

export {Registry}