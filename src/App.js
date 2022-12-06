// import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Favourites from './components/Favourites';
import Notfound from './components/Notfound';

 
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/favourites" element={<Favourites/>}></Route>
        <Route path="*" element={<Notfound/>}/> 
      </Routes>
    </BrowserRouter>
    </div>
     
  );
}
 
export default App;
