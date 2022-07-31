import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TopBar from './TopBar';
import Movies from './Movies';
import MovieSessions from './MovieSessions';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/filme/:movieId' element={<MovieSessions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}