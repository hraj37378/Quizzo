import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

//** react routes */
// todo: add error page
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/quiz",
    element: <Quiz/>
  },
  {
    path: "/result",
    element: <Result/>
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
