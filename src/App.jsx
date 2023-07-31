
import './App.css'
import ItemListContainer from './components/ItemsListContainer';
import {NavBar} from "./components/NavBar";

function App() {
    return (
    <>
    <NavBar />
    <ItemListContainer greeting="hola Bienvenidos!!" />
    </>
    );
}

export default App
