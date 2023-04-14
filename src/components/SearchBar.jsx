import { useState } from 'react';
import styles from './SearchBar.module.css';


export default function SearchBar(props) {

   const [inputValue, setInputValue] = useState({value: ''});

   const handleInputChange = ({target}) => {
      
      setInputValue({value: target.value});
      
   }

   const onSubmitValue = (event) => {
      event.preventDefault();
      props.onSearch(inputValue.value);
      setInputValue({value: ''});
   }

   const onSubmitRandom = () => {
           
      const valorRandom = Math.floor(Math.random() * (825 - 1 )+1);
      
      
      props.onSearch(valorRandom);
   }

   return (
      <div className={styles.navegacion}>
          
            <input
                  className={styles.ingresar}
                  type="text"
                  placeholder='Busca por ID de personaje'
                  value={inputValue.value}
                  //onChange={e => setInputValue(e.target.value)}
                  onChange={handleInputChange}
            />

            <button onClick={onSubmitValue}>Agregar</button> 
            <button onClick={onSubmitRandom}>Random</button>
         
      </div>
      
   );


}
