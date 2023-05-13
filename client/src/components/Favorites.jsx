import { useSelector } from "react-redux"
import CardFav from './CardFav';
import styles  from "./Favorites.module.css";

const Favorites = () => {

    const myFavorites = useSelector((State)=> State.myFavorites)
    return (
        <>
            <h1>Mis Favoritos</h1>
            <div className={styles.cards}>
            {
                myFavorites.map( fav => {
                    return <CardFav
                        key={fav.id}
                        name={fav.name} 
                        image={fav.image}
                    />
                })
            }
            </div>
        </>
    )
}

export default Favorites