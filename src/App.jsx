
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom'
import data from './data.json'
import Profile from './components/Profile';
import Register from './components/Register';
import Match from './components/Match';

function App() {



  const [user, setuser] = useState()


  return (
    
    <div className="app min-h-screen ">
     <Nav user= {user} setuser={setuser} data={data}/>
     <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/profile' element={<Profile user={user}/>}/>
    <Route path='/register' element={<Register/>} />
    <Route path='/match' element={<Match/>} />
    
  
    </Routes>
    <Footer/>
    
    </div>
   
  );
}

export default App;
