import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store';

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
