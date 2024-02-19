import React from 'react';
import '../estilos/perfil.css';

function Perfil(props){
    return(
        <div className='contenedor-perfil'>
            <div className='card'>
            <img className='imagen-perfil'
            src={require(`../imagenes/${props.imagen}.png`)}
            alt='Foto de desarrollador' />
        <div className='contenedor-texto-perfil'>
            <p className='nombre-perfil'>
               <strong>{props.nombre}</strong> en {props.pais}
            </p>
        <p className='cargo-perfil'>
            {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-perfil'>"{props.perfil}" </p>
        </div>
        <button onClick={() => window.open(props.link, '_blank')}>
            Pagina del juego
        </button>
        </div>
    </div>
    );
}
export default Perfil; 
