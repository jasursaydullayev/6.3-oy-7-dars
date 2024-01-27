import { RouterProvider, createBrowserRouter } from "react-router-dom"
// Layout
import RootLayout from './layout/RootLayout'
// Pages
import Home from './pages/Home'
import Cristiano from './pages/Cristiano'
import Neymar from './pages/Neymar'
import Football from './pages/Football'


function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/g.o.a.t',
          element: <Cristiano />
        },
        {
          path: '/neymar',
          element: <Neymar />
        },
        {
          path: '/football',
          element: <Football />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App