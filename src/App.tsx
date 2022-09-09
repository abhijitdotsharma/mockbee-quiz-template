import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route, Link } from 'react-router-dom';

import { CategoryPage, HomePage, RulesPage, ResultsPage, QuizPage } from "./pages";


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/category-page" element={<CategoryPage />} />

        <Route path="/quiz-page" element={<QuizPage />} />

        <Route path="/results-page" element={<ResultsPage />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="*" element={<div>Not Found - 404</div>} />
      </Routes>
    </div>
  );
}

export default App;
