import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Add from './Add';
import Edit from './Edit';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/create' element={<Add />} />
            <Route path='/edit' element={<Edit />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
