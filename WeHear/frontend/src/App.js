import { Routes, BrowserRouter, Route } from "react-router-dom";
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/login'
import Footer from "./components/Footer/Footer";

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/register' element={<Register/>}/>
    <Route exact path='/login' element={<Login/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
