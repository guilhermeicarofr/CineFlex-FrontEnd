import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import TopBar from './TopBar';
import Catalog from './Catalog';
import MovieSessions from './MovieSessions';
import Session from './Session';
import SuccessScreen from './SuccessScreen';

export default function App() {

  const [returnbtn, setReturnbtn] = useState(false);

  const [reservation, setReservation] = useState({});
  console.log(reservation);

  return (
    <>
      <BrowserRouter>
        <TopBar returnbtn={returnbtn} />
        <Routes>
          <Route path='/' element={<Catalog setReturnbtn={setReturnbtn} />} />
          <Route path='/sessoes/:movieId' element={<MovieSessions setReturnbtn={setReturnbtn} />} />
          <Route path='/assentos/:sessionId' element={<Session setReservation={setReservation} reservation={reservation} setReturnbtn={setReturnbtn} />} />
          <Route path='/sucesso' element={<SuccessScreen reservation={reservation} setReturnbtn={setReturnbtn} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}