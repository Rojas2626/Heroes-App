import { Navigate } from "react-router-dom"
import { MarvelPage, DcPage, HeroPage, SearchPage } from '../../heroes';
import { LoginPage } from '../../auth';
import { Navbar } from "../../ui";
import { Outlet } from "react-router-dom";

export const childHeroesRutes = [
  {
    index: true,
    element: <Navigate to="/Marvel" />,
    
  },
  {
    path:"/marvel",
    element: <MarvelPage />,
    
  },
  {
    path:"/dc",
    element: <DcPage />,
    
  },
  {
    path:"/login",
    element: <LoginPage />,
    
  },
  {
    path:"hero/:id",
    element: <HeroPage />
  },
  {
    path:"/search",
    element: <SearchPage />
  }
]


export const HeroesRutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>

    </>
  )
}
