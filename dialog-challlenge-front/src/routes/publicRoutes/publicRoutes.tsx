import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/mainPage/mainPage';
import { UserDetails } from '../../pages/userDetails/userDetails';

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path=':_id' element={<UserDetails />} />
        <Route path='/*' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};
