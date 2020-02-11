import produce from "immer";

export default function cart(state = [], action) {
  switch (action.type) {
    case "@artist/SEARCH_REQUEST":
      return produce(state, draft => {
        const { artist } = action;
        draft.push(artist);
      });

    default:
      return state;
  }
}
