import st from 'assets/styles/components/product.component.module.scss'
import { INTERNAL_PATHS } from 'configs/routes.config';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { singleProductAction } from 'store';


export const Product = ({posts}) => {

	const navigate = useNavigate()
	const dispatch = useDispatch()
	console.log(posts);

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
	console.log(posts);
	// console.log(posts , 'ppp');
   return (
		<>
			{posts.map(({name, id , price, image}) => {
				return (
					<div className={st.products} key={id} onClick={()=>{handleCartClick(id)}}>
						<div className={st.productImage}>
							<img 	
                        src={image} 
                        alt=" " />
						</div>
						<div className={st.productContent}>
							<span>{name || "error"}</span>
							<div className={st.price}>
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
				);
			})}
		</>
   );
}
