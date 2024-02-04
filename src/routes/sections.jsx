import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginHistoryPage = lazy(() => import('src/pages/loginHistory'));
export const Trips = lazy(() => import('src/pages/trips'));
export const FeesSubmissionPage = lazy(() => import('src/pages/feesSubmission'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const AddTrip = lazy(() => import('src/pages/addTrip'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <Trips />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'dashboard', element: <IndexPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'feesSubmission', element: <FeesSubmissionPage /> },
        { path: 'permissionMgmt', element: <UserPage /> },
        { path: 'loginHistory', element: <LoginHistoryPage /> }
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'addTrip',
      element: <AddTrip />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/login" replace />,
    }
  ]);

  return routes;
}
