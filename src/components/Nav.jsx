import SearchBar from "./SearchBar";
import styles from './Nav.module.css';
import { Link } from "react-router-dom";
import ROUTES from '../helpers/routes.helper';

function Nav({onSearch}) {
    return (
        
        <div className={styles.navegacion}>
            
            <Link to={ROUTES.HOME}>
                <span>Home</span>
            </Link>
            <Link to={ROUTES.ABOUT}>
                <span>About</span>
            </Link>
            
            <SearchBar onSearch={onSearch} />
        </div>
    )
  
}

export default Nav
