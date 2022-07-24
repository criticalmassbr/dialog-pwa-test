import {
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { CardActionArea } from '@mui/material';

interface IUser {
  user: {
    picture: string;
    age: number;
    eyeColor: string;
    name: string;
    company: string;
    email: string;
  }
}

function UsersCard({ user }: IUser) {  
  const {
    picture,
    age,
    eyeColor,
    name,
    company,
    email
  } = user;

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={picture}
          alt="user"
        />
        <CardContent>
          <List>
            <ListItem component="div" disablePadding>
              <ListItemText 
                primary="Name:"
                primaryTypographyProps={{ fontWeight: 'bold' }}
                secondary={name}
              />
            </ListItem>

            <ListItem component="div" disablePadding>
              <ListItemText 
                primary="Age:"
                primaryTypographyProps={{ fontWeight: 'bold' }}
                secondary={age}
              />
            </ListItem>

            <ListItem component="div" disablePadding>
              <ListItemText 
                primary="Eye Color:"
                primaryTypographyProps={{ fontWeight: 'bold' }}
                secondary={eyeColor}
              />
            </ListItem>

            <ListItem component="div" disablePadding>
              <ListItemText 
                primary="Company:"
                primaryTypographyProps={{ fontWeight: 'bold' }}
                secondary={company}
              />
            </ListItem>

            <ListItem component="div" disablePadding>
              <ListItemText 
                primary="E-mail:"
                primaryTypographyProps={{ fontWeight: 'bold' }}
                secondary={email}
              />
            </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default UsersCard;