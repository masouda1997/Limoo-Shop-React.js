import st from 'assets/styles/pages/products.pages.module.scss'
import { useState } from 'react';

const FilterPrice = (props) => {

	const changeHandler =(e)=>{
		props.setFilterInfo(e.target.value)
		console.log(e.target.value);
	}
   const [price , setPrice] = useState(100000)
   const handleInput = (e) => {
		setPrice(e.target.value);
   };
   const hotels = [
		{ name: "A", price: 40 },
		{ name: "B", price: 50 },
		{ name: "C", price: 60 },
   ];
   return (
		<>
		<section className={st.filterSection}>
			<h2 className={st.filterTitle}>{` فیلتر ها`}</h2>
			<div className={st.line} />
			<div className={st.filterBody}>
				<div>
					<input 
						type="radio" 
						name="filter"
						checked={props.filterInfo==="max"}
						onChange={changeHandler}
						value="max" 
						id="" />
					<label htmlFor="">بیشترین قیمت</label>
				</div>
				<div>
					<input 
						type="radio" 
						name="filter" 
						value="min" 
						checked={props.filterInfo==="min"}
						onChange={changeHandler}
						id="" />
					<label htmlFor="">کم ترین  قیمت</label>
				</div>
				<div>
					<input
						type="radio"
						name="filter"
						checked={props.filterInfo==="available"}
						onChange={changeHandler}
						value="available"
						id=""
					/>
					<label htmlFor=""> کالا های موجود</label>
				</div>
				{/* <div>
					<input
						type="radio"
						name="filter"
						value="popular"
						checked={props.filterInfo==="popular"}
						onChange={changeHandler}
						id=""
					/>
					<label htmlFor="">پرفروش ترین</label>
				</div> */}
			</div>
			<div className={st.line} />
		</section>


		{/* <div className="App">
			<input type="range" onInput={handleInput} />
			<h1>Price: {price}</h1>
			<div>
				{hotels
					.filter((hotel) => {
						return hotel.price > parseInt(price, 1000);
					})
					.map((hotel) => {
						return (
							<p key={hotel.name}>
								{hotel.name} | {hotel.price} &euro;{" "}
							</p>
						);
					})}
			</div>
		</div> */}
		</>
		
   );
}
export  {FilterPrice}