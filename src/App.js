import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Cart from "./actionTypes/Cart";

function App() {
  return (
    <Provider store={store}>
     <Cart />
    </Provider>
  );
}

export default App;
