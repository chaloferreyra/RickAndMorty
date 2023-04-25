
import styles from './CardFav.module.css';

export default function Card(props) {
  
   return (
      <div className={styles.cardFav}>
         <h2 className='title'>{props.name}</h2>
         <img  src={props.image} alt="" />
      </div>
   );
}