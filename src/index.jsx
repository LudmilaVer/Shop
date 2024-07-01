import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import cartStore from "./redux/store";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={cartStore}>
    <App />
  </Provider>
);
