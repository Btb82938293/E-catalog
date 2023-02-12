import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import pic1 from "./assets/1.png";
import React, { useState } from "react";

export default function ItemCart(props) {
  const [count, setCount] = useState(1);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div className="cart-item">
      <div className="cart-item-quality-description">
        <div className="cart-img">
          <img src={pic1} alt="/" />
        </div>
        <div className="cart-item-description">
          <p>
            Brand {props.brand} / {props.title}
          </p>
        </div>
      </div>
      <div className="cart-item-commercial-description">
        <p className="cart-item-price">
          {props.currency} {props.price}
        </p>
        <div className="cart-qwt-control">
          <p className="cart-item-qwt">{count}</p>
          <div className="qwt-btns">
            <button onClick={increment} className="increment-btn">
              <IoMdArrowDropup />
            </button>
            <button onClick={decrement} className="decrement-btn">
              <IoMdArrowDropdown />
            </button>
          </div>
        </div>
        <p className="cart-item-total-price">
          USD {(props.price * count).toFixed(2)}
        </p>
        <button
          onClick={() => props.deleteItem(props.id)}
          className="delete-btn"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
}
