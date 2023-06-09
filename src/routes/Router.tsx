import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/common/Layout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ApplicationPage from '../pages/ApplicationPage';
import EditProfilePage from '../pages/EditProfilePage';
import NotFoundPage from '../pages/NotFoundPage';
import ViewSchedulePage from '../pages/ViewSchedulePage';
import AdminPage from '../pages/AdminPage';
import ProtectedRouter from './ProtectedRouter';
import ScrollToTop from '../utils/scrollToTop';

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<ProtectedRouter />}>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/application' element={<ApplicationPage />} />
            <Route path='/editProfile' element={<EditProfilePage />} />
            <Route path='/viewSchedule' element={<ViewSchedulePage />} />
            <Route path='/admin' element={<AdminPage />} />
          </Route>
        </Route>
        <Route element={<ProtectedRouter />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
