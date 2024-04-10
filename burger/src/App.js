// import './App.css';
import './styles/Navbar.css'
import { Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Menu } from './components/Menu';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  
  return <div className="App">
    <Navbar/>
    <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/menu' exact element={<Menu/>}/>
    </Routes>
    <Footer/>
  </div>



}

export default App;
