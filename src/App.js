import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/footer';
import Login from './pages/Login';
import Explore from './pages/Explore';
import Sites from './pages/Sites';

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
    </Routes>
    <Footer/>
   </BrowserRouter>
   </>
  );
};

export default App;