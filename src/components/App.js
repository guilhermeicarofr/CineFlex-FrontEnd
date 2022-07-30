import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TopBar from './TopBar'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          {/* <Route path='/' element={<Movies />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}