import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home";

function App() {
  const Layout = () => {
    return (

      <div className="">

        <Outlet />

      </div>

    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },

      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App