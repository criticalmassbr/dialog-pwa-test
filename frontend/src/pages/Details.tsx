import { useParams } from 'react-router-dom';
import {
  Grid,
  Container,
  Card,
  CardMedia,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  Breadcrumbs,
  Link
} from '@mui/material';
import SearchAppBar from '../components/SearchAppBar';
import { useQuery } from '@apollo/client';
import UsersCard from '../components/UsersCard';

import IUser from '../interfaces/IUser';
import IUserFriends from '../interfaces/IUserFriends';
import { FindUser } from '../resolvers/users';

const Details = () => {
  const { id } = useParams();

  const GET_USER = FindUser(id);

  const { data, loading } = useQuery(GET_USER);

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
          <Typography color="text.primary">Detail</Typography>
        </Breadcrumbs>

          <Grid container mt={5} justifyContent="center">
            {
              data.detail.map((user: IUser) => (
                <Grid item key={user._id}>
                  <Paper>
                    <Card sx={{ maxWidth: 250 }}>
                      <CardMedia
                        component="img"
                        height="250"
                        image={user.picture}
                        alt={user.name}
                      />
                    </Card>

                    <List sx={{ marginLeft: 2 }}>
                      <ListItem component="div" disablePadding>
                        <ListItemText 
                          primary="Name:"
                          primaryTypographyProps={{ fontWeight: 'bold' }}
                          secondary={user.name}
                        />
                      </ListItem>

                      <ListItem component="div" disablePadding>
                        <ListItemText 
                          primary="Age:"
                          primaryTypographyProps={{ fontWeight: 'bold' }}
                          secondary={user.age}
                        />
                      </ListItem>

                      <ListItem component="div" disablePadding>
                        <ListItemText 
                          primary="E-mail:"
                          primaryTypographyProps={{ fontWeight: 'bold' }}
                          secondary={user.email}
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </Grid>
              ))
            }
          </Grid>
      </Container>

      <Container>
        <Typography variant="h5" mt={12} mb={2}>Friends:</Typography>
        <Grid container spacing={5}>
          {
            data?.detail.map((user: IUser) => (
              user.friends.map((friends: IUserFriends) => (
                <Grid item key={friends._id}>
                  <UsersCard user={friends} />
                </Grid>
              ))
            ))
          }
        </Grid>
      </Container>
    </>
  );
}

export default Details;
