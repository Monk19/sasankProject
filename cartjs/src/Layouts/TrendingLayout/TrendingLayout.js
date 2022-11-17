import React, { useEffect } from "react";
import SampleMovie from "../../Component/SampleMovie.";
import "./TrendingLayout.css";
import { movies } from "../../Assets/data";
import { useGetAllPostsQuery } from "../../features/api/tasksApi";
function TrendingLayout() {
  const { data, isLoading, isSuccess, isError, error, refetch } =
    useGetAllPostsQuery();
  useEffect(() => {
    console.log(data);
  });
  return (
    <div>
      <h2 className="context-name" style={{ textAlign: "left", color: "blue" }}>
        Trending
      </h2>
      <div className="trending-deck">
        {isSuccess &&
          data.listMve.movieslist.map((ele, index) => {
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

export default TrendingLayout;
