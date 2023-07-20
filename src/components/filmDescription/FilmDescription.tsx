import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";

import { IProps} from "../../pages/filmsPage/FilmsPage";
import style from "../filmDescription/filmDescription.module.scss";

const FilmDescription = ({ film }: IProps) => {
  const [isTextHidden, setIsTextHidden] = useState<boolean>(true);
  return (
    <div className={style.filmDescription}>
      <h5>Description</h5>
      <div className={style.thumbnails}>
        <img className={style.filmDescriptionImg}
          src={`https://image.tmdb.org/t/p/original${
            film?.backdrop_path || film?.poster_path
          }`}
        />
        <img className={style.filmDescriptionImg}
          src={`https://image.tmdb.org/t/p/original${
            film?.backdrop_path || film?.poster_path
          }`}
        />
        <img className={style.filmDescriptionImg}
          src={`https://image.tmdb.org/t/p/original${
            film?.backdrop_path || film?.poster_path
          }`}
        />
      </div>
      <p className={isTextHidden ? `${style.filmDescriptionTextHidden}` : ""}>
        {film?.overview}
      </p>
      <p
        onClick={() => setIsTextHidden(!isTextHidden)}
        className={
          film?.overview.split(" ").length > 20
            ? `${style.seeMoreButtonActive}`
            : `${style.seeMoreButton}`
        }
      >
        развернуть <GoTriangleDown />{" "}
      </p>
    </div>
  );
};

export default FilmDescription;
