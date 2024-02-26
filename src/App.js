
import './App.css';
import NavBar from './component/NavBar';
import Bottom from './component/Footer';
import Content from './component/Content';
function App() {
  return (
    <div className="App">
      <NavBar/>      
      <Content/>
      <Bottom/>
    </div>
  );
}

export default App;
