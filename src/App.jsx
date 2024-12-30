/*import App from './App.jsx'*/
import './App.css';
import About from './about.jsx'
import Home from './Home.jsx'
import Contact from './Contact.jsx';
import Abc from '../Abc.jsx';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'

function App() {
   return(
    <>
    
    <Router>
    <header>
  <nav className="navbar">
    <img
      src="https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg"
      alt="Abstract wallpaper"
      className="logo"
    />
    <ul className="nav-links">
      <li><Link to="/">Paul</Link></li>
      <li><Link to="/Home">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
    </ul>
  </nav>
</header>

      <main>
      <Routes>
        <Route path="/" element={<Abc/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
     </main>
    </Router>
    <footer>
      <h3>© 2024 Paul. <br/><br/>Thank you for visiting our website and being a part of our community.<br/>
       Wishing you a fantastic experience as you navigate through our platform.<br/><br/> Have a wonderful day!</h3>
      </footer>    
    </>
   )
  
}
export default App;