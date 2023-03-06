import st2 from 'assets/styles/components/counter.component.module.scss'
import st from 'assets/styles/pages/basket.pages.module.scss'
import { PageContainer } from "layouts"
import { Counter, Loading } from "components"
import { Link, useNavigate } from "react-router-dom"
import { INTERNAL_PATHS } from "configs/routes.config"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useDeleteOrderCartMutation, useGetOrdersQuery, useUpdateOrderCartMutation } from "apis"
import Products from "pages/products/products.page"
import { useState } from "react"
import { cartAction } from 'store'
import { convertNumberToPersian, numberSeparator, promoCodeHandler } from 'utils'


const Basket = (props) => {
   const navigate = useNavigate()
   // const user = useSelector((state)=>state.OrdersSlice.theOrders)
	const passedCartInfo = useSelector((state)=> state.CartSlice)
	const dispatch = useDispatch()
	
	const promo = promoCodeHandler(passedCartInfo.cartTotalAmount)
	
	useEffect(()=>{
		dispatch(cartAction.priceCalculation())
		dispatch(cartAction.theFinalPrice(passedCartInfo.cartTotalAmount-promo))
	},[passedCartInfo ,dispatch])
	console.log('passedProductInfo',passedCartInfo);
	
	// const [deleteCart] = useDeleteOrderCartMutation()
   // const {data:ordersList , isLoading} = useGetOrdersQuery()
	// const [cartItems, setCartItems] = useState([])
	// const [updateCart] = useUpdateOrderCartMutation(ordersList)

	// if(isLoading) return <Loading/>

	
	// const justProductsPrice = ordersList.map(v => v.products.price)
	// console.log(justProductsPrice)
	// let sum = justProductsPrice.reduce((a,b)=>{return (Number(a)) + (Number(b))})
	// console.log(sum);
	// console.log("orderList\n" ,ordersList , "passedCArtInfo\n" , passedCartInfo)
	
	// const itemsPrice = cartItems.reduce((a, c) => a + c.count * c.price, sum)
	// const taxPrice = itemsPrice * 0.14
	// const shippingPrice = itemsPrice > 2000 ? 0 : 20
	// const totalPrice = itemsPrice + taxPrice + shippingPrice
	
	// function 
	
	const totalPrice = numberSeparator(passedCartInfo.cartTotalAmount-promo)

   const handleDeleteCart = (cartItem) => {
		// deleteCart({id})
		console.warn('delete btn');
		dispatch(cartAction.removeFromCart(cartItem))
	};

	const onAdd =  (cartItem) => {
		dispatch(cartAction.incrementCart(cartItem))
	};

	const onRemove = (cartItem) => {
		console.log(cartItem);
		console.log(cartAction.decreaseCart(cartItem));
		dispatch(cartAction.decreaseCart(cartItem))
	};

	const clearBasket = ()=>{
		console.log(passedCartInfo)
		// passedCartInfo.cartItem
		// here we must update value by plus
		alert("آیا مطمئن هستید که میخواهید  سبد رو خالی کنید ")
		dispatch(cartAction.clearCart())
	}

   return (
		<PageContainer>
			{passedCartInfo.cartItem.length === 0 
			?(
				<>
				<section className={st.emptyBasket}>  
					<h2 className={st.emtyTitle}>
						سبد شما خالی می باشد
					</h2>
					<Link to={INTERNAL_PATHS.HOME} className={st.linktoHome}> بازگشت به خانه 
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
					<path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
					</svg>
					</Link>
				</section>
				</>
			)
			:(
				<div className={st.container}>
					<div className={st.cartsWrapper}>
						{ 
						passedCartInfo.cartItem.map((value) => (
							<div className={st.cart} key={value.id}>
								<section className={st.ProductImage}>
									<img src={value.image} alt="" />
								</section>
								<section className={st.description}>
									<div className={st.title}>
										{value.name}
									</div>
									<div className={st.cartDetail}>
										<div className={st.productDes}>
											<ul>
												<li>
													{value.description}
												</li>
											</ul>
										</div>
										<div className={st.edition}>
											<div style={{fontSize:"30px"}}>

												<button className={st2.plus} onClick={()=> onAdd(value)} > + </button>
												<label className={st2.lblDisplay}>{convertNumberToPersian(value.count)}</label>
												<button className={st2.mines} onClick={() => onRemove(value)} > - </button>
												
											</div>
											<div onClick={()=>handleDeleteCart(value)}>
												<svg
													width="30"
													height="30"
													viewBox="0 0 30 34"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M11.6667 0L10 1.66667H0V5H30V1.66667H20L18.3333 0H11.6667ZM2.27539 8.33333L4.82096 30.4395C5.04096 32.0895 6.46167 33.3333 8.125 33.3333H21.8717C23.5351 33.3333 24.9574 32.0914 25.179 30.4264L27.7246 8.33333H2.27539Z"
														fill="#9F9F9F"
													/>
												</svg>
											</div>
										</div>
										<div className={st.cartPrice}>
											<h2>{convertNumberToPersian(value.price) }</h2>
											<span>تومان</span>
										</div>
									</div>
								</section>
							</div>
						))}
						{/* end of map */}
					</div>
					

					<div className={st.priceSection}>
						<div className={st.productsPrice}>
							<span>قیمت کالاها</span>
							<span>
								{ convertNumberToPersian(passedCartInfo.cartTotalAmount)} <span>تومان</span>
							</span>
						</div>
						<div className={st.promo}>
							<span>تخفیف ها</span>
							<span>
								{convertNumberToPersian(promo)} <span>تومان</span>
							</span>
						</div>
						<div className={st.totalPrice}>
							<span>جمع کل </span>
							<span> {convertNumberToPersian(totalPrice) } <span>تومان</span>
							</span>
						</div>
						<div className={st.btnWrapper}>
							<button
								className={st.btns}
								onClick={() => navigate("/products/mouse")}
							>
								به خرید ادامه بده
							</button>
							<Link to={INTERNAL_PATHS.PAY} className={st.btns}>
								پرداخت هزینه ها
							</Link>
						</div>
						<div className={st.clearBasketBtn}>
							<button onClick={() => clearBasket()}> سبدتو خالی من </button>
						</div>
					</div>
				</div>
			)}
			
		</PageContainer>
   );
}

export default Basket