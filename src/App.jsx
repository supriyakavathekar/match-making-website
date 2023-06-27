
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom'
import data from './data.json'
import Profile from './components/Profile';
import Register from './components/Register';
import Match from './components/Match';
import Detail from './components/Detail';
import Contact from './components/Contact';
import axios from 'axios';


function App() {


// access all users
// selecct user and check
const [users, setUsers] = useState()
  const [user, setuser] = useState()

  useEffect(() => {
    axios("https://matchmaking-4wh6.onrender.com/users").then(i => setUsers(i.data)).catch(i => console.log(i))

  }, [])


  return (
    
    <div className="app min-h-screen ">
     <Nav user= {user} users={users} setuser={setuser} data={data}/>
     <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/profile' element={<Profile user={user} data={data}/>}/>
    <Route path='/register' element={<Register/>} />
    <Route path='/match' element={<Match/>} />
    <Route path='/detail' element={<Detail user={user} setuser={setuser} data={data}/>}/>
    <Route path='/contact' element={<Contact/>} />
    
  
    </Routes>
    <Footer/>
    
    </div>
   
  );
}

export default App;
