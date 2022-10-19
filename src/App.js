import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import NavBar from "./component/NavBar";
import { useEffect, useState } from "react";

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {}, [auth]);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login setAuth={setAuth} />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
