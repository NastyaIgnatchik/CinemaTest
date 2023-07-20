import React from "react";
import style from "../filmNumberDescription/filmNumberDescription.module.scss";
import "../../pages/filmsPage/filmsPage.module.scss";
import { IProps} from "../../pages/filmsPage/FilmsPage";

const FilmNumberDescription = ({ film }: IProps) => {
  return (
    <div className={style.numberDescription}>
      <div>
        <p>Premiere</p>
        <article>{film?.release_date}</article>{" "}
      </div>
      <div>
        <p>Age</p>
        <article>{film?.adult == false ? "12+" : "18+"}</article>
      </div>
      <div>
        <p>Country</p>
        <article>{film?.production_countries[0]?.name}</article>
      </div>
      <div>
        <p>Director</p>
        <article>David Litch</article>
      </div>
    </div>
  );
};

export default FilmNumberDescription;
