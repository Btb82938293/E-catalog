import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ItemCart from "./ItemCart";

export default function Cart() {
  const [savedData, setSavedData] = useState(
    JSON.parse(localStorage.getItem("prodData"))
  );
  console.log(savedData);
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
          <p className="logo-img">YourLogo</p>
        </Link>
        <Link className="catalog-link" to="/">
          Catalog
        </Link>
      </div>
      {savedData.length > 0 ? (
        <main>{addedEls}</main>
      ) : (
        <div className="cart-empty">Your shopping cart is empty</div>
      )}
    </div>
  );
}
