import { PageContainer } from 'layouts'
import { Fragment } from 'react'
import st from 'assets/styles/pages/products.pages.module.scss'
import st2 from 'assets/styles/components/product.component.module.scss'
import SingleProduct from 'pages/singlePageProduct/singleProduct.page'
import { FilterPrice, Loading, Pagination, Product, SpecialProduct } from 'components'
import { useSelector } from 'react-redux'
import { logDOM } from '@testing-library/react'
import { useState  , useEffect} from 'react'
import { useAllProductDataQuery } from 'apis'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { INTERNAL_PATHS } from 'configs/routes.config'
import { singleProductAction } from 'store'


const Products = () => {
   const theTitle = useSelector((state)=>state.menuTitle.menuTitle)
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(6);
   const {data:fetchedData ,isLoading} = useAllProductDataQuery()
   const category = useParams()
   let filteredData = ""
   // product comp
	const navigate = useNavigate()
	const dispatch = useDispatch()
   const [filterInfo,setFilterInfo] = useState(false)
   console.log(filterInfo);

   /*********************************** Functions ***************************************/

   const addToBasketHandler = (e)=>{
		e.stopPropagation()
		console.log(e.target.parentElement.parentElement);
	}
   const handleCartClick =(id)=>{
		console.log(id)
		//1 here pass data to store and then to singleCart  page
		dispatch(singleProductAction.moveProduct({id}))
		//2 navigate to single page product
		navigate(INTERNAL_PATHS.SINGLE_PRODUCT_PAGE)
	}
   
   
   /****************************** pagination variables **********************************/
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
   
   const indexOfLastPost = currentPage * postsPerPage
   const indexOfFirstPost = indexOfLastPost - postsPerPage
   const currentPosts = filteredData.slice(indexOfFirstPost,indexOfLastPost)
   const paginate = (pageNumber)=>{setCurrentPage(pageNumber)} 
   console.log(currentPosts);

   let filterers

   if(filterInfo==="max"){
      filterers = currentPosts
      console.log(filterers , "before");
      filterers = filterers.sort((a,b)=> {  
         if(a.price>b.price){
            return -1
         }
      })
      console.log(filterers ,'after');
   }else if (filterInfo==="min"){
      filterers=currentPosts
      filterers = filterers.sort((a,b)=> {  
         if(a.price<b.price){
            return -1
         }
      })
      console.log(filterers ,'after');
   }else if(filterInfo==="available"){
      console.log("available");
      filterers=[]
   }
   
   return (
      <Fragment>
         <PageContainer>

            {/* ************************* Banners ************************* */}

            <div className={` ${st.landingBanner}`}>
               <div className={st._1stBanner}>
                  <img src="https://www.technolife.ir/image/banner_CenterTwinBanners_npIrqU_55404ba1-ae85-4d65-9cd8-36911406d48a.png" alt=" " />
               </div>
               <div className={st._2ndBanner}>
                  <img src="https://www.technolife.ir/image/banner_CenterTwinBanners_tqGh8a_d0eaa460-6ea6-457a-8ea0-801f6faca1da.png" alt=" " />
               </div>
            </div>

            {/* ************************* Filters ************************* */}

            <div className={st.wrapper}>
               <div className={st.filters}>
                  <FilterPrice 
                     setFilterInfo={setFilterInfo} 
                     filterInfo={filterInfo}/>
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

            {/* ************************* Products ************************* */}

               <SpecialProduct title = {theTitle.title}>
                  {/* <Product posts={currentPosts}/> */}
                  
                  {filterInfo===false ? 
                     currentPosts.map(({name, id , price, image}) =>(
                        <div className={st2.products} key={id} onClick={()=>{handleCartClick(id)}}>
                           <div className={st2.productImage}>
                              <img 	
                                 src={image} 
                                 alt=" " />
                           </div>
                           <div className={st2.productContent}>
                              <span>{name || "error"}</span>
                              <div className={st2.price}>
                                 <button onClick={(e)=>addToBasketHandler(e)}>
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="30"
                                       height="30"
                                       fill="currentColor"
                                       class="bi bi-bag-fill"
                                       viewBox="0 0 16 16"
                                    >
                                       <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                                    </svg>
                                 </button>
                                 <span>
                                    {price || 0}
                                    <small> تومان</small>
                                 </span>
                              </div>
                           </div>
                        </div>
                        )
                     ): 
                     filterers.map(({name, id , price, image}) =>(
                        <div className={st2.products} key={id} onClick={()=>{handleCartClick(id)}}>
                           <div className={st2.productImage}>
                              <img 	
                                 src={image} 
                                 alt=" " />
                           </div>
                           <div className={st2.productContent}>
                              <span>{name || "error"}</span>
                              <div className={st2.price}>
                                 <button onClick={(e)=>addToBasketHandler(e)}>
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="30"
                                       height="30"
                                       fill="currentColor"
                                       class="bi bi-bag-fill"
                                       viewBox="0 0 16 16"
                                    >
                                       <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
                                    </svg>
                                 </button>
                                 <span>
                                    {price || 0}
                                    <small> تومان</small>
                                 </span>
                              </div>
                           </div>
                        </div>
                        )
                     )
                  }

               </SpecialProduct>
            </div>

            {/* ************************* Pagination ************************* */}
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