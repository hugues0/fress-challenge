//import './App.css';
import Menu from './components/menu/Menu'
import Welcome from './components/welcome/Welcome';
import MyKitchen from './components/kitchen/MyKitchen';
import MyFood from './components/food/MyFood.js';
function App() {
  return (
    <div className="App">
      <Menu />
      <Welcome /> 
      <MyKitchen />
      <MyFood />
    </div>
  );
}

export default App;
