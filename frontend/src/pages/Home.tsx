import { useNavigate } from 'react-router-dom';
import { Grid, Container, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';

import SearchAppBar from '../components/SearchAppBar';
import UsersCard from '../components/UsersCard';

import IUser from '../interfaces/IUser';
import { GET_USERS } from '../resolvers/users';

const Home = () => {
  const { data, loading } = useQuery(GET_USERS);
  const navigate = useNavigate();
  
  if (loading) {
    return <Typography variant="h6">Carregando...</Typography>;
  }

  return (
    <>
      <SearchAppBar />

      <Container>
        <Grid container spacing={5} mt={3} justifyContent="center">
          {
            data?.list.map((user: IUser) => (
              <Grid item key={user._id} onClick={() => navigate(`/detail/${user._id}`)}>
                <UsersCard user={user} />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </>
  );
}

export default Home;
