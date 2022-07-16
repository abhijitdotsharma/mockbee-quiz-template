import "./App.css";
import Mockman from "mockman-js";
import {Routes, Route, Link} from 'react-router-dom';
//pages
import { HomePage } from "./pages";

import {Rules} from "./components"


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rules" element={<Rules/>}/>
        {/* <Route path="/quiz" element={<QuizPage/>}/> */}
        <Route path="/mock" element={<Mockman/>}/>
        <Route path="*" element={<div>Not Found - 404</div>} />
      </Routes>

      {/* <Mockman colorScheme="dark" /> */}

    </div>
  );
}

export default App;
