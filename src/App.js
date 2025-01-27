import logo from './logo.svg';
// import './App.css';
import Hero from './pages/Hero';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="h-full">
      <Routes>
        {/* Define Routes for different pages */}
        <Route path="/" element={<Hero />} />
        
      </Routes>
    </div>
  </Router>
  );
}

export default App;
