import { useState } from 'react';
import {validate} from './validation'
import styles  from './Form.module.css'

const Form = ({login}) => {

    const [userData, setUserData] = useState({username: '', password:''});
    const [errors, setErrors] = useState({username: '', password:'', credential:''});


    const handleChange = (event) => {
                
        const property = event.target.name;
        const value = event.target.value;
        setErrors(
          validate({
            ...userData,
            [event.target.name]: event.target.value
          })
        )
        
        setUserData({...userData, [property]: value});
    }

    const handlerSubmit = (event) => {
      event.preventDefault();
      if (Object.values(errors).length === 0 ){
        if(login(userData)){
          setUserData({
            username: '', 
            password:''
          });
          setErrors({
              username: '', 
              password:''
          });
        }else{
          setErrors({credential: 'Username o password erróneo'})
        }
        
      } else {
        window.alert('Debe llenar todos los campos')
        return;
      }
      
    }
    

  return (
    <div className={styles.container}>

        <form className={styles.formUser} onSubmit={handlerSubmit}>
            <div>
                <label htmlFor="username">Username: </label>
                <input 
                  type="text" 
                  name='username' 
                  placeholder='Escribe tu username...'
                  value={userData.username}
                  onChange={handleChange}
                />
                <p className={styles.danger}>{errors.username}</p>
            </div>
            <div>
                <label htmlFor="message">password:</label>
                <input type="text"
                  name='password' 
                  placeholder='Escribe tu password...' 
                  value={userData.password}
                  onChange={handleChange}
                />
                <p className={styles.danger}>{errors.password}</p>
            </div>
            <p className={styles.danger}>{errors.credential}</p>
            <button type='submit'>Enviar</button>
        </form>
        
    </div>
  )
}

export default Form