import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPages from '../pages/LandingPages';
import NotFound from '../pages/NotFound';
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';
import RouterErrorBoundary from './RouterErrorBoundary';
import Kelasku from '../pages/Kelasku';
import { Modul } from '../pages/Modul';

const routes = [
  {
    index: true,
    element: <LandingPages />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/kelasku',
    element: <Kelasku />,
  },
  {
    path: '/modul',
    element: <Modul />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const router = createBrowserRouter([
  {
    element: <RouterErrorBoundary />,
    children: routes,
  },
]);
const Router = () => <RouterProvider router={router} />;
export default Router;
