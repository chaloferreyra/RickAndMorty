import ROUTES from '..//helpers/routes.helper';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCharacter, myFavorite, removeFavorite } from '../redux/action'

export default function Card(props) {

   const [isFav, setIsFav] = useState(false);
   const myFavorites = useSelector((State)=> State.myFavorites)

   const dispatch = useDispatch();

   const handleOnClick = () => dispatch(deleteCharacter(props.id));
   
   const handleFavorite = () => {
      
      if(isFav){
         console.log("Sacando de Favoritos a:",props.id);
         setIsFav(false);
         dispatch(removeFavorite(props.id));
      } else {
         
         dispatch(myFavorite(props));
         setIsFav(true);
      }

   };

   useEffect(() => {
      console.log("Mis favoritos son: ", myFavorites)
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            return setIsFav(true);
         }
      });
   }, [myFavorites, props.id]);
   
   return (
      <div className={styles.card}>
         <div className={styles.encabezado}>
         {
            isFav ? ( <button className={styles.isFav} onClick={handleFavorite}>❤️</button>) : (<button className={styles.noFav} onClick={handleFavorite}>🤍</button>)
         }
            <span className={styles.oculto}>#{props.id}</span>
            <button className={styles.close} onClick={handleOnClick}>X</button>
         </div>
         <img  src={props.image} alt="" />
         <Link to={ROUTES.DETAIL+props.id} >
             <h4 className="card-title">{props.name}</h4>
         </Link>
         <div className={styles.grilla}>
         <p className={styles.caracteristicas}>{props.species}</p>
         <p className={styles.caracteristicas}>{props.gender}</p>
         </div>
      </div>
   );
}