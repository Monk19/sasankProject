import React from "react";
import SampleMovie from "../../Component/SampleMovie.";
import { movies } from "../../Assets/data";
function DocumentaryLayout() {
  return (
    <div>
      <h2 className="context-name" style={{ textAlign: "left", color: "blue" }}>
        Trending
      </h2>
      <div className="trending-deck">
        {movies.map((ele, index) => {
          return (
            <SampleMovie
              imgName={ele.uri}
              mveName={ele.name}
              mvePrice={ele.price}
              mveQuantity={ele.totalCopies}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DocumentaryLayout;
