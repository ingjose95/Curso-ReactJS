import logo from './logo.svg';
import './App.css';
// import Componente from './components/Componente'
// import ComponenteFuncional from './components/ComponenteFuncional'
// import Propiedades from './components/propiedades/Propiedades';
import ComponenteClase from './components/practicas/ComponenteClase'
import ComponenteFuncional from './components/practicas/ComponenteFuncional'
import Propiedades from './components/practicas/propiedades/Propiedades'
import Estado from './components/Estado'
import Estados from './components/Estados';
import RenderizadoCondicional from './components/RenderizadoCondicional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        <hr></hr>
        </a>
        <ComponenteClase saludo='Hola, estoy saludando desde una props'>
        </ComponenteClase>
        <ComponenteFuncional></ComponenteFuncional>

        <Propiedades 
          cadena='Este mensaje es una cadena'
          numero={28}
          booleano={true}
          array={[1,2,3,4,5]}
          objeto={{nombre: 'Michi', apellido: 'Melendez Vargas'}}
          funcion={(numero) => numero * numero}
          elementoReact={<i>Soy un elemento de React JS</i>}
          componenteReact={<ComponenteFuncional mensaje='Estoy saludando desde una propiedad'></ComponenteFuncional>}>
          

        </Propiedades>

        
        
        {/* <Componente msg='Hola, soy un componente de clase desde una prop'></Componente>
        <ComponenteFuncional msg='Hola, soy un componente funcional desde una prop'></ComponenteFuncional>
        <Propiedades
          cadena='Esto es una cadena de texto'
          numero={28}
          booleano={false}
          arreglo={[1,2,3]}
          objeto={{nombre: 'Jose', correo: 'jose@gmail.com'}}
          elementoReact={<i>Esto es un elemento React</i>}
          funcion={(num) => num*num}
          componenteReact= {<Componente msg='Soy un componente pasado como prop'></Componente>}>
        </Propiedades> */}
        <hr></hr>
        <Estado></Estado>
        <Estados></Estados>
        <RenderizadoCondicional></RenderizadoCondicional>
      </header>
    </div>
  );
}

export default App;
