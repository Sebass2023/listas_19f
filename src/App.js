import logo from './logo.svg';
import './App.css';
import Perfil from './componentes/perfil.js';

function App() {
  return (
    <div className="App">
     <div class ='contenedor-principal'>
      <div className='card'>
      <h1>Mis juegos favoritos</h1>
      <Perfil 
        nombre='Gta San Andreas'
        imagen='gta'
        empresa='Rockstar Games'
        perfil='Video juego de mundo abierto ambientado en la década de los 90, cuenta la historia de Carl Johnson, su familia, amigos y la forma en que deben sobrevivir a las bandas, la policía corrupta y la mafia que maneja buena parte de las ciudades a las que tiene acceso el videojuego (Las vegas, San francisco, Los ángeles).'
        link='https://www.rockstargames.com/es/games/sanandreas'
      />
     </div>
     <div class ='contenedor-principal'>
     
      <Perfil 
        nombre='Red Dead Redemption ll'
        imagen='red'
        empresa='Rockstar Games'
        perfil='Este juego se sitúa en el año 1899, donde la banda a la que pertenece el protagonista debe permanecer constantemente escondida debido a que es buscada por los diversos crímenes cometidos. A medida que el juego se va desarrollando el personaje principal entra en conflicto debido a las cuestionables decisiones de su líder, por lo tanto debe elegir si ser leal a la banda o a lo que su corazón le indique.'
        link='https://www.rockstargames.com/es/reddeadredemption2'
      />
     </div>
     <div class ='contenedor-principal'>
      <Perfil 
        nombre='The legend of zelda (saga)'
        imagen='zelda'
        empresa='Nintendo'
        perfil='En un lugar llamado “Hyrule”, un joven llamado “link”, debe enfrentarse a varios desafíos, enemigos y peligros para buscar las gemas que traen orden a su pueblo, poder vencer el mal y salvar a la princesa y su reino.'
        link='https://www.nintendo.com/es-co/store/products/the-legend-of-zelda-breath-of-the-wild-switch/'
      />
     </div>
    </div>
    </div>
  );
}

export default App;