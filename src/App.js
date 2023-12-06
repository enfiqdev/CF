import logo from './logo.svg';
import './App.css';
import Contact from '../src/components/Contact'
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
