import { Search, Wrapper } from '../../components'
import { ProfileBox, StyledProfile, Title } from './styles';
import { useMyContext } from '../../MyContext';
import { Link } from 'react-router-dom';

const Profile = () => {

  const { user } = useMyContext();

  return (
    <StyledProfile>
      <Search off={true}/>
        {
          user && (
            <ProfileBox>
              <span>{user.greeting}</span>
              <div>
                <img src={user.picture} alt="profile" />
                <div>
                  <h2>YOUR INFO</h2>
                  <p><span>name:</span> {user.name}</p>
                  <p><span>age:</span> {user.age}</p>
                  <p><span>eye color:</span> {user.eyeColor}</p>
                  <p><span>company:</span> {user.company}</p>
                  <p><span>email:</span> {user.email}</p>
                  <p><span>phone:</span> {user.phone}</p>
                </div>
              </div>
              
            </ProfileBox>
          )
        }

      <Title>
        <h2>YOUR FRIENDS</h2>
        <Link to={'/'}>back to search</Link>
      </Title>
      <Wrapper users={user?.friends} clickable={false}/>
    </StyledProfile>
  )
}

export default Profile
