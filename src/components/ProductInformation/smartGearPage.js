import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import heart from '../../assets/images/heart.png';
import '../../assets/scss/productPage.css';

const SmartGearProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const categoryList = products.filter((value) => value.category === "jewelery");
  const renderList = categoryList.map((product) => {
    const { id, title, image, price } = product;
    return (
      <>
        <div className="col-md-4 col-xs-6" key={id}>
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div className="product__card">
                <div className="product__image">
                  <img src={image} alt={title} />
                </div>
                <h4 className="product__title">{title}</h4>
                <div className="product__price">${price}</div>
                <Link className="hello" to="#"><img src={heart} alt="heart" /></Link>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  });
  return <>{renderList}</>;
};

export default SmartGearProductPage;
