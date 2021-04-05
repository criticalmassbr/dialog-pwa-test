/* eslint-disable no-underscore-dangle */
import Layout from 'components/Layout/Layout';
import React, { useState, useEffect } from 'react';
import { useGetUsers } from 'graphql/useRequest';
import colors from 'utils/colors';
import { DualRing } from 'react-spinners-css';
import GridCards from 'components/GridCards/GridCards';
import { Container } from './styles';

const Home: React.FC = () => {
  const [queryName, setQueryName] = useState('');
  const { data, error, isLoading, isSuccess } = useGetUsers(queryName);
  const setNameQuery = (name) => {
    setQueryName(name);
    localStorage.removeItem('@nameQuery');
  };
  useEffect(() => {
    const nameQuery = localStorage.getItem('@nameQuery');
    if (nameQuery) {
      setQueryName(nameQuery);
    }
    () => {
      localStorage.removeItem('@nameQuery');
    };
  }, []);
  return (
    <Layout setQueryName={setNameQuery}>
      {error && <h1>Something went wrong!</h1>}
      {isLoading && (
        <Container>
          <DualRing color={colors.white} size={50} />
        </Container>
      )}
      {isSuccess && <GridCards data={data} />}
    </Layout>
  );
};

export default Home;
