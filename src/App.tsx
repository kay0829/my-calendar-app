import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Calendar from './container/Calendar';
import ErrorPage from './container/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Calendar />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
