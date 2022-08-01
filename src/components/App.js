import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import TopBar from './TopBar';
import Movies from './Movies';
import MovieSessions from './MovieSessions';
import Session from './Session';
import SuccessScreen from './SuccessScreen';

export default function App() {

  const [reservation, setReservation] = useState({});
  console.log(reservation);

  const [return, setReturn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <TopBar return={return} />
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/sessoes/:movieId' element={<MovieSessions />} />
          <Route path='/assentos/:sessionId' element={<Session setReservation={setReservation} reservation={reservation} />} />
          <Route path='/sucesso' element={<SuccessScreen reservation={reservation}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}