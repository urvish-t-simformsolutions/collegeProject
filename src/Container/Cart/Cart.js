import React, { useState, useEffect, Component } from "react";
import "./Cart.css";
import * as actions from "../../Store/Action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Cart = (props) => {
  const { currentUser } = useAuth();
  const { onPriceUpdate, getFromCartDb, onDecrement, onIncrement } = props;

  const [updateCart, setUpdateCart] = useState(false);

  useEffect(() => {
    if (currentUser) {
      getFromCartDb(currentUser.uid);
    } else {
      return;
    }
    onPriceUpdate();
  }, []);

  useEffect(() => {
    onPriceUpdate();
  }, [props.cart]);

  const onClick = () => {
    onPriceUpdate();
    setUpdateCart(!updateCart);
    if (updateCart) {
      props.setCartDb(props.cart, currentUser.uid);
    }
  };
  const decrementValue = (i) => {
    onDecrement(i);
    onPriceUpdate();
  };
  const incrementValue = (i) => {
    onIncrement(i);
    onPriceUpdate();
  };
  let bucket = null;
  if (props.cart.length < 1) {
    bucket = <div className="empty-bucket">Your Cart is Empty :(</div>;
  } else {
    bucket = (
      <div className="table">
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            {props?.cart?.map((item, i) => {
              return (
                <tr key={i}>
                  <td>
                    <div>
                      <img src={item.cart.image} alt="/" />
                      <span className="cart-name">{item.cart.type}</span>
                    </div>
                    <div>
                      {updateCart ? (
                        <button
                          type="submit"
                          className="btn_5"
                          onClick={() => props.onRemoveFromCart(i)}
                        >
                          Remove
                        </button>
                      ) : null}
                    </div>
                  </td>
                  <td>
                    <strong> Rs: {item.cart.price}</strong>
                  </td>
                  <td>
                    {updateCart ? (
                      <div className="product_count ">
                        <span
                          className="product_count_item "
                          onClick={() => decrementValue(i)}
                        >
                          <i className="fa fa-minus"></i>
                        </span>
                        <span className="product_count_item value">
                          {item.quantity}
                        </span>
                        <span
                          className="product_count_item"
                          onClick={() => incrementValue(i)}
                        >
                          <i className="fa fa-plus"></i>
                        </span>
                      </div>
                    ) : (
                      item.quantity
                    )}
                  </td>
                  <td>
                    <strong> Rs: {item.cart.price * item.quantity}</strong>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td className="update-cart">
                <button onClick={onClick} className="btn_4">
                  {updateCart ? "Save Changes" : "Update Cart"}
                </button>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="total-price">
              <td></td>
              <td></td>
              <td>
                <h4>Subtotal:</h4>
              </td>
              <td>
                <h4>Rs: {props.totalPrice}</h4>
              </td>
            </tr>
          </tbody>
        </table>
        {currentUser?.uid ? (
          <Link className="btn_6" to="/checkout">
            Proceed to checkout
          </Link>
        ) : (
          <Link className="btn_6" to="/login">
            Proceed to checkout
          </Link>
        )}
      </div>
    );
  }

  return (
    <>
      <section>
        <div className="cart_list_container">
          <h1>Cart List</h1>
        </div>
      </section>

      <section className="section_padding">
        <div className="container">{bucket}</div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartDetail.cart,
    totalPrice: state.cartDetail.totalPrice,
    pillows: state.cartDetail.pillows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveFromCart: (i) => dispatch(actions.removeFromCart(i)),
    onPriceUpdate: () => dispatch(actions.priceUpdate()),
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    getFromCartDb: (id) => dispatch(actions.getFromCartDb(id)),
    setCartDb: (cart, id) => dispatch(actions.setCartDb(cart, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
