import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./page/Main";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
