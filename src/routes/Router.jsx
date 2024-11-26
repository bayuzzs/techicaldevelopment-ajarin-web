import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import NotFound from '../pages/NotFound';
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';
import RouterErrorBoundary from './RouterErrorBoundary';

const routes = [
  {
    index: true,
    element: <LandingPage />,
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
