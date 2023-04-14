import React, { useState, useEffect } from 'react'
import styles  from './Detail.module.css'
import { useParams, Link } from 'react-router-dom';
import ROUTES from '../helpers/routes.helper';


function Detail() {

    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

        console.log(character);


    return (
        <div className={styles.detalle}>
            {character ? (
                <div>
                    <label>Nombre: </label>
                    <h1>{character.name}</h1>
                    <img src={character.image} alt="Imagene personaje..." />
                    <section>
                        <label>Estatus: </label>
                        <h3>{character.status}</h3>
                        <label>Especie: </label>
                        <h3>{character.species}</h3>
                        <label>Genero: </label>
                        <h3>{character.gender}</h3>
                        <label>Origen: </label>
                        <h3>{character.origin?.name}</h3>
                        <div>
                            <Link to={ROUTES.HOME} >
                                <h4 >Volver</h4>
                            </Link>
                        </div>
                        
                    </section>
                </div>
            ) : ( <h2>Loading...</h2>)};
            
        </div>
    )
}

export default Detail