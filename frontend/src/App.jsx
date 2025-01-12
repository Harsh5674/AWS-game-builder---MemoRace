import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from './pages/HomePage/homePage.jsx';

function App() {
  <Router>
    <Routes>
    <Route path='/' element={<HomePage/>} />
    </Routes>
  </Router>
}

export default App
