import React, { useEffect, useState } from "react";
import "./sampleMovie.css";
import { useGetAllPostsQuery } from "../features/api/tasksApi";
import { useAddToCartMutation } from "../features/api/tasksApi";
export default function SampleMovie({
  imgName,
  mveName,
  mveQuantity,
  mvePrice,
}) {
  const [apiData, setApiData] = useState("");
  const [addToCart, { isLoading }] = useAddToCartMutation();
  const addToCartHandler = async (e, mveName) => {
    e.preventDefault();
    await addToCart({ mveName, imgName });
  };
  useEffect(() => {}, []);
  return (
    <article className="poster-display-card">
      <img src={imgName} alt="movie name"></img>

      <div className="movieInfo-part">
        {/* <span>How good is the move progress bar</span> */}
        <h3>{mveName}</h3>
        <p>{mvePrice}</p>
        <p>Quantity Available {mveQuantity}</p>
        <button
          className="add-to-cart"
          onClick={(e) => {
            addToCartHandler(e, mveName);
          }}
          disabled={mveQuantity === 0 ? true : false}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}

// <section className="sample-movie">
//   <img
//     src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg"
//     alt="wakanda movie forever"
//   ></img>
//   <div className="consensus details">
//     <div className="outer_ring"></div>
//   </div>
// </section>
