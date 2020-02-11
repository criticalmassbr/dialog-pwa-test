import { call, put, all, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
// import { toast } from "react-toastify";
import history from "../../../services/history";

import { searchArtist } from "./actions";

function* search({ name }) {
  // const productExists = yield select(state =>
  //   state.cart.find(p => p.id === id)
  // );

  const artistExist = yield call(
    api.get,
    `graphql?query=%7B%0A%20%20queryArtists(byName%3A%20"${name}")%20%7B%0A%20%20%20%20name%0A%20%20%20%20id%0A%20%20%20%20image%0A%20%20%20%20albums%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20image%20%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A`
  );

  yield put(searchArtist(artistExist.data.queryArtists));
  history.push("/");
  // const stockAmount = stock.data.amount;
  // const currentAmount = productExists ? productExists.amount : 0;

  // const amount = currentAmount + 1;

  // if (amount > stockAmount) {
  //   toast.error("Produto Esgotado! ");

  //   return;
  // }

  // if (productExists) {
  //   const amount = productExists.amount + 1;

  //   yield put(updateAmountSuccess(id, amount));
  // } else {
  //   const response = yield call(api.get, `/products/${id}`);

  //   const data = {
  //     ...response.data,
  //     amount: 1,
  //     priceFormatted: formatPrice(response.data.price)
  //   };

  //   yield put(addToCartSuccess(data));
  //   history.push("/cart");
  // }
}

export default all([takeLatest("@artist/SEARCH_REQUEST", search)]);
