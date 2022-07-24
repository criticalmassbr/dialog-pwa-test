import { useNavigate, useParams } from 'react-router-dom';
import { Grid, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import SearchAppBar from '../components/SearchAppBar';
import { useQuery } from '@apollo/client';
import UsersCard from '../components/UsersCard';

import IUser from '../interfaces/IUser';
import { FindByName } from '../resolvers/users';

const Search = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const GET_USERS = FindByName(name);
  const { data, loading } = useQuery(GET_USERS);
  
  if (loading) {
    return <Typography variant="h6">Carregando...</Typography>;
  }

  return (
    <>
      <SearchAppBar />

      <Container>
        <Breadcrumbs sx={{ margin: 5 }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Searching</Typography>
        </Breadcrumbs>

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

export default Search;
