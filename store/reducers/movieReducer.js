//1. action type constant'ları import et
import { ARTIR } from "../actions/movieActions";

//2. reducer fonksiyonunu yaz (initialState için state'e default parametre tanımlamayı unutma!)
export const reducer = (state = 0, action) => {
  switch (action.type) {
    case ARTIR:
      return state + action.payload;
    default:
      return state;
  }
};
