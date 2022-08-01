import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import TopBar from './TopBar';
import Movies from './Movies';
import MovieSessions from './MovieSessions';
import Session from './Session';

export default function App() {

  const [reservation, setReservation] = useState({});
  console.log(reservation);

  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/sessoes/:movieId' element={<MovieSessions />} />
          <Route path='/assentos/:sessionId' element={<Session setReservation={setReservation}/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}