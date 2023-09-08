import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/footer';
import Login from './pages/Login';
import Explore from './pages/Explore';
import Sites from './pages/Sites';
import Food from './pages/Food';
import Event from './pages/Event';
import SSS from './pages/SSS';

const App = () => {
  return (
   <>
   <BrowserRouter>
    <Nav/>
    <Routes>
        <Route index element={<Home/>} />
        <Route path="Explore" element={<Explore/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Sites" element={<Sites/>}/>
        <Route path="Food" element={<Food/>}/>
        <Route path="Event" element={<Event/>}/>
        <Route path="SSS" element={<SSS/>}/>
        <Route path="Sites" element={<Sites/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
   </>
  );
};

export default App;