
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="app min-h-screen ">
      
    <Nav/>
    
    <Home/>
  
    <Footer/>
    </div>
  );
}

export default App;
