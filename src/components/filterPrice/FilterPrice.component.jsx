import st from 'assets/styles/pages/products.pages.module.scss'
import { useState } from 'react';

const FilterPrice = () => {

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
		// <div className="App">
		// 	<input type="range" onInput={handleInput} />
		// 	<h1>Price: {price}</h1>
		// 	<div>
		// 		{hotels
		// 			.filter((hotel) => {
		// 				return hotel.price > parseInt(price, 1000);
		// 			})
		// 			.map((hotel) => {
		// 				return (
		// 					<p key={hotel.name}>
		// 						{hotel.name} | {hotel.price} &euro;{" "}
		// 					</p>
		// 				);
		// 			})}
		// 	</div>
		// </div>
   // );
		<section className={st.filterSection}>
			<h2 className={st.filterTitle}>{` فیلتر ها`}</h2>
			<div className={st.line} />
			<div className={st.filterBody}>
				<div>
					<input type="radio" name="filter" value="بیشترین" id="" />
					<label htmlFor="">بیشترین</label>
				</div>
				<div>
					<input type="radio" name="filter" value="کم ترین " id="" />
					<label htmlFor="">کم ترین </label>
				</div>
				<div>
					<input
						type="radio"
						name="filter"
						value="بیشترین تخفیف"
						id=""
					/>
					<label htmlFor="">بیشترین تخفیف</label>
				</div>
				<div>
					<input
						type="radio"
						name="filter"
						value="پرفروش ترین"
						id=""
					/>
					<label htmlFor="">پرفروش ترین</label>
				</div>
			</div>
			<div className={st.line} />
		</section>
   );
}
export  {FilterPrice}