import React, { useState } from "react";
import "../../App.css";
import "./HomeLayout.css";
import { Outlet, Link } from "react-router-dom";
import CartOverLayComponent from "../../Component/CartOverLay/CartOverLayComponent";
function HomeLayout() {
  const [disp, setDisp] = useState(true);

  const dispHandler = () => {
    console.log("Clicked", disp);
    setDisp(!disp);
  };

  return (
    <div>
      <header className="App-header">
        <h1>The Movie Bucket</h1>
        <nav>
          <Link to="/tv-shows">Tv-Series</Link>
          <Link to="/documentary">Documentary</Link>
          <Link to="/trending">trending</Link>
          <p
            onClick={() => {
              dispHandler();
            }}
          >
            Binge Bucket
          </p>
        </nav>
      </header>
      <CartOverLayComponent
        className="cart-component"
        disp={dispHandler}
        dispOn={disp}
      />
      <Outlet />
    </div>
  );
}

export default HomeLayout;
