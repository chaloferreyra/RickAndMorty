import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from'react';
import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import ROUTES from './helpers/routes.helper'
import Favorites from './components/Favorites'
import Detail from './components/Detail';
import Form from './components/Form';
import axios from './components/axios';



function App () {

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  // const username = 'gonzalo@gmail.com';
  // const password = 'p4ssw0rd';

  const location = useLocation();
    
  if(location.pathname === "/"){
        console.log(location.pathname)
  }

  // function login(userData) {
  //   if (userData.password === password && userData.username === username) {
  //      setAccess(true);
  //      navigate('/home');
  //   }
  // }
  
  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
 }

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  return (
    <div className='App'>
            
      {
        
        location.pathname !== "/" ?  <Nav /> :  console.log(location.pathname)
      }

      <Routes>
         <Route path={ROUTES.LOGIN} element={<Form login={login} />} />
         <Route path={ROUTES.HOME} element={<Cards />} />
         <Route path={ROUTES.FAV} element={<Favorites />} />
         <Route path={`${ROUTES.DETAIL}:detailId`} element={<Detail  />} />
       </Routes>
     
    </div>
  )
}

export default App
