export {
  addToCart,
  increment,
  decrement,
  priceUpdate,
  removeFromCart,
} from "./cartAction";

export {
  checkFormDetails,
  setFormDetails,
  showFormDetails,
  clearOnLogout, // updateFormDetails
} from "./profileAction";

export { setData } from "./productAction";

export { addToPrevOrder } from "./prevOrder";

export { addToCartDb, getFromCartDb, setCartDb } from "./cartPage";
