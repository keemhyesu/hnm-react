import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import Login from "./page/Login";
import NavBar from "./component/NavBar";
import { useEffect, useState } from "react";
import PrivateRoute from "./Route/PrivateRoute";

function App() {
  const [auth, setAuth] = useState(false);
  useEffect(() => {}, [auth]);
  return (
    <div>
      <NavBar auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login setAuth={setAuth} />}></Route>
        <Route
          path="/product/:id"
          element={<PrivateRoute auth={auth} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
