
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Pages'
import Projects from './Components/Pages/projects';
import Contact from './Components/Pages/contact';
import logo from './Components/Images/logo.png'
import { Link } from 'react-router-dom';
import NavBar from './Components/NavBar';
import SideBar from './Components/Sidebar';
import Footer from './Components/Footer';

function App() {

  return (
    <div>
      
        <div className="logo">
          <Link to={'/'}> 
              <img src={logo} alt="logo" height={200} />
          </Link>
        </div>

      <NavBar/>
      <SideBar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/projects' element = {<Projects/>}/>
        <Route path = '/contacts' element = {<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
