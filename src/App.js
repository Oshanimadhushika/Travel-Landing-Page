// import './App.css';
import About from './pages/About';
import Hero from './pages/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="">
      <Hero/>
      <About/>
      {/* <Routes>
        <Route path="/" element={<Hero />} />
        
      </Routes> */}
    </div>
  </Router>
  );
}

export default App;
