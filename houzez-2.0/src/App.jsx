import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
