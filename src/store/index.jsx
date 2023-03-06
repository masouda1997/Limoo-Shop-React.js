import { configureStore, createSlice } from "@reduxjs/toolkit";
import {httpService} from 'services/http.service'
import {toast} from "react-toastify"
import {imageUploader} from 'apis/imageUpload'
// import { httpService } from "services/http.service";
// import authReducer from "auth/authSlice";

const initialCounterState = {
   menuTitle : [],
}
const initialGoodsState={
   goods:[],
}
const initialProductState={
   singleProduct:[],
}
const initialOrdersState={
   theOrders:[],
}
const InitialCartState = {
   // if exist in localStore set as default else set empty
   cartItem:localStorage.getItem("cartItem") 
      ? JSON.parse(localStorage.getItem("cartItem")) 
      : [],
   cartTotalQuantity:0,
   cartTotalAmount:0,
	finalPrice:0
}

const menuTitlesSlice = createSlice({
   name:"MenuTitle",
   initialState:initialCounterState,
   reducers:{
      showTitle(state ,action){
         state.menuTitle = action.payload
         console.log(state.menuTitle)
      }
   }
})

const goodsSlice = createSlice({
   name:"goodsSlice",
   initialState:initialGoodsState,
   reducers:{
      goodsToModal(state ,action){
         state.goods = action.payload
      }
   }
}) 

const singleProductSlice = createSlice({
   name:"singleProductSlice",
   initialState:initialProductState,
   reducers:{
      moveProduct(state, action){
         state.singleProduct = action.payload
      }
   }
})

const ordersSlice = createSlice({
   name:"ordersSlice",
   initialState:initialOrdersState,
   reducers:{
      addedOrders(state, action){
         state.theOrders = action.payload
         console.log(state.theOrders);
      }
   }
})

const cartSlice = createSlice({
	name: "cartSlice",
	initialState: InitialCartState,
	reducers: {
		addToCart(state, action) {
			// state.cartItem = action.payload
			// state.cartItem.push(action.payload)
			const itemIndex = state.cartItem.findIndex(
				(item) => item.id === action.payload.id
			);
			console.log(itemIndex);
			if (itemIndex >= 0) {
				console.log(state.cartItem[itemIndex].count);
				state.cartItem[itemIndex].count += action.payload.count;
				toast.info(
					`تعداد ${state.cartItem[itemIndex].name} افزایش یافت`,
					{
						position: "top-right",
						theme: "colored",
					}
				);
				localStorage.setItem(
					"cartItem",
					JSON.stringify(state.cartItem)
				);
			} else {
				// const temp = {...action.payload,count:1};
				// console.log(temp);
				state.cartItem.push(action.payload);
				toast.success(`${action.payload.name} اضافه شد `, {
					position: "bottom-right",
					theme: "colored",
				});

				localStorage.setItem(
					"cartItem",
					JSON.stringify(state.cartItem)
				);
				console.log("**** done ****");
			}
		},
		removeFromCart(state, action) {
			const nextCartItem = state.cartItem.filter(
				(item) => item.id !== action.payload.id
			);
			state.cartItem = nextCartItem;
			localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
			toast.error(`${action.payload.name} حذف شد `, {
				position: "bottom-right",
				theme: "colored",
			});
		},
		decreaseCart(state, action) {
			const itemIndex = state.cartItem.findIndex(
				(item) => item.id === action.payload.id
			);
			if (state.cartItem[itemIndex].count > 1) {
				state.cartItem[itemIndex].count -= 1;
				toast.info("کاهش یافت", {
					position: "bottom-right",
					theme: "colored",
				});
			} else if (state.cartItem[itemIndex].count === 1) {
				const nextCartItem = state.cartItem.filter(
					(item) => item.id !== action.payload.id
				);
				state.cartItem = nextCartItem; // update state
				localStorage.setItem(
					"cartItem",
					JSON.stringify(state.cartItem)
				);
				toast.error(`${action.payload.name} حذف شد `, {
					position: "bottom-right",
					theme: "colored",
				});
			}
			localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
		},
		incrementCart(state, action) {
			const existingIndex = state.cartItem.findIndex(
				(item) => item.id === action.payload.id
			);
            console.log(action.payload.quantity);
			if (existingIndex >= 0 ) {
            if(action.payload.count < +action.payload.quantity){
               state.cartItem[existingIndex] = {
                  ...state.cartItem[existingIndex],
                  count:
                     state.cartItem[existingIndex].count + 1,
               };
               toast.info("افزایش یافت", {
                  position: "bottom-right",
                  theme:"colored"
               });
            }
            else{
               toast.warning("موجودی کافی نیست",{
                  position:"bottom-right",
                  theme:"colored"
               })
            }
			} else {
				let tempProductItem = { ...action.payload, count: 1 };
				state.cartItem.push(tempProductItem);
				toast.success("Product added to cart", {
					position: "bottom-right",
               theme:"colored"
				});
			}
			localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
		},
		clearCart(state, action) {
			state.cartItem = [];
			localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
			toast.error("سبد خالی شد ", {
				position: "bottom-right",
				theme: "colored",
			});
		},
      //cartTotalQuantity handle the badge value
      priceCalculation(state , action){
         let { total, theCount } = state.cartItem.reduce(
				(cartTotal, item) => {
               // console.log("item" , item.count);
					const { price, count } = item;
					const itemTotal = price * count;

					cartTotal.total += itemTotal;
					cartTotal.theCount += count;

               // console.log(cartTotal , "cartTotal");
					return cartTotal;
				},
				{
					total: 0,
					theCount: 0,
				}
			);
         total = parseFloat(total.toFixed(2));
         state.cartTotalQuantity = theCount
         state.cartTotalAmount = total
      },
		theFinalPrice(state,action){
			state.finalPrice = action.payload
		}
	},
});

const store = configureStore({
   reducer:{
      menuTitle : menuTitlesSlice.reducer,
      goodsSlice : goodsSlice.reducer,
      ProductSlice : singleProductSlice.reducer,
      OrdersSlice : ordersSlice.reducer,
      CartSlice : cartSlice.reducer,
      [httpService.reducerPath ] : httpService.reducer,
      [imageUploader.reducerPath ] : imageUploader.reducer
	},
      middleware : (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(httpService.middleware),
		
      middleware2 : (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(imageUploader.middleware),
   })
export const menuTitleAction = menuTitlesSlice.actions
export const goodsAction = goodsSlice.actions
export const singleProductAction = singleProductSlice.actions
export const ordersAction = ordersSlice.actions
export const cartAction = cartSlice.actions
export {store}
