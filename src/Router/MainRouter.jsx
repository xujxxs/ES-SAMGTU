import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../components/HomePage/Home";
import { Quiz } from "../components/SurveyPage/Quiz";
import { Results } from "../components/SurveyPage/Results";
export function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Quiz />} />
          <Route path="survey/results" element={<Results />} />
        </Route>
      </Routes>
    </Router>
  );
}
