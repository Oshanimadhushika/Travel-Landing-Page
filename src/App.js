// import './App.css';
import About from "./pages/About";
import Hero from "./pages/Hero";
import PlaceSriLanka from "./pages/PlaceSriLanka";
import { BrowserRouter as Router } from 'react-router-dom';
import MobilePart from "./pages/MobilePart";

function App() {
  return (
    <Router>
      <div className="App">
        <Hero />
        <About />
        <PlaceSriLanka />
        <MobilePart />
      </div>
    </Router>
  );
}

export default App;
