import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "../src/redux/store/store";
import { router } from "./routes/Routes";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
