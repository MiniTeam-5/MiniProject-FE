import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/common/Layout';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
