import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import Modbus from './components/comp/Modbus/Modbus';
import Sorting from './components/comp/Sorting/Sorting';


const App = () => {
  return (      
    <Router>
      <Routes>
        <Route path='https://aardiiaansyaahhhtnjng.github.io/belajar/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/modbus' element={<Modbus />} />
        <Route path='/sorting' element={<Sorting />} />
      </Routes>
    </Router>
  );
}

export default App;
