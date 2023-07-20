import React from 'react';

import { IProps} from "../../pages/filmsPage/FilmsPage";
import {ICountriesGenres} from '../../pages/filmsPage/FilmsPage'
import style from "../filmInfo/filmInfo.module.scss";

const FilmInfo = ({film}:IProps) => {
    return (
        <div className={style.textInfo}>
            {film?.release_date.split('-')[0]
            },{film?.production_countries.map((element:ICountriesGenres)=>{
            return element.name+','
        })
        }{film?.runtime}min</div>
    );
};

export default FilmInfo;