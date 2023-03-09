import st from 'assets/styles/pages/control.pages.module.scss'
import { useState } from 'react'
import { useProductDataQuery } from 'apis'
import { CustomPagination, Loading } from 'components'
import { convertNumberToPersian } from 'utils'


const InventoryTable = ({setUpdatedQuantity , setUpdatedPrice}) => {
   const[page , setPage] = useState(1)
   const[selectPrice , setSelectPrice] = useState(0)
   const[selectQuantity , setSelectQuantity] = useState(0)
   const[value , setValue] = useState("")
   const {data:inventory,isLoading, isFetching} = useProductDataQuery(page)

   
   const handlePriceClick = (id)=>{
      console.log("entered handlePriceClick");
      setSelectPrice(id)
   }
   const handleQuantityClick = (id)=>{
      console.log("entered handleQuantityClick");
		console.log(selectQuantity);
      setSelectQuantity(id)
   }

   const handlePriceChange = (e , id)=>{
      setValue((prev)=>({...prev, price:e.target.value}))
		setUpdatedPrice((prev)=>({...prev ,price: e.target.value ,id}))
   }
	
   const handleQuantityChange = (e , id)=>{
		setValue((prev)=>({...prev, quantity:e.target.value}))
		setUpdatedQuantity((prev)=>({...prev , quantity:e.target.value ,id}))
   }


   if(isLoading){ return <Loading/>}
   return (
		<section className={st.wrapper}>
			<table className={st.table}>
				<thead>
					<tr>
						<th>نام کالا</th>
						<th> قیمت </th>
						<th> موجودی </th>
					</tr>
				</thead>
				<tbody>
					{inventory.map(({ id, name, price, quantity }) => (
						<tr key={id}>
							<td>{name}</td>


							<td onClick={() => handlePriceClick(id)}>
								{selectPrice === id ? (
									<input
										value={value.price}
										onChange={(e) => handlePriceChange(e , id)}
									/>
                        ) : (convertNumberToPersian(price) + " تومان ")}
							</td>


							<td onClick={() => handleQuantityClick(id)}>
								{selectQuantity === id ? (
									<input
										value={value.quantity}
										onChange={(e) =>handleQuantityChange(e, id)}
									/>
								) : (convertNumberToPersian(quantity))}
							</td>


						</tr>
					))}
				</tbody>
			</table>
         <CustomPagination className={st.pages} page={page} setPage={setPage} isFetching ={isFetching} />
		</section>
   );
}

export {InventoryTable}


