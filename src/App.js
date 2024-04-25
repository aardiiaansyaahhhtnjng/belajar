import { BrowserRouter as Router, Routes, Route, HashRouter, Link } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import Modbus from './components/comp/Modbus/Modbus';
import Sorting from './components/comp/Sorting/Sorting';


const App = () => {
  return (      
    // <Router>
    //   <Routes>
    //     <Route path='https://aardiiaansyaahhhtnjng.github.io/belajar/' element={<Home />} />
    //     <Route path='*' element={<NotFound />} />
    //     <Route path='/modbus' element={<Modbus />} />
    //     <Route path='/sorting' element={<Sorting />} />
    //   </Routes>
    // </Router>
    <HashRouter basename='/'>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/modbus">Modbus</Link></li>          
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/modbus" component={Modbus} />
      </div>
    </HashRouter>
  );
}

export default App;
