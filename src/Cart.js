import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import React, { useEffect, useState } from "react";
import ItemCart from "./ItemCart";

export default function Cart() {
  const [savedData, setSavedData] = useState(
    JSON.parse(localStorage.getItem("prodData"))
  );
  //Logic for deleting items from the cart
  const deleteItem = (id) => {
    console.log("deleted", id);
    setSavedData((prevSavedData) =>
      prevSavedData.filter((elem) => elem.id !== id)
    );
  };
  useEffect(() => {
    localStorage.setItem("prodData", JSON.stringify(savedData));
  }, [savedData]);
  console.log(savedData);
  //Creating added elements
  const addedEls = savedData.map((item) => (
    <ItemCart
      key={item.id}
      brand={item.brand}
      currency={item.regular_price.currency}
      title={item.title}
      price={item.regular_price.value}
      id={item.id}
      deleteItem={deleteItem}
    />
  ));
  return (
    <div className="cart">
      <div className="cart-nav">
        <Link className="cartLink" to="/">
          <img className="logo-img" src={logo} alt="/" />
        </Link>
        <Link className="catalog-link" to="/">
          Catalog
        </Link>
      </div>
      <main>
        <h3 className="cart-main-text">Shopping Cart</h3>
        <div className="cart-descr">
          <p className="item-descr">Item</p>
          <p>Price</p>
          <p className="qwt-descr">Qty</p>
          <p className="total-descr">Total</p>
        </div>
        {addedEls}
      </main>
    </div>
  );
}
