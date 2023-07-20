import React from 'react';
import style from "../filmInfo/filmInfo.module.scss";
import { IProps} from "../../pages/filmsPage/FilmsPage";

const FilmInfo = ({film}:IProps) => {
    console.log(film)
    return (
        <div className={style.textInfo}>
            {film?.release_date.split('-')[0]
            },{film?.production_countries.map((e:any)=>{
            return e.name+','
        })
        }{film?.runtime}min</div>
    );
};

export default FilmInfo;