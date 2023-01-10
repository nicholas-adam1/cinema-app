import React from 'react';
import { useRoutes } from 'react-router-dom';
import Main from './components/main/Main';
import Details from './components/content/details/Details';

export const AppRoutes = (props) => {
  const elements = useRoutes([
    {
      path: '/',
      element: <Main {...props} />
    },
    {
      path: '/:id/:name/details',
      element: <Details {...props} />
    }
  ]);

  return elements;
};
