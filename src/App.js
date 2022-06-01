import Dashboard from './components/Dashboard/dashboard.js'
import Home from './components/Home/home.js'
import Notfound from './components/Notfound/notfound.js'
import Header from './components/Header/header.js'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
    
  </div>
  );
}

export default App;
