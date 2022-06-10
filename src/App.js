import DataStoreProvider from './components/Store/DataStore.js'
import Home from './components/Home/Home.js'
import Notfound from './components/Notfound/notfound.js'
import Header from './components/Header/Header.js'
import {
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard.js';

function App() {
  return (
    <div className="App">
    <Header />
    <DataStoreProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </DataStoreProvider>
  </div>
  );
}

export default App;
