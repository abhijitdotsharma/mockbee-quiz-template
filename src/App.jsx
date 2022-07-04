import "./App.css";
import Mockman from "mockman-js";
import {Routes, Route} from 'react-router-dom';

const HomePage = () => {
  return(
    <div>
      <h1>I am homepage</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      {/* <Mockman colorScheme="dark" /> */}

    </div>
  );
}

export default App;
