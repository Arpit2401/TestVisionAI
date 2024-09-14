import TestVision from './screens/TestVision';
import Home from './screens/Home.screen';
import { Route, Routes } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test-vision" element={<TestVision />} />
    </Routes>
  );
}

export default App;
