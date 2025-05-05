//1. install
//npm i redux react-redux

//2. dosya ve klasörleri oluştur
/*
    ./store/store.js (store'u burada oluştur)
    ./store/actions/xxxActions.js (action type constant ve action creator'lar buraya)
    ./store/reducers/xxxReducer.js (reducer fonksiyonunu burada oluştur. DİKKAT: initialState vermeyi unutma)
*/

//3. store'u oluştur: store.js dosyasında
import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducers/index.js";

export const store = createStore(reducer);

//4. uygulamayı provider ile sarmala -> main.jsx
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

//5. ilgili component'den useSelector() hook'u ile store'dan  veri al.
import { useSelector } from "react-redux";

const Main = () => {
  const title = useSelector((store) => store.title);
  return <h2>{title}</h2>;
};

//6. useDispatch() hook'u il action'ları dispatch et
import { useDispatch } from "react-redux";
import { changeTitle } from "../store/actions/mainActions.js";

const Home = (props) => {
  const dispatch = useDispatch();

  const changeTitle = (newTitle) => {
    dispatch(changeTitle(newTitle));
  };

  //...
};

//7. Birden fazla reducer varsa combineReducers ile reducers/index.js'de birleştir.
import { combineReducers } from "redux";

import { userReducer } from "./reducers/userReducer.js";
import { paymentReducer } from "./reducers/paymentReducer.js";
import { productReducer } from "./reducers/productReducer.js";
import { mainReducer } from "./reducers/mainReducer.js";

export const reducers = combineReducers({
  user: userReducer,
  payment: paymentReducer,
  product: productReducer,
  main: mainReducer,
});

//not combine reducer ile reducerları birleştirdik. artık ortak bir state var. tüm reducer'lardaki state'leri içeriyor.
//title artık state'deki main property'sinin içinde. yukarıda(reducers'da) öyle tanımladık.
const title = useSelector((store) => store.main.title);
