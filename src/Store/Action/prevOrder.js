import * as actionTypes from "./actionType";
import { db } from "../../firebase";

export const addToPrevOrder = (data, price, id) => {
  console.log(data);
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  let seconds = today.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let hour = today.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }
  let time = (today =
    " Time: " +
    hour +
    ":" +
    minutes +
    ":" +
    seconds +
    " Date: " +
    dd +
    "-" +
    mm +
    "-" +
    yyyy);
  return (dispatch) => {
    console.log(data);
    db.collection("userData").doc(id).collection("prevOrder").doc(time).set({
      quantity: data.length,
      data: data,
      date: time,
      totalPrice: price,
    });
  };
};
