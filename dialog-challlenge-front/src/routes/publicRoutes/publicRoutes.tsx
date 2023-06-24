import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/mainPage/mainPage';

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/*' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};
