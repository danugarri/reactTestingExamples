import './App.css';
import {MyComponent} from './base/MyComponent.tsx';


function App() {
  const saludo= 'Hola soy Peter parker';
  
  return (
    <MyComponent saludo= {saludo} />
  );
}

export default App;
