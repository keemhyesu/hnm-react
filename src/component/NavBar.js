import React from "react";
import "../component/NavBar.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
const NavBar = () => {
  const menuList = [
    "STUDIO COLLECTION",
    "WOMAN",
    "MAN",
    "KIDS",
    "BEAUTY",
    "ZARA ORIGINS",
  ];
  return (
    <>
      <div className="topArea">
        <img
          width={400}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1000px-Zara_Logo.svg.png"
          alt=""
        />
      </div>
      <div className="linkArea">
        <div className="search">
          <input type="text" />
          <AiOutlineSearch size={20} />
        </div>
        <button>
          <BsPerson size={20} /> 로그인
        </button>
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
