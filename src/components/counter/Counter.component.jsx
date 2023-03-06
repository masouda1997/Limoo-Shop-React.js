import st2 from 'assets/styles/components/counter.component.module.scss'
import { useState } from 'react';

const Counter = (props) => {
	const [count, setCount] = useState(0);
	// use in single Product pge
	props.setCounter && props.setCounter(count)

	const incrementHandler = () => {
		count >= +props.maxLimit ? setCount(props.maxLimit) : setCount(count + 1);
	};
	const decrementHandler = () => {
      count > 0 ? setCount(count - 1) : setCount(count)
	};

	return (
		<div className={st2.container}>
			<div className={st2.wrapper}>
            <button className={st2.plus} onClick={incrementHandler}>
					+
				</button>
				<label className={st2.lblDisplay}>{count}</label>
				<button className={st2.mines} onClick={decrementHandler}>
					-
				</button>
			</div>
		</div>
	);
};

export {Counter};


// import st from 'assets/styles/components/counter.component.module.scss'

// const Counter = () => {
//    return (
// 		<div className={st.counterContainer}>
// 			<div className={st.wrapper}>
// 				<button className={st.mines}>
// 					-
// 				</button>
// 				<label className={st.lblDisplay}>{count}</label>
// 				<button className={st.plus}>
// 					+
// 				</button>
// 			</div>
// 		</div>
//    );
// }

// export {Counter}