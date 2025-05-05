//1. action type constant yaratılır
export const ARTIR = "artır";

//2. action creator function yaratılır
export const artirFunc = (value) => {
  return {
    type: ARTIR,
    payload: value,
  };
};
