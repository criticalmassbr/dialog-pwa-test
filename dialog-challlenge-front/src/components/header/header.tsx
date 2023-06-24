import {
  SearchInput,
  Title,
} from './headerStyle';

export const Header = () => {
  return (
    <>
          <Title>MySocial</Title>
          <SearchInput type='text' placeholder='Procure por alguém' />
    </>
  );
};
