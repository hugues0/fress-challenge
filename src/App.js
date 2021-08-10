//import './App.css';
import Menu from './components/menu/Menu.js'
import Welcome from './components/welcome/Welcome.js';
import MyKitchen from './components/kitchen/MyKitchen';
function App() {
  return (
    <div className="App">
      <Menu />
      <Welcome /> 
      <MyKitchen />
    </div>
  );
}

export default App;
