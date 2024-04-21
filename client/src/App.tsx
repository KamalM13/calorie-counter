import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import AddUser from "./pages/addUser";
import AddFood from "./pages/addFood";
import CalorieInfo from "./pages/calorieInfo";
import EditCalorie from "./pages/editCalorie";

function App() {
  const Layout = () => {
    return (

      <div className="">
        <Navbar/>
        <Outlet />

      </div>

    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/food", element: <AddFood /> },
        { path: "/user", element: <AddUser /> },
        { path: "/info", element: <CalorieInfo /> },
        {path: "/info/:id", element: <EditCalorie />}

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