import './App.css';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop';


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/archive" element={<ArchivePage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
