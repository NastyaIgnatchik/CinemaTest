import React from "react";

import {IFilm} from "../../pages/filmsPage/FilmsPage";
import style from "../filmCards/filmCards.module.scss";

interface IProps{
    props: IFilm;
}
const FilmCards = ({ props }: IProps) => {
  return (
    <div className={style.cards}>
      <img
        className={style.cardsFilmImg}
        src={`https://image.tmdb.org/t/p/original${
          props?.backdrop_path || props?.poster_path
        }`}
      />
      <div>
        <h5> {props?.original_title}</h5>

        <div className={style.articleContainer}>
          <article>{props?.overview} </article>
        </div>
      </div>
    </div>
  );
};

export default FilmCards;
