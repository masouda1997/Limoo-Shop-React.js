import st from 'assets/styles/pages/control.pages.module.scss'

const CustomPagination = (props) => {
   return (
		<div className={st.pages}>
			<button onClick={() => props.setPage(props.page + 1)} isLoading={props.isFetching}>
				بعدی
			</button>

			<span>{props.page}</span>

			<button
				onClick={() => (props.page <= 1 ? props.setPage(props.page) : props.setPage(props.page - 1))}
				isLoading={props.isFetching}
			>
				قبلی
			</button>
		</div>
   );
}

export {CustomPagination}