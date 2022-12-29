import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage";
import { ListPage } from "./pages/list";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/list",
      element: <ListPage />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
