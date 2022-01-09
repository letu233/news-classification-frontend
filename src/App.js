import "./App.css";
import Header from "./components/Header";
import Classifier from "./components/Classifier";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SourcePredict from "./components/SourcePredict";
import Source from "./components/Source"

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container fluid="md" className="mt-5">
          <Routes>
            <Route path="/" element={<Classifier/>} exact />
            <Route path="/source" element={<SourcePredict/>} exact />
            <Route path="/get_source" element={<Source/>} exact />
          </Routes>
        </Container>
      </main>
      
    </Router>
  );
}

export default App;
