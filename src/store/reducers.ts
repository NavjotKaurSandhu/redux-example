import * as fromActions from "./actions";

export const initialState = {
  loaded: false,
  loading: false,
  data: [{ label: "Book 1", complete: false }],
};

export function reducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case fromActions.ADD_BOOK: {
      const book = action.payload;
      const data = [...state.data, book];
      return {
        ...state,
        data,
      };
    }

    case fromActions.REMOVE_BOOK: {
      const data = state.data.filter(
        (book) => book.label !== action.payload.label
      );
      return {
        ...state,
        data,
      };
    }
  }
  return state;
}
