import './App.css';

import { HashRouter } from 'react-router-dom';

import Routing from './components/Routes/Routing';

export default function App() {
  return (    
      <HashRouter>
        <Routing />
      </HashRouter>    
  );
}


