import Card from './Card';
import styles from './Cards.module.css'
import { useSelector } from 'react-redux';


function Cards() {

   const characters = useSelector((State)=> State.characters)
      
   return <div className={styles.cards}>
            {characters.map(characters => {
                        return <Card 
                                 key={characters.id} 
                                 id={characters.id}
                                 name={characters.name} 
                                 species={characters.species}
                                 gender={characters.gender}
                                 image={characters.image}
                                 />
                        })}
            </div>;
}

export default Cards;