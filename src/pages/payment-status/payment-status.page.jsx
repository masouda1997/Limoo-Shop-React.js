import { PageContainer } from 'layouts'
import { PayStatusSuccess , PayStatusFail} from 'components'
import { useEffect, useState } from 'react'

const PaymentStatus = () => {
   const payStatus  = localStorage.getItem("paymentStatus")
      setInterval(() => {
         
         window.location.reload()
      }, 5000);
   return (
      <PageContainer>
         {payStatus === "true" ? <PayStatusSuccess/> : <PayStatusFail/>}
      </PageContainer>
   )
}

export default PaymentStatus