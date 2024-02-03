import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation from './Navigation/Navigation';

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
