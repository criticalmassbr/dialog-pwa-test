import { UserI } from '../../@types/UserI';
import { useMyContext } from '../../MyContext';
import { StyledWrapper, UserBox } from './styles'
import { Link } from 'react-router-dom'

interface WrapperProps {
  users: UserI[] | undefined;
  clickable: boolean;
}

const Wrapper = (props: WrapperProps) => {  

  const { setUser } = useMyContext();

  if (props.clickable){
    return (
      <StyledWrapper>
        {
          props.users &&
          props.users.map(user => (
            <Link 
              to={`/${user._id}`} key={user._id}
              onClick={() => {setUser(user)}}
            >
              <UserBox>
                <img src={user.picture} alt="profile"/>
                <div>
                  <p><span>name:</span> {user.name}</p>
                  <p><span>age:</span> {user.age}</p>
                  <p><span>eye color:</span> {user.eyeColor}</p>
                  <p><span>company:</span> {user.company}</p>
                  <p><span>email:</span> {user.email}</p>
                </div>
              </UserBox>
            </Link>
          ))
        }
      </StyledWrapper>
    )
  }

  return (
    <StyledWrapper>
      {
        props.users &&
        props.users.map(user => (
            <UserBox>
              <img src={user.picture} alt="profile"/>
              <div>
                <p><span>name:</span> {user.name}</p>
                <p><span>age:</span> {user.age}</p>
                <p><span>eye color:</span> {user.eyeColor}</p>
                <p><span>company:</span> {user.company}</p>
                <p><span>email:</span> {user.email}</p>
              </div>
            </UserBox>
        ))
      }
    </StyledWrapper>
  )
}

export default Wrapper
