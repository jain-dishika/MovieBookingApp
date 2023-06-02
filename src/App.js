import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Component/Home';
import SingleMovie from './Component/SingleMovie'
import Error from './Component/Error';
function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/:id" element = {<SingleMovie/>}/>
        <Route path = "*" element = {<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
