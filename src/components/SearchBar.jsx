import { useState } from 'react';
import styles from './SearchBar.module.css';
import { getCharacter } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';



export default function SearchBar() {

   const characters = useSelector((State)=> State.characters)
   const [inputValue, setInputValue] = useState({value: ''});
   const dispatch = useDispatch();

   const handleInputChange = ({target}) => {
      setInputValue({value: target.value});
   }

   const onSubmitValue = (event) => {
      event.preventDefault();
      
      if (!inputValue.value) return;

      const encontrado = characters.find(personaje => personaje.id === Number(inputValue.value));
    
      if (!encontrado) {
         dispatch(getCharacter(inputValue.value))
         
         setInputValue({value: ''});
      } else {
         window.alert('El ID ya se encuentra seleccionado');
       }
   }

   const onSubmitRandom = () => {
           
      const valorRandom = Math.floor(Math.random() * (825 - 1 )+1);
      dispatch(getCharacter(valorRandom))
      
   }

   return (
      <div className={styles.navegacion}>
          
            <input
                  className={styles.ingresar}
                  type="text"
                  placeholder='Busca por ID de personaje'
                  value={inputValue.value}
                  onChange={handleInputChange}
            />

            <button className={styles.botonSearch} onClick={onSubmitValue}>Agregar</button> 
            <button className={styles.botonRandom} onClick={onSubmitRandom}>Random</button>
         
      </div>
      
   );


}
