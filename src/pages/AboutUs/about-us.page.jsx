import { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { PageContainer } from 'layouts'
import { getAppTitle , getAppCopyright,getAppAuthor,getAppDescription } from 'utils'
import 'assets/styles/pages/about-us.pages.scss'

const appTitle = getAppTitle()
const appDesc = getAppDescription()
const appAuthor = getAppAuthor()
const appCR = getAppCopyright()


const AboutUs = () => {
   return (
      <Fragment>
         <Helmet>
            <meta name="description" content={appDesc}/>
            <meta name="author" content={appAuthor} />
            <meta name="copyright" content={appCR}/>
            <title>{appTitle} | About us</title>
         </Helmet>

         <PageContainer>
            <div>this is About us page</div>
         </PageContainer>
      </Fragment>

   )
}

export default AboutUs