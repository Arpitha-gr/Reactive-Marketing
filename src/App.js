import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import FormBuilder from './components/FormBuilder';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
    <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="form-builder" element={<FormBuilder />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
