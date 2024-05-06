
// homepage
// categories
// serch 
// single gif 

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./layouts/app-layout"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Search from "./pages/Search"
import SingleGif from "./pages/Single-gif"
import Favorites from "./pages/Favorites"


// fav 
const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/:category',
        element: <Category/>
      },
      {
        path:'/search/:query',
        element: <Search/>
      },
      {
        path:'/:type/:slug',
        element: <SingleGif/>
      },
      {
        path:'/favorites',
        element: <Favorites/>
      },
    ]
  }
])
function App() {
  return (
    <div>
      <RouterProvider router = {router} />    
    </div>
  )
}

export default App
