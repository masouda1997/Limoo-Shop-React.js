import { PageContainer } from 'layouts'
import { Fragment } from 'react'
import st from 'assets/styles/pages/products.pages.module.scss'
import SingleProduct from 'pages/singlePageProduct/singleProduct.page'
import { FilterPrice, Loading, Pagination, Product, SpecialProduct } from 'components'
import { useSelector } from 'react-redux'
import { logDOM } from '@testing-library/react'
import { useState  , useEffect} from 'react'
import { useAllProductDataQuery } from 'apis'
import { useParams } from 'react-router-dom'


const Products = () => {
   const theTitle = useSelector((state)=>state.menuTitle.menuTitle)
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(3);
   const {data:fetchedData ,isLoading} = useAllProductDataQuery()


   const category = useParams()
   console.log(category.productName)
   console.log(fetchedData)
   let filteredData = ""

   if(isLoading){
      return <Loading/>
   }

   switch (category.productName) {
		case 'mouse':
			filteredData = fetchedData.filter((val)=>val.category === 1)
         console.log(filteredData)
			break;
		case  "pc":
			filteredData = fetchedData.filter((val)=>val.category === 2)
			console.log(filteredData);
			break;
		case  "headphone":
			filteredData = fetchedData.filter((val)=>val.category === 3)
			console.log(filteredData);
			break;
		case  "graphic-cart":
			filteredData = fetchedData.filter((val)=>val.category === 4)
			console.log(filteredData);
			break;
		case  "monitor":
			filteredData = fetchedData.filter((val)=>val.category === 5)
			console.log(filteredData);
			break;
		case  "keyboard":
			filteredData = fetchedData.filter((val)=>val.category === 6)
			console.log(filteredData);
			break;
		case  "accessories":
			filteredData = fetchedData.filter((val)=>val.category === 7)
			console.log(filteredData);
			break;
		case  "mobile":
			filteredData = fetchedData.filter((val)=>val.category === 8)
			console.log(filteredData);
			break;
		case  "handsfree":
			filteredData = fetchedData.filter((val)=>val.category === 9)
			console.log(filteredData);
			break;
      default: console.log("nothing matched");
   }
   

   // pagination part 
   const indexOfLastPost = currentPage * postsPerPage
   const indexOfFirstPost = indexOfLastPost - postsPerPage
   const currentPosts = filteredData.slice(indexOfFirstPost,indexOfLastPost)

   const paginate = (pageNumber)=>{setCurrentPage(pageNumber)} 

   // console.log(indexOfFirstPost, indexOfLastPost , currentPosts);
   

   return (
      <Fragment>
         <PageContainer>
            <div className={` ${st.landingBanner}`}>
               <div className={st._1stBanner}>
                  <img src="https://www.technolife.ir/image/banner_CenterTwinBanners_npIrqU_55404ba1-ae85-4d65-9cd8-36911406d48a.png" alt=" " />
               </div>
               <div className={st._2ndBanner}>
                  <img src="https://www.technolife.ir/image/banner_CenterTwinBanners_tqGh8a_d0eaa460-6ea6-457a-8ea0-801f6faca1da.png" alt=" " />
               </div>
            </div>
            <div className={st.wrapper}>
               <div className={st.filters}>
                  <FilterPrice/>
                  <FilterPrice/>
                  <FilterPrice/>
                  {/* <section className={st.filterSection}>
                     <h2 className={st.filterTitle}>{` برند ها `}</h2>
                     <div className={st.line}/>
                     <div className={st.filterBody}>
                        <div>
                           <input type="radio" name="brand" value="razer" id="" />
                           <label htmlFor="">razer</label>
                        </div>
                        <div>
                           <input type="radio" name="brand" value="logitech" id="" />
                           <label htmlFor=""> logitech </label>
                        </div>
                        <div>
                           <input type="radio" name="brand" value="tsco" id="" />
                           <label htmlFor="">tsco </label>
                        </div>
                        <div>
                           <input type="radio" name="brand" value="a4thech" id="" />
                           <label htmlFor="">a4thech </label>
                        </div>

                     </div>
                     <div className={st.line}/>
                  </section> */}
               </div>

               <SpecialProduct title = {theTitle.title}>
                  <Product posts={currentPosts}/>
               </SpecialProduct>
            </div>

            {/* pagination */}
            <div>
               <Pagination 
                  postPerPage={postsPerPage} 
                  totalPost={fetchedData.length} 
                  paginate={paginate}
               />
            </div>

         </PageContainer>
      </Fragment>
   )
}

export default Products