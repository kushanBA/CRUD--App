import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Students from './Students';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Students />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
