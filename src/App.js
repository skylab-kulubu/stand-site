import './App.css';
import TeamComp from './components/TeamComp/teamComp';
import Skylab from './images/skylab-uzun-logo.png'

function App() {
  return (
    <div className="App">
      <img src={Skylab} alt='Skylab' className='skylab-logo'/>
      <TeamComp />
    </div>
  );
}

export default App;
