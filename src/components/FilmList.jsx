import React, { useState, useEffect } from 'react'
import { getAllFilms } from '../services/filmService.js';
import { Link } from 'react-router-dom';
import Loader from './Loader.jsx';
import styles from '../css_modules/FilmList.module.css';

function FilmList() {

  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getFilms = async () => {
      let dataFilms = await getAllFilms();
      setFilms(dataFilms.results);
      setIsLoading(false);
    }
    setTimeout(() => {
      getFilms();
    }, 500);
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      {
        !isLoading && <div className="container mt-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            {films.map((film, index) => (
              <Link key={index} to={`/films/${++index}`} className={styles.linkunstyled}>
                <div className="col mb-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{film.title}</h5>
                      <p className="card-text">{film.opening_crawl}</p>
                      <p className='card-text'><strong>Director: </strong>{film.director}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      }
    </>

  )
}

export default FilmList