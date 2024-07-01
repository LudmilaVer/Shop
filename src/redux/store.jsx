import { createStore } from "redux";

import { cartReducer } from "./reducers";

const cartStore = createStore(cartReducer);

export default cartStore;
