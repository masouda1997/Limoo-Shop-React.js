import st from 'assets/styles/pages/home.pages.module.scss'
// import b1 from 
import { getAppTitle , getAppCopyright,getAppAuthor,getAppDescription } from 'utils'
import { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { PageContainer } from 'layouts'
import {Banner , Product, SpecialProduct} from 'components'
import { CircleMenu } from 'components'

const appTitle = getAppTitle()
const appDesc = getAppDescription()
const appAuthor = getAppAuthor()
const appCR = getAppCopyright()


const Home = () => {

   
   return (
		<Fragment>
			<Helmet>
				<meta name="description" content={appDesc} />
				<meta name="author" content={appAuthor} />
				<meta name="copyright" content={appCR} />
				<title>{appTitle}</title>
			</Helmet>

			<PageContainer>
				<Banner className={st.banner} />
				<CircleMenu />
				<SpecialProduct title={'خرید  هیجانی'}>
               {/* <div className={st.products}> */}
                  {/* <Product/>
                  <Product/>
                  <Product/>
                  <Product/> */}
               {/* </div> */}
            </SpecialProduct>

            <section className={st.landingBanner}>
               <section className={st.container}>
                  <div style={{overflow:"hidden"}}>
                     <img style={{
                        width:"750px",
                        height:"300px",
                        
                     }} src="https://www.technolife.ir/image/banner_CenterTwinBanners_npIrqU_55404ba1-ae85-4d65-9cd8-36911406d48a.png" alt="" />
                  </div>
                  <div style={{overflow:"hidden"}}>
                     <img style={{
                        width:"750px",
                        height:"300px",
                        
                     }} src="https://www.technolife.ir/image/banner_CenterTwinBanners_tqGh8a_d0eaa460-6ea6-457a-8ea0-801f6faca1da.png" alt="" />
                  </div>
               </section>
            </section>


				<SpecialProduct title={'پر فروش ها '}>
               {/* <div className={st.products}> */}
                  {/* <Product/>
                  <Product/>
                  <Product/>
                  <Product/> */}
               {/* </div> */}
            </SpecialProduct>
			</PageContainer>
		</Fragment>
   );
}

export default Home