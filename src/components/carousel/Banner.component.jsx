import Carousel from 'react-bootstrap/Carousel';
import 'assets/styles/public.scss'
import st from  "assets/styles/components/carousel.component.module.scss"

function Banner(props) {
	return (
		<Carousel variant="dark" className={`${props.className} container`} >
			<Carousel.Item interval={3000}>
				<img
					className={`d-block h-100 w-100 ${st.image}`}
					src="https://www.technolife.ir/image/banner_SlideBanner_7LXJFV_dc95152f-fe0c-4494-8203-8881852d57aa.png"
					alt="First slide"
				/>
				<Carousel.Caption>
					{/* <p>
						Nulla vitae elit libero, a pharetra augue mollis
						interdum.
					</p> */}
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={3000}>
				<img
					className="d-block w-100"
					src="https://www.technolife.ir/image/banner_SlideBanner_bNb4GP_f8a2db58-e4e7-49c9-aafc-d324c84b7ac5.png"
					alt="Second slide"
				/>
				<Carousel.Caption>
					{/* <h5>Second slide label</h5>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p> */}
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item interval={3000}>
			{/* image 800x400 */}
				<img
					className="d-block w-100"
					// src="holder.js/800x400?text=Third slide&bg=e5e5e5"
					src="https://www.technolife.ir/image/banner_SlideBanner_e9ICzS_4dc772fc-4392-4fcd-ba58-e4337099a9fc.png"
					alt="Third slide"
				/>
				<Carousel.Caption>
					{/* <h5>Third slide label</h5>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl
						consectetur.
					</p> */}
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export {Banner};