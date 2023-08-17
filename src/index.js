import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MotorComponents from './components/pages/MotorComp';
import CartComp from './components/pages/Cart';
import CampingPlaceComp from './components/pages/CampingPlace';
import CarInfo from './components/pages/Info';
import BasicAccordion from './components/pages/Accordion';
import UseReducers from './components/pages/UseReducer';
import MainPage from './components/pages/MainPage';
import CaruselApp from './components/assets/slides/CaruselApp';
import SimpleSlider from './components/assets/slides/CaruselApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <Routes>
      
      {/* <Route path="/app" element={< SimpleSlider/>} /> */}
      <Route path="/mainpage" element={< MainPage/>} />
      <Route path="/" element={<MotorComponents/>} />
      <Route path="/info/:id" element={<CarInfo/>} />
      <Route path="/cart" element={<CartComp/>} />
      <Route path="/campingplaces" element={<CampingPlaceComp/>} />
      </Routes>
    </BrowserRouter>
    
  
);


