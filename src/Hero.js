import brands from "./brands";
import products from "./products";
import React, { useEffect, useState } from "react";
import { BsCart, BsCartCheck } from "react-icons/bs";
import pic1 from "./assets/1.jpeg";

export default function Hero() {
  //Modifying data, adding isAdded method
  const prodUpd = products.map((elem) => ({
    ...elem,
    isAdded: false
  }));
  const [prodData, setProdData] = useState(
    JSON.parse(localStorage.getItem("prodData")) || prodUpd
  );
  //Showing all the brands
  const showAll = () => setProdData(prodUpd);
  //Filtering brands logic
  const handleClick = (id) => {
    showAll();
    setProdData((prevProdData) =>
      prevProdData.filter((elem) => elem.brand === id)
    );
  };
  //Adding to cart logic
  useEffect(() => {
    localStorage.setItem(
      "prodData",
      JSON.stringify(prodData.filter((elem) => elem.isAdded))
    );
  }, [prodData]);
  console.log(prodData.filter((elem) => elem.isAdded).length);
  const addToCart = (id) => {
    console.log("added", id);
    setProdData((prevAddedItems) =>
      prevAddedItems.map((elem) =>
        elem.id === id
          ? {
              ...elem,
              isAdded: !elem.isAdded
            }
          : elem
      )
    );
  };
  //Creating items by modifying state
  const itemEls = prodData.map((item) => (
    <div className="item" key={item.id}>
      <div className="img">
        <img src={pic1} alt="/" />
      </div>
      <div className="item-info">
        <p className="item-title">{item.title}</p>
        <p className="item-brand">Brand {item.brand}</p>
        <p className="item-price">
          <span className="item-currency">{item.regular_price.currency}</span>
          {item.regular_price.value.toFixed(2)}
          <button
            onClick={() => addToCart(item.id)}
            className={!item.isAdded ? "add-btn" : "add-btn added"}
          >
            {!item.isAdded ? <BsCart /> : <BsCartCheck />}
          </button>
        </p>
      </div>
    </div>
  ));
  //Creating brand elements by modifying state
  const brandEls = brands.map((brand) => (
    <li key={brand.id} onClick={() => handleClick(brand.id)} className="brand">
      {brand.title}
    </li>
  ));
  return (
    <div className="hero">
      <div className="container">
        {prodData.filter((elem) => elem.isAdded).length > 0 && (
          <span className="cart-qwt">
            {prodData.filter((elem) => elem.isAdded).length}
          </span>
        )}
        <div className="brands">
          <p onClick={showAll} className="brands-par">
            All brands
          </p>
          <ul className="brands-list">{brandEls}</ul>
        </div>
        <div className="catalog">
          <div className="item-cont">{itemEls}</div>
        </div>
      </div>
    </div>
  );
}
