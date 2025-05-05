/*
    reducer function: state değişimlerini tek bir yerden yönetmeye yardımcı olur.
*/

// action object
const action = {
  type: "film ekle", //required
  payload: {}, //optional
};

const initialState = [];

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "film ekle":
      return [...state, action.payload];
    case "film çıkar":
      const newState = state.filter((movie) => movie.id !== action.payload);
      return newState;
    default:
      return state;
  }
};

//örnek kullanım
const state = [
  { id: 1, name: "Starwars" },
  { id: 2, name: "Superman" },
];
state = movieReducer(state, { type: "film çıkar", payload: 1 });

const [state, dispatch] = useReducer(movieReducer, initialState);

dispatch(action);
