import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
