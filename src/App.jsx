import { createBrowserRouter } from "react-router-dom";

import "./App.css";
import { RouterProvider } from "react-router-dom";

import Menu from "./features/menu/Menu";
import Home from "./ui/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
