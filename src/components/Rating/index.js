import React, { useState } from "react";
import Rate from "../Rate/index.js";


const Rating = () => {
  const [rating, setRating] = useState(0);
  const [rating2, setRating2] = useState(0);
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2>Rate me</h2>
          <p>Rating component</p>
          <Rate rating={rating} onRating={(rate) => setRating(rate)} />
          <p>Rating - {rating}</p>
          <Rate rating={rating2} onRating={(rate) => setRating2(rate)} />
          <p>Rating - {rating2}</p>
        </div>
      </div>
    </>
  );
};
//color={{filled: "rgb(136 87 25)", unfilled: "rgb(214 184 147)"}}
//count={10}
export default Rating;