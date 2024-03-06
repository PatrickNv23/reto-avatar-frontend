import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFilmById } from '../services/filmService';
import Loader from './Loader';
import styles from '../css_modules/FilmDetail.module.css'

function FilmDetail() {

  const { id } = useParams();

  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const getDataFilmById = async () => {
      let dataFilm = await getFilmById(id)
      setFilm(dataFilm);
      setIsLoading(false);
    }
    getDataFilmById()
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      {
        !isLoading &&

        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://historia.nationalgeographic.com.es/medio/2023/06/20/the-steamship-titanic-rmg-bhc3667_00000000_9b5bd117_230620084252_1200x630.jpg"
                className="img-fluid rounded"
                alt="title"
              />
            </div>
            <div className="col-lg-6">
              <h2>{film.title}</h2>
              <p className="card-text">{film.opening_crawl}</p>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item"><strong>Director:</strong> {film.director}</li>
                <li className="list-group-item"><strong>Producción:</strong> {film.producer}</li>
                <li className="list-group-item"><strong>Fecha de lanzamiento:</strong> {film.release_date}</li>
              </ul>
            </div>
            <h3 className='text-center'>Personajes</h3>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {film.characters.map((character, index) => (
                <div key={index} className={`col ${styles.characterSelection}`}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{character.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </>

  )
}

export default FilmDetail