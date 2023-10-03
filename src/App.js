import { BrowserRouter as Route, Routes, Router } from 'react-router-dom';
import './App.css';
import Footer from './component/common/Footer';
import Navbar from './component/common/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
  
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/post' element={<Post/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </Router> */}
      <Home/>
    </div>
  );
}

export default App;
