import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { LoginPage } from '../auth';
import { childHeroesRutes, HeroesRutes} from '../heroes/routes/HeroesRutes';



const router = createBrowserRouter([
    {
      path:"/login",
      element:<LoginPage />
    },
    {
      path: "/",
      element: <HeroesRutes />,
      children: childHeroesRutes,
    }

])

export const AppRoute = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
    
  )
}
