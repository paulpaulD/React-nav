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
      <table>
        <tr>
          <td width="10%"><img src='https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg' alt='Wallpaper'></img></td>
          <td><Link to="/">Abc</Link></td>
          <td><Link to="/Home">Home</Link></td>
          <td><Link to="/about">About</Link></td> 
          <td><Link to="/Contact">Contact</Link></td> 
        </tr>
      </table>
      
      </header>
      <body>
      <Routes>
        <Route path="/" element={<Abc/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
     </body>
    </Router>
    <footer>
      <h2>&copy; 2024 this is footer page</h2>
      </footer>    
    </>
   )
  
}
export default App;