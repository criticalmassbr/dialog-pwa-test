import React, { useEffect, useReducer } from 'react';
import { fetchByName } from '../../services/graphqlService';
import Results from '../Results/Results';
import { Loading, Text } from './styles';

const initialState = {
  name: '',
  id: '',
  image: '',
  albums: [],
  loading: false,
  error: '',
};
const queryReducer = (state: any, payload: any) => {
  return {
    ...state,
    ...payload,
  };
};

function Query({ artist }: { artist: string }) {
  const [state, dispatch] = useReducer(queryReducer, initialState);

  const query = async (name: string) => {
    try {
      dispatch({ loading: true });
      const { data } = await fetchByName(name);
      const artistData = data.queryArtists[0]; // for a simpler test
      dispatch({ loading: false, error: '', ...artistData });
    } catch (err) {
      dispatch({ loading: false, error: err.message });
    }
  };

  useEffect(() => {
    if (artist !== '') query(artist);
  }, [artist]);

  return state.loading ? (
    <Loading />
  ) : state.error ? (
    <Text>{state.error}</Text>
  ) : (
    <Results albums={state.albums} name={state.name} image={state.image} />
  );
}

export default Query;
