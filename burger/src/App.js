import './App.css';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Menu } from './components/Menu';

function App() {
  
  return <div className="App">
    <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/menu' exact element={<Menu/>}/>
    </Routes>
  </div>



}

export default App;
