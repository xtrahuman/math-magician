import './index.css';
import { Route, Routes } from 'react-router-dom';
import Calculator from './component/calculator';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import Header from './component/Header';

function App() {
  return (
    <>
      <div className="container">
        <div className="header-nav">
          <Header />
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/Quotes" element={<Quotes />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
