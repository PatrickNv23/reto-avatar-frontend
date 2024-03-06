import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header.jsx';
import FilmList from '../components/FilmList.jsx';
import FilmDetail from '../components/FilmDetail.jsx';
export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<FilmList />} />
          <Route path='/films' element={<FilmList />} />
          <Route path='/films/:id' element={<FilmDetail />} />
        </Routes>
      </main>
    </>
  )
}