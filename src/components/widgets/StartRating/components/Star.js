import React, { useContext } from "react";

import { StarRatingContext } from '../StarRating';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../../redux/actions/productsActions";

function Star({ value }) {
  const {
    emptyColor,
    fillColor,
    height,
    hover,
    rating,
    setHover,
    setRating,
    width,
  } = useContext(StarRatingContext);
  const products = useSelector((state) => state.allProducts.products); 
  const dispatch = useDispatch();

  const setProductRating = () => {
    const updatedProducts = products.map((a) => {
      if(a.id === value.productId) {
        return {...a, rating: {rate: value.rating, count: a.rating.count}}
      }
      return a;
    });
    setRating(value);
    dispatch(setProducts(updatedProducts));
  }
  return (
    <div
      className="star"
      onClick={setProductRating}
      onMouseEnter={() => setHover(value)}
      onMouseLeave={() => setHover(null)}
    >
      <svg
        data-rating={value}
        fill={value <= (hover || rating) ? fillColor : emptyColor}
        height={height}
        viewBox="0 0 25 25"
        width={width}
      >
        <polygon
          strokeWidth="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
}

export default Star;
