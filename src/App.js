import './App.css';
import { ItemListContainer } from './Components/ItemListContainer';
import { NavBar } from './Components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer texto="Bienvenido Humano!"/>
    </>
  );
}

export default App;
