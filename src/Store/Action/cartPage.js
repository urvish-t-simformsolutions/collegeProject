import { db } from "../../firebase";
import * as actionTypes from "./actionType";

export const addToCartDb = (cart, id) => {
  return (dispatch) => {
    db.collection("userData").doc(id).collection("cart").add({
      cartItems: cart,
    });
  };
};

export const getFromCartDb = (id) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SET_CART_EMPTY });
    db.collection("userData")
      .doc(id)
      .collection("cart")
      .get()
      .then((cartItem) => {
        cartItem.docs.forEach((data) => {
          console.log(data.data().cartItems);
          dispatch({
            type: actionTypes.ADD_TO_CART,
            cart: data.data().cartItems,
          });
        });
      });
  };
};

export const setCartDb = (cart, id) => {
  console.log(cart);
  //db.collection("userData").doc(id).collection("cart").delete();
  return (dispatch) => {
    db.collection("userData").doc(id).collection("cart").add({
      cartItems: cart,
    });
  };
};
