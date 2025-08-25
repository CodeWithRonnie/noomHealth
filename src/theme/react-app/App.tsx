import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "../../../pages/Home";
import WeightLossPage from "../../../pages/WeightLoss";
import HealthCoachingPage from "../../../pages/HealthCoaching";
import DiabetesPreventionPage from "../../../pages/DiabetesPrevention";
import ForEmployersPage from "../../../pages/ForEmployers";
import ForHealthPlansPage from "../../../pages/ForHealthPlans";
import RequestDemoPage from "../../../pages/RequestDemo";
import AboutUsPage from "../../../pages/AboutUs";
import CareersPage from "../../../pages/Careers";
import ResearchPage from "../../../pages/Research";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weight-loss" element={<WeightLossPage />} />
        <Route path="/health-coaching" element={<HealthCoachingPage />} />
        <Route path="/diabetes-prevention" element={<DiabetesPreventionPage />} />
        <Route path="/for-employers" element={<ForEmployersPage />} />
        <Route path="/for-health-plans" element={<ForHealthPlansPage />} />
        <Route path="/request-demo" element={<RequestDemoPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/research" element={<ResearchPage />} />
      </Routes>
    </Router>
  );
}
