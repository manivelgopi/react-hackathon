import Dashboard from './components/Dashboard/dashboard.js'
import Notfound from './components/Notfound/notfound.js'
import Header from './components/Header/header.js'
import Footer from './components/Footer/footer.js'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Header />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<Notfound />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
  );
}

export default App;
