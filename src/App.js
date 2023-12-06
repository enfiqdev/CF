import logo from './logo.svg';
import './App.css';
import Contact from '../src/components/Contact'
import Footer from './components/Footer';
import Navbar from "./components/Navbar";

import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
