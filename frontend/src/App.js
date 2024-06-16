import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Students from './Students';
import Create from './Create';
import Update from './Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Students />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
