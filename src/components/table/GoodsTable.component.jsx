import edit from 'assets/images/edit.svg'
import delIcon from 'assets/images/delete.svg'
import st from 'assets/styles/pages/control.pages.module.scss'
import { useState, useEffect } from 'react'
import { useCategoryDataQuery, useProductDataQuery ,useProductDeleteMutation } from 'apis'
import { CustomPagination, Loading } from "components";
import { useDispatch } from 'react-redux'
import { goodsAction } from 'store'


const GoodsTable = (props) => {
   const [catStatus , setCatStatus] = useState([])
   const[page , setPage] = useState(1)
   const dispatch = useDispatch()
   const {data:categories,isLoading:ld} = useCategoryDataQuery()
   const [deleteRow] = useProductDeleteMutation()
   
   const {data:goodsFetchedData,isLoading, isFetching} = useProductDataQuery(page)
   // console.log(goodsFetchedData);
   
   useEffect(()=>{
      // setCatStatus(categories)
   } , [catStatus,setCatStatus])

   // const target = {a: 1, b: 2, c: 3};
   // const source = {d: 4, e: 5, f: 6};
   // const obj3 = {...target, ...source}; //merge method 1
   // Object.assign(target, source); // merge method 2 here target is the result

   const handleEdit = (item)=>{
      props.setStatus(st.active)
      console.log("enter edit modal" ,item)
      dispatch(goodsAction.goodsToModal(item))
   }

   const handleDelete =(id)=>{
      // console.log('id', id)
      deleteRow({id})
   }
   // console.log(categories[2]);
   if(isLoading){ return <Loading/>}
   if(ld){return <Loading/>}

   return (
      <section className={st.wrapper}>
         <table className={st.table}>
            <thead>
               <tr>
                  <th>تصویر </th>
                  <th>نام کالا</th>
                  <th>دسته بندی</th>
                  <th>ویرایش | حذف </th>
               </tr>
            </thead>
            <tbody>
               {goodsFetchedData.map((item)=>(
                  <tr key={item.id}>
                     <div className={st.uploadedImg}>
                        <img 
                           src={item.image} 
                           alt=" " />
                     </div>
                     <td>{item.name}</td>
                     <td>{!item.id ? catStatus ?? setCatStatus(categories[item.category].name)  : item.brand}</td>
                     {/* catStatus ?? setCatStatus(categories[item.category].name) */}
                     <td>
                        <div className={st.edit}>
                           <img 
                              src={edit} 
                              onClick={()=>handleEdit(item)} 
                              alt=" "
                           />
                           <img 
                              onClick={()=>handleDelete(item.id)}
                              src={delIcon} 
                              alt=" " />
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
         

         <CustomPagination className={st.pages} page={page} setPage={setPage} isFetching ={isFetching} />

      </section>
   )
}

export {GoodsTable}

