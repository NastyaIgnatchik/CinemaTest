import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import { AiOutlineSearch } from "react-icons/ai";
import style from "./layout.module.scss";
import images from "../assets/images/cinemas.png";

const Layout = () => {
  return (
    <div>
      <header>
        <img className={style.logo} src={images} />
        <Navigation />
        <AiOutlineSearch className={style.searchIcon} />
      </header>
      <main>
        <Outlet />
      </main>
      footer
    </div>
  );
};

export default Layout;
