import SearchBar from "./SearchBar";
import styles from './Nav.module.css';
import { Link } from "react-router-dom";
import ROUTES from '../helpers/routes.helper';

function Nav() {
    return (
        
        <div className={styles.navegacion}>
            <div className={styles.linksContainer}>
            <Link to={ROUTES.HOME}>
                <span className={styles.links}>Home</span>
            </Link>
            <Link to={ROUTES.FAV}>
                <span className={styles.links}>Favoritos</span>
            </Link>
            </div>
            <SearchBar />
        </div>
    )
  
}

export default Nav
