import './App.css';
import SquaresBG from "react-animated-squares";


function App() {
  return (
    <div className="App">
      <div className="top">
        <SquaresBG speed={0.9} backgroundColor="#333333" />
        <div className='namePlate'>
          <div className='nameDiv'>
            <h2>Rob Jenkins</h2>
            <p>JavaScript Developer</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
