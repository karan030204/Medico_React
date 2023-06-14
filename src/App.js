import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/karan/landing-page/' element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
