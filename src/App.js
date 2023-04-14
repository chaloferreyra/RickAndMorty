import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from'react';
import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import ROUTES from './helpers/routes.helper'
import About from './components/About'
import Detail from './components/Detail';
import Form from './components/Form';

function App () {

  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'gonzalo@gmail.com';
  const password = 'p4ssw0rd';

  function onSearch(characterId) {
    console.log(Number(characterId));
    const encontrado = characters.find(personaje => personaje.id === Number(characterId));
    
    if (!encontrado) {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
       .then((response) => response.json())
       .then((data) => {
        if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
      } else {
        window.alert('El ID ya se encuentra seleccionado');
      }
  }

  const onClose = id => {
      setCharacters(characters.filter(character => character.id !== id));
  }

  const location = useLocation();
    
  if(location.pathname === "/"){
        console.log(location.pathname)
  }

  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
  }
  
  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  return (
    <div className='App'>
            
      {
        
        location.pathname !== "/" ?  <Nav onSearch={onSearch} /> :  console.log(location.pathname)
          
      }

      
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Form login={login} />} />
          <Route path={ROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={`${ROUTES.DETAIL}:detailId`} element={<Detail  />} />
        </Routes>
      
      
      
    </div>
  )
}

export default App
