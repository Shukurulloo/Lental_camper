import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CartComp from './components/pages/Cart';
import CampingPlaceComp from './components/pages/CampingPlace';
import CarInfo from './components/pages/Info';
import MainPage from './components/pages/MainPage';
import WrapMotor from './components/motorPage/MotorCompIcon';
import TuningComponents from './components/pages/TuningComp';
import UsedComponents from './components/pages/UsedComp';
import CampinPlaceMap from './components/pages/CampinPlace.map';
import SignInPage from './components/pages/SignInPage';
import RegistratePage from './components/pages/RegistratePage';
import PopupComp from './components/popup/popup';
import Motorpage from './components/motorPage/MotorPage';
import Caravanpage from './components/CaravanPage/CaravanPage';
import KakaoMap from './components/pages/kakaoMap';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <Routes>
      <Route path="/map" element={ <KakaoMap/>} />


      <Route path="/caravanpage" element={ <Caravanpage/>} />
      <Route path="/popup1" element={ <PopupComp/>} />
      <Route path="/motorpage" element={ < Motorpage/>} />
      <Route path="/registrate" element={<RegistratePage/>} />
      <Route path="/signin" element={<SignInPage/>} />
      <Route path="/app" element={<  WrapMotor/>} />
      <Route path="/mainpage" element={< MainPage/>} />
      <Route path="/tuningcomponents" element={<TuningComponents/>} />
      <Route path="/usedcomponents" element={<UsedComponents/>} />
      <Route path="/carinfo/:id" element={<CarInfo/>} />
      <Route path="/cart" element={<CartComp/>} />
      <Route path="/campingplaces" element={<CampingPlaceComp/>} />
      <Route path="/campinplacemap" element={<CampinPlaceMap/>} />
      </Routes>
    </BrowserRouter>
    
  
);


