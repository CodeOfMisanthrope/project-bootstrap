import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "~assets/style/main.css";
// import MainPage from "~pages/Main";
// import ItemPage from "~pages/Item";

const MainPage = lazy(() => import("~pages/Main"));
const ItemPage = lazy(() => import("~pages/Item"));

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/item" element={<ItemPage />} />
         </Routes>
         {/*Hello, Monorepo!*/}
      </div>
   );
}

export default App;
