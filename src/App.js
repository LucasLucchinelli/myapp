import { Fragment } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemlistContainer from './components/ItemlistContainer';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <ItemlistContainer msg="Bienvenidos"/>
    </Fragment>
   
  );
}

export default App;
