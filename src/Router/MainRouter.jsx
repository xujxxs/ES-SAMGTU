import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../components/HomePage/Home";
import { Survey } from "../components/SurveyPage/SurveyPage";
export function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
        </Route>
      </Routes>
    </Router>
  );
}
