import { INTERNAL_PATHS } from "configs/routes.config"
import 'assets/styles/components/pagination.component.scss'

const Pagination = ({postPerPage , totalPost , paginate}) => {
   const pageNumber = []

   for (let i = 1; i <= Math.ceil(totalPost/postPerPage); i++) {
      pageNumber.push(i)
   }

   return (
      <nav className="nav">
         <ul>
            {pageNumber.map(number =>(
               <li key={number}>
                  {/* nested path i think needed */}
                  <a onClick={()=>paginate(number)} href='#'>{number}</a>
               </li>
            ))}
         </ul>
      </nav>
   )
}

export {Pagination}