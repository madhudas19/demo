import logo from './logo.svg';
import './App.css';
import Home from'./Pages/Home/index';
import About from './Pages/About/index';
import Login from './Pages/Login/index';
import Register from './Pages/Register/index';
import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router-dom";



function App() {
  return (
   <BrowserRouter>
  
   <Routes>
   <Route path="/"element={<Home/>}/>
   <Route path="about"element={<About/>}/>
   <Route path="login"element={<Login/>}/>
   <Route path="register"element={<Register/>}/>



   </Routes>
   
   
   
   
   </BrowserRouter>
  );
}

export default App;
