import { Navigate, Outlet } from "react-router-dom"
import{INTERNAL_PATHS}from "configs/routes.config"

export const PrivateRoutes = ()=>{
   const user = JSON.parse(localStorage.getItem('flg'))
   console.log(user);
   // const { token } = useSelector((state) => state.auth);
   
   return(
      !user ? <Navigate to={INTERNAL_PATHS.LOGIN}/> : <Outlet/>
      // token ? <Outlet /> : <Navigate to="/login" replace />;
   )

   return <Outlet/>
}
