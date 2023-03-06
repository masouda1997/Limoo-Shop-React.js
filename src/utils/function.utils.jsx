import { useState } from "react"

export const getAppTitle = ()=>{
   return process.env.REACT_APP_WEBSITE_NAME
} 
export const getAppDescription = ()=>{
   return process.env.REACT_APP_WEBSITE_DESC
}
export const getAppAuthor = ()=>{
   return process.env.REACT_APP_WEBSITE_AUTHOR
}
export const getAppCopyright = ()=>{
   return process.env.REACT_APP_WEBSITE_COPYRIGHT
}
export function numberSeparator(x) {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export const promoCodeHandler = (price)=>{
   let promo = 0
   if(price >= 5000000){
      promo = 0.08 * price
      console.log(1);
   }
   else if (price >= 1000000){
      promo = 0.03 * price
      console.log(2);
   }
   else if( price>=500000){
      promo = 0.01 * price
      console.log(3);
   }
   return promo.toFixed(0)
}
export const convertNumberToPersian = (number) => {
	const persianNumber = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
	return number.toString().replace(/[0-9]/g, function (w) {
		return persianNumber[+w];
	});
};
export function toPersianDate(timestamp) {
   let today = new Date(timestamp);
   today = today.toLocaleDateString("fa-IR");
   return today;
}
