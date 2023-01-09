import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './services/PrivateRoute';
import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<PrivateRoute> <Chat /> </PrivateRoute>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
