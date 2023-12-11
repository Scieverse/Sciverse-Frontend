import { Route, Routes, MemoryRouter } from 'react-router-dom';
import Header from './pages/header';

function App() {
  return (
    <div className="flex w-screen overflow-hidden">
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </MemoryRouter>
    </div>
  );
}

export default App;
