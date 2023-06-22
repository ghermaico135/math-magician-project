import {
  Routes, Route, BrowserRouter,
} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Calculator from './Components/Calculator';
import Quote from './Components/Quote';

function App() {
  return (
    <>

      <BrowserRouter basename="math-magician-project">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>

      </BrowserRouter>
    </>

  );
}

export default App;
