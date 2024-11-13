//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Team from './pages/Team'
import Bike from './pages/Bike'
import Contact from './pages/Contact'
import Join from './pages/Join'
import Support from './pages/Support'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/team" exact element={<Team />} />
          <Route path="/bike" exact element={<Bike />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/join" exact element={<Join />} />
          <Route path="/support" exact element={<Support />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;

