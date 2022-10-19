import React, { useEffect, useState } from "react";
import "../component/NavBar.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NavBar = ({ auth, setAuth }) => {
  const [clear, setClear] = useState("");

  const menuList = [
    "STUDIO COLLECTION",
    "WOMAN",
    "MAN",
    "KIDS",
    "BEAUTY",
    "ZARA ORIGINS",
  ];
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToMain = () => {
    navigate("/");
  };

  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <>
      <div className="topArea">
        <img
          onClick={goToMain}
          width={400}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1000px-Zara_Logo.svg.png"
          alt=""
        />
      </div>
      <div className="linkArea">
        <div className="search">
          <input type="text" onKeyPress={(e) => search(e)} />
          <AiOutlineSearch size={20} />
        </div>
        {auth ? (
          <button onClick={() => setAuth(false)}>로그아웃</button>
        ) : (
          <button onClick={goToLogin}>로그인</button>
        )}
      </div>
      <div className="menuList">
        {menuList.map((item, i) => (
          <ul key={i}>
            <li>{item}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default NavBar;
