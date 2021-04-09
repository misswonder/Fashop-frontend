import './App.css';
import { Image } from 'semantic-ui-react';
import Login from './components/Login';
import logo from './image/logo.png';

function App() {
  return (
    <div className="App">
      <Image src={logo} size='big' centered circular />
      <Login />
    </div>
  );
}

export default App;
