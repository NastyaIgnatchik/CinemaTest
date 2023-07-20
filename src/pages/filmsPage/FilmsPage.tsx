import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "../filmsPage/filmsPage.module.scss";
import Marks from "../../components/marks/Marks";
import FilmNumberDescription from "../../components/filmNumberDescription/FilmNumberDescription";
import FilmDescription from "../../components/filmDescription/FilmDescription";
import FilmBanner from "../../components/filmBanner/FilmBanner";
import FilmInfo from "../../components/filmInfo/FilmInfo";
import FilmGenres from "../../components/filmGenres/FilmGenres";
import FilmCards from "../../components/filmCards/FilmCards";

export interface IFilm {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: any;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any;
  production_countries: any;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: any;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
 export interface IProps{
  film: IFilm
}

const API_KEY = "fd7175d2bb2da94ca9f0fa23393beaaf";

const FilmsPage = () => {
  useEffect(() => {
    getFilms();
  }, []);

  const [fetchedFilms, setFetchedFilms] = useState<IFilm[]>([]);
  const [film, setFilm] = useState<IFilm>();

  useEffect(() => {
    if (fetchedFilms.length != 0) {
      const index = Math.floor(Math.random() * 20);
      const id = fetchedFilms[index]?.id;
      getFilmById(id);
    }
  }, [fetchedFilms]);

  async function getFilmById(id: number) {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
      )
      .then((res) => {
        setFilm(res?.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  async function getFilms() {
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((resp) => {
        setFetchedFilms(resp.data?.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className={style.container}>
      <div className={style.filmInfo}>
        <FilmBanner film={film} />

        <FilmInfo film={film} />

        <h1 className={style.title}>{film?.original_title}</h1>

        <FilmGenres film={film} />

        <Marks />
        <div className={style.buyTicketButtonContainer}>
          <button className={style.buyTicketButton}>
            Купить билет (от 6 рублей)
          </button>
        </div>
        <FilmDescription film={film} />

        <FilmNumberDescription film={film} />

        <div className={style.roles}>
          <h4 className={style.rolesTitle}>In role</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
        </div>
      </div>
      <div className={style.similarFilmTitle}></div>
      <div className={style.cardsContainer}>
        {fetchedFilms?.map((film: IFilm) => {
          return <FilmCards key={film.id} props={film} />;
        })}
      </div>
    </div>
  );
};

export default FilmsPage;
