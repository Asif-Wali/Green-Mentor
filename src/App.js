import './App.css';
import { SideBar } from './Components/SideBar';
import { RightSide } from './Components/TopNav';
function App() {
  return (
    <div className="App">
      <div style={{display:"flex"}}>
      <SideBar/>
      <RightSide/>
      </div>
    </div>
  );
}

export default App;
