import React, { Component } from "react";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../Store/Action";
import CheckoutForm from "../../Components/CheckoutForm/CheckoutForm";
import "./Checkout.css";

import { useAuth } from "../../Context/AuthContext";

const Checkout = (props) => {
  const { currentUser } = useAuth();

  const orderPlaced = () => {
    props.addToPrevOrder(props.cart, props.totalPrice, currentUser.uid);
    toast.dark("Order has been placed", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <section>
        <div className="checkout_container">
          <h1>Checkout</h1>
        </div>
      </section>
      <section className="section_padding">
        <div className="checkout_contain">
          <div className="detail_order">
            <div className="bill_detail">
              <h3>Billing Details</h3>
              <CheckoutForm />
            </div>
            <div className="order_sum">
              <div className="order_detail">
                <h2>Your Order</h2>
                <ul className="list">
                  <li>
                    Product
                    <span>Total</span>
                  </li>
                  {props.cart.map((item, i) => {
                    return (
                      <li key={i}>
                        <span className="first"> {item.cart.type}</span>

                        <span className="last">
                          Rs:{item.cart.price * item.quantity}
                        </span>
                        <span className="middle">x{item.quantity}</span>
                      </li>
                    );
                  })}
                </ul>
                <ul className="list list_2">
                  <li>
                    Subtotal
                    <span>Rs:{props.totalPrice}</span>
                  </li>
                  <li>
                    Shipping
                    <span>Flat rate: Rs:50.00</span>
                  </li>
                  <li>
                    Total
                    <span>Rs:{props.totalPrice + 50}</span>
                  </li>
                </ul>
                <button className="btn_7" onClick={orderPlaced}>
                  Proceed for Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartDetail.cart,
    totalPrice: state.cartDetail.totalPrice,
    userId: state.profileDetail.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToPrevOrder: (data, price, id) =>
      dispatch(actions.addToPrevOrder(data, price, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
