import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import SampleMovie from "./Component/SampleMovie.";
import TrendingLayout from "./Layouts/TrendingLayout/TrendingLayout";
import { Routes, Route, Link } from "react-router-dom";
import DocumentaryLayout from "./Layouts/TopImdbLayout/DocumentaryLayout";
import MuiOneComponent from "./Component/MuiComponents/MuiOneComponent";
import CartOverLayComponent from "./Component/CartOverLay/CartOverLayComponent";
import LoginPage from "./Component/LoginPageComponent/LoginPage";
import HomeLayout from "./Layouts/HomeLayout/HomeLayout";
function App() {
  const [isLogged, setIsLogged] = useState(false);
  const values = useSelector((state) => state.counter);
  const toggleLogin = () => {
    
  }
  console.log(values);
  useEffect(() => {
    // fetch(
    //   "https://api.themoviedb.org/3/trending/all/day?api_key=273dc17f1e0efcc126243342cba994cd"
    // )
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    // return () => {};
  });

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<LoginPage />} />
            <Route path="/trending" element={<TrendingLayout />} />
            <Route path="/tv-shows" element={<DocumentaryLayout />} />
            <Route
              path="/documentary"
              element={<MuiOneComponent data={[{ a: 1, b: 2, c: 3 }]} />}
            />
            <Route path="/cart" element={""} />
          </Route>
        </Routes>
      </main>
      <footer>all rights Sasank@420</footer>
    </div>
  );
}

export default App;
