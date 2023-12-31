import "../../pages/filmsPage/filmsPage.module.scss";

import React from "react";

import star from "../../assets/images/star.png";
import {IProps} from "../../pages/filmsPage/FilmsPage";
import style from "../filmGenres/filmGenres.module.scss";

interface IGenre{
    name:string;
}

const FilmGenres = ({ film }: IProps) => {
  return (
    <div className={style.textInfoGenres}>
      <p>
        <img src={star} className={style.iconStar} />
        {film?.vote_average}
      </p>
      {film?.genres.map((genre:IGenre ,index:number) => {
        return <p key={index}>{genre.name}</p>;
      })}
    </div>
  );
};

export default FilmGenres;
