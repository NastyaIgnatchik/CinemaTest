import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Outlet } from "react-router-dom";

import images from "../assets/images/cinemas.png";
import Navigation from "../components/navigation/Navigation";
import style from "./layout.module.scss";

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
