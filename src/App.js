import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Navigation from './Navigation';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
