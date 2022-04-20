import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './container/Home';
import { Secret } from './container/Secret';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/secrets/:hash' element={<Secret/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
