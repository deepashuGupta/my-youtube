import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import store from "./utils/store/store";
import "./App.css";
import Body from "./components/Body/Body";
import MainConatiner from "./components/Body/MainContainer";
import WatchVideo from "./components/Body/WatchVideo/WatchVideo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainConatiner />,
      },
      {
        path: "/watch",
        element: <WatchVideo />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
