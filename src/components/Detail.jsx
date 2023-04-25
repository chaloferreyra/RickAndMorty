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
        <>
          <div>
            {character ? (
                <div className={styles.container}>
                   
                  <div className={styles.titulo}>
                      <h1 className={styles.nombrePersonaje}>{character.name}</h1>
                      <span className={styles.labelnombre}>Nombre</span>
                  </div>

                  <div className={styles.detalle}>  
                      <section>
                          <span className={styles.label}>Estatus:</span>
                          <h3>{character.status}</h3>
                          <span className={styles.label}>Especie: </span>
                          <h3>{character.species}</h3>
                          <span className={styles.label}>Genero: </span>
                          <h3>{character.gender}</h3>
                          <span className={styles.label}>Origen: </span>
                          <h3>{character.origin?.name}</h3>
                          <div>
                              
                          </div>
                          
                      </section>
                      <section>
                          <img src={character.image} alt="Imagene personaje..." />
                      </section>
                  </div>
                </div>
            ) : ( <h2>Loading...</h2>)};
          </div>
          <div className={styles.botonVolver}>
            <Link to={ROUTES.HOME} >
                 <h4 >Volver</h4>
            </Link>
          </div>
        </>
    )
}

export default Detail