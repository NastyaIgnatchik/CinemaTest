import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

import {IProps} from "../../pages/filmsPage/FilmsPage";
import style from "../filmBanner/filmBanner.module.scss";

const FilmBanner = ({ film }: IProps) => {
  return (
    <div className={style.banner}>
      <div className={style.bannerImgContainer}>
        <div className={style.playButtonContainer}>
          <BsFillPlayFill className={style.playButton} />
        </div>

        <img
          className={style.bannerImg}
          src={
           `https://image.tmdb.org/t/p/original${
                  film?.backdrop_path || film?.poster_path
                }`
          }
        />
      </div>
    </div>
  );
};

export default FilmBanner;
