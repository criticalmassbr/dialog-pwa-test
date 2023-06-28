import { ApolloProvider } from '@apollo/client';
import ApolloSetup from '../src/config/apolloSetup';
import { Routes } from './routes/routes';

export const App = () => {
  return (
    <>
      <ApolloProvider client={ApolloSetup}>
        <Routes />
      </ApolloProvider>
    </>
  );
};
