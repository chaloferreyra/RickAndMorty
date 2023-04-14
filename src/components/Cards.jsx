import Card from './Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters, onClose } = props;

   return <div >
            <div className={styles.cards}>
            {characters.map(characters => {
                        return <Card 
                                 key={characters.id} 
                                 id={characters.id}
                                 name={characters.name} 
                                 species={characters.species}
                                 gender={characters.gender}
                                 image={characters.image}
                                 onClose={onClose}
                                 />
                        })}
            </div>
         </div>;
}
