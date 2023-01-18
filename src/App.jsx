import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/home/Home";
import NewProduct from "./pages/newProduct/NewProduct";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";

function App() {
  const Layout = () => {
    return (
      <div>
        <Topbar />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div>
            <Outlet />
          </div>
          <Home />
        </div>
      </div>
    );
  };
  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }
  //   return children;
  // };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        // <ProtectedRoute>
        <Layout />
        // </ProtectedRoute>
      ),
    },
    {
      path: "/users",
      element: <UserList />,
    },
    {
      path: "/user/:userId",
      element: <User />,
    },
    {
      path: "/newuser",
      element: <NewUser />,
    },
    {
      path: "/products",
      element: <ProductList />,
    },
    {
      path: "/product/:productId",
      element: <NewUser />,
    },
    {
      path: "/newproduct",
      element: <NewProduct />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
  <Home />;
}

export default App;
