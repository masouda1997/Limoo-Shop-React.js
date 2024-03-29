import st from  'assets/styles/layouts/header.layout.module.scss'
import { INTERNAL_PATHS } from 'configs/routes.config';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const SearchBox = ({data}) => {

	const[filteredData , setFilteredData] = useState([])
	const[wordEntered , setWordEntered] = useState("")
	const handleFilter = (event)=>{
		const searchWord = event.target.value
		setWordEntered(searchWord)
		const newFilter = data.filter((value)=>{
			return value.name.toLowerCase().includes(searchWord)
		})

		if(searchWord === ""){
			setFilteredData([])
		}else{
			setFilteredData(newFilter)
		}
	}
	const clearInput= ()=>{
		setFilteredData([])
		setWordEntered("")
	}

	return (
		<div className={st.searchWrapper}>
			<div className={st.search}>
				{filteredData.length === 0 ?   
					<button>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							class="bi bi-search"
							viewBox="0 0 16 16"
							>
							<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
						</svg>
					</button> : 
					<button onClick={clearInput}>
						<svg xmlns="http://www.w3.org/2000/svg" 
							width="20"
							height="20" 
							fill="currentColor" 
							class="bi bi-x-circle" 
							viewBox="0 0 16 16">
							<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
							<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
						</svg> 
					</button>
					}
				<input 
					type="text" 
					name="" id="" 
					placeholder="محصول خود را جستجو کنید " 
					value={wordEntered} 
					onChange={handleFilter} />
			</div>
			{filteredData.length != 0 && (
				<div className={st.apiData}>
					{filteredData.slice(0 , 5).map((value)=>(
						<div>
							<Link to={`/products/mouse`}>
								<p>{value.name}</p>
							</Link>
						</div>
					))}
				</div>
			)}
		</div>
		

	);
};

export default SearchBox;
