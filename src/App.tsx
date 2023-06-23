import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from '@container/Main';
import MainCalendar from '@/component/Main/MainCalendar';
import ErrorPage from '@container/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/month",
        element: <MainCalendar />,
      },
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
