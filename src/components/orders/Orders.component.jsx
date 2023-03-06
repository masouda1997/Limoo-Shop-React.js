import s1 from 'assets/styles/components/ordersModal.component.module.scss'
import st from 'assets/styles/pages/control.pages.module.scss'
import {CustomPagination, EditGoods ,EditOrders,Table} from 'components'
import { useState, useEffect } from 'react'
import { useDeleteOrderCartMutation, useDeliveredOrdersDataQuery, useOrdersDataQuery } from 'apis'
import { Loading } from 'components'
import SyncSetting from 'assets/images/SyncSetting.png'
import { useParams } from 'react-router-dom'
import edit from 'assets/images/SyncSetting.png'
import delIcon from 'assets/images/delete.svg'
import {  toPersianDate ,convertNumberToPersian } from 'utils'



export const Orders = () => {
   const[page , setPage] = useState(1)
   const [checked , setChecked] = useState(false)
   const [editStatus , setEditStatus] = useState(s1.inactive)
	const [dataMover, setDataMover] = useState({})
   const {data:orders,isLoading, isFetching} = useOrdersDataQuery("false",page)
	const {data:getDelivery , isLoading:IL} = useDeliveredOrdersDataQuery(true)
	const [tmp, setTmp] = useState([])
	let deliveryList

	// its so important to use useEffect here because it handle problem of one step behind
	useEffect(() => {
		console.log("use effect just rerender and update states");
	}, [tmp,setTmp,deliveryList ])
	
	

   if(isLoading){ return <Loading/>}
	if(IL){return <Loading/>}

   const handleChange = (event) => {
      setChecked(event.target.checked);
		// this condition is one step behind so i checked the negative value
		if(!checked){
			console.log("cheked true");
			setTmp(getDelivery)
			console.log(tmp,"deliveryList",checked);
		}
      
   }

   const handleEdit = (item)=>{
		console.log(item);
		setDataMover(item)
      setEditStatus(s1.active)
   }

	// console.log(checked);
	// console.log(orders);
   return (
		<>
			<div className={st.wrap}>
				<h2> سفارش ها </h2>
				<div className={st.togglePill}>
					{checked ? (
						<span> تحویل داده شده </span>
					) : (
						<span> در انتظار ارسال </span>
					)}
					<input
						type="checkbox"
						id="pill"
						name="check"
						onChange={handleChange}
					/>
					<label for="pill"></label>
				</div>
			</div>

			{/* // ///////////////////////////// the border //////////////////////////////// */}

			{checked ? (
				<section className={st.wrapper}>
					<table className={st.table}>
						<thead>
							<tr>
								<th>نام </th>
								<th> مجموع مبلغ </th>
								<th> زمان تحویل سفارش </th>
							</tr>
						</thead>
						<tbody>
							{/* start map */}
							{tmp.map(
								({ id, lastname, username, prices, deliverdAt }) => (
									<tr key={id}>
										<td>
											{`${username} ${lastname}`}
										</td>
										<td>{convertNumberToPersian(prices)} تومان </td>
										<td>{toPersianDate(deliverdAt)}</td>
									</tr>
								)
							)}
							{/* end of map */}
						</tbody>
					</table>
					<CustomPagination className={st.pages} page={page} setPage={setPage} isFetching ={isFetching} />

				</section>
			// /////////////////////////////////////////////////////////////////////////
			// ///////////////////////////// the border ////////////////////////////////
			// /////////////////////////////////////////////////////////////////////////
			) : (
			// /////////////////////////////////////////////////////////////////////////
			// ///////////////////////////// the border ////////////////////////////////
			// /////////////////////////////////////////////////////////////////////////
				<section className={st.wrapper}>
					<table className={st.table}>
						<thead>
							<tr>
								<th>نام </th>
								<th> مجموع مبلغ </th>
								<th> زمان ثبت سفارش </th>
								<th>  برسی سفارش  </th>
							</tr>
						</thead>
						<tbody>
							{orders.map((item) => (
								<tr key={item.id}>
									<td>
										{`${item.username} ${item.lastname}`}
									</td>
									<td>{convertNumberToPersian(item.prices)} تومان </td>
									<td>{toPersianDate(item.createdAt)}</td>
									<div className={st.edit}>
										<img
											src={edit}
											onClick={()=>handleEdit(item)}
											alt=" "
										/>
									</div>
								</tr>
								)
							)}
							{/* end of map */}
						</tbody>
					</table>

			{/* // ///////////////////////////// the border //////////////////////////////// */}
					<CustomPagination className={st.pages} page={page} setPage={setPage} isFetching ={isFetching} />

				</section>
			)}

			{/* ******************************* Modals ******************************* */}

			<EditOrders setEditStatus={setEditStatus} editStatus={editStatus} dataMover={dataMover} setDataMover={setDataMover}/>
		</>
   );
}
