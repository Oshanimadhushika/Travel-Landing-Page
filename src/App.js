// import './App.css';
import About from "./pages/About";
import Hero from "./pages/Hero";
import PlaceSriLanka from "./pages/PlaceSriLanka";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Hero />
        <About />
        <PlaceSriLanka />
      </div>
    </Router>
  );
}

export default App;
