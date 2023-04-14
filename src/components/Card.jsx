import ROUTES from '..//helpers/routes.helper';
import { Link } from 'react-router-dom';
import styles from './Card.module.css'
import { useState } from 'react';
import {connect} from 'react-redux';

function Card(props) {
   const [isFav, setIsFav] = useState();

   const handleOnClick = () => props.onClose(props.id);
   
   return (
      <div className={styles.card}>
         <div className={styles.encabezado}>
            <span>#{props.id}</span>
            <button onClick={handleOnClick}>X</button>
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

const mapDispatchToProps = (state) => {


 

   return {
      myFavorites: state.myFavorites
   }




};

export default connect(mapDispatchToProps,null)(Card)