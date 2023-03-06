import st from 'assets/styles/pages/singlePageProduct.pages.module.scss'
import 'assets/styles/public.scss'
import { PageContainer } from "layouts"
import { Counter, Loading } from "components"
import { useDispatch, useSelector } from "react-redux"
import { useCategoryDataQuery, useFilteredCategoryDataQuery, useFilteredProductQuery, useNewOrderMutation, useProductUpdateMutation } from "apis"
import { useState, useEffect ,Fragment} from "react"
import { ordersAction , cartAction } from "store" 
import { useNavigate } from "react-router-dom"
import { INTERNAL_PATHS } from "configs/routes.config"
import { convertNumberToPersian } from 'utils'
import { API_BASE_URL } from 'configs/variable.config'


const SingleProduct = () => {
	let tmp 
	const productID = useSelector((state)=>state.ProductSlice.singleProduct)
	const {data , isLoading} = useFilteredProductQuery(productID.id)
	// const {data:cat , isLoading:ld} = useFilteredCategoryDataQuery(productID.id)
	const [counter ,setCounter] = useState(0)
	const dispatch= useDispatch()

	const [updateQuantity]= useProductUpdateMutation()
	let a 
	useEffect(()=>{
		fetch(`${API_BASE_URL}/category?id=${productID.id}`)
		.then(response => response.json())
		.then(data => {
			console.log(data)
			return a=data
		})
		.catch(err => console.error(err));
	},[])
	if(isLoading){
      return <Loading/>
   }
	// if(ld){
   //    return <Loading/>
   // }
	const specificProduct = data[0]
	console.log(specificProduct);
	console.log(a);
	
	const handleAddToBasket = ()=>{
		const dataCollection = {...specificProduct , count:counter} 
		// const newOrder = {
		// 	// ...random , 
		// 	products:{
		// 		id:dataCollection.id,
		// 		name:dataCollection.name, 
		// 		count:dataCollection.count,
		// 		description:dataCollection.description,
		// 		price:dataCollection.price,
		// 		image:"img"}
		// 	}

		// console.log(newOrder, "newOrder");
		console.log(dataCollection, "datacollection");
		// dispatch(ordersAction.addedOrders(newOrder))
		dispatch(cartAction.addToCart(dataCollection))
		//here we should update maximum Quantity of product
		const diff = +specificProduct.quantity - dataCollection.count
		const temp = {...specificProduct , quantity:diff}
		console.log(diff , temp);
		updateQuantity(temp)

		// console.log(cartAction.addToCart(dataCollection));
		console.log("dispatchedd");
		// navigate(INTERNAL_PATHS.BASKET)
		// localStorage.setItem("basketProductsCount",1)
		//post request
		// await postOrder(newOrder)
		
	}

	   // const target = {a: 1, b: 2, c: 3};
   // const source = {d: 4, e: 5, f: 6};
   // const obj3 = {...target, ...source}; //merge method 1
   // Object.assign(target, source); // merge method 2 here target is the result



   return (
		<Fragment>
			<PageContainer>
				<div className={`container ${st.mainWrapper}`}>
					<section className={st.imageWrapper}>
						<div className={st.imageParent}>
							<div className={st.image}>
								<img src={specificProduct.image} alt=" " />
							</div>
						</div>

						<div className={st.subImageParent}>
							<div className={st.subImage}>
								<div className={st.subImage1}>
									<img src={specificProduct.image} alt=" " />
								</div>
								<div className={st.subImage2}>
									<img src={specificProduct.image} alt=" " />
								</div>
								<div className={st.subImage3}>
									<img src={specificProduct.image} alt=" " />
								</div>
							</div>
						</div>
					</section>

					<div className={st.verticalLine}></div>
					{/* line vertical */}

					<section className={st.contentWrapper}>
						<div className={st.title}>
							<h2>{`${specificProduct.brand} ${specificProduct.name}`}</h2>
							<span>
								{specificProduct.thumbnail || specificProduct.description}
							</span>
						</div>
						<div className={st.horizontalLine}></div>
						{/* line horizontal */}
						<section className={st.descWrapper}>
							<div className={st.grid}>
								<div className={st.descriptions}>
									<ul>
										<li>{specificProduct.description}</li>
									</ul>
								</div>
								<div className={st.moreInfo}>
									<ul>
										<li>
											<span>دسته بندی :</span>
											<span>کالای دیجیتال </span>
											{/* <span>{false?cat[0].persianName:  "کالای دیجیتال"} </span> */}
										</li>
										<li>
											<span>برند : </span>
											<span>{specificProduct.brand}</span>
										</li>
										{/* <li>
											<span>رنگ:</span>
											<span> ...</span>
										</li> */}
									</ul>
								</div>
								<div className={st.price}>
									<span>
										{convertNumberToPersian(specificProduct.price) } <small>تومان</small>
									</span>
								</div>
								<div className={st.add}>
									<button 
										className={st.a2cButton} 
										onClick={()=>(
											counter===0 ? alert("تعداد کالا نباید صفر باشد "):
											handleAddToBasket())}>
											افزودن به سبد خرید
									</button>
									<Counter 
										setCounter={setCounter} 
										maxLimit={specificProduct.quantity}/>
								</div>
							</div>
						</section>
					</section>
				</div>
			</PageContainer>
		</Fragment>
   );
   }

   export default SingleProduct