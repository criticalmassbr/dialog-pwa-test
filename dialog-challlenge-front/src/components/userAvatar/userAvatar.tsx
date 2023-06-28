import { IFriend, IPerson } from '../../interface/user';
import {
  Avatar,
  AvatarContainerDetails,
  AvatarSubTitle,
  AvatarSubTitleProps,
  Container,
  ContainerAvatar,
  TitleAvatarChoose,
} from './userAvatarStyle';

interface IAvatarProps {
  selectUser: IPerson | IFriend | undefined;
}
export const UserAvatar = ({ selectUser }: IAvatarProps) => {
  return (
    <Container>
      {selectUser ? (
        <>
          <TitleAvatarChoose>Usuário selecionado</TitleAvatarChoose>
          <ContainerAvatar>
            <div>
              <Avatar src={selectUser.picture} />
            </div>
            <AvatarContainerDetails>
              <div>
                <AvatarSubTitle>Nome</AvatarSubTitle>
                <AvatarSubTitle>Idade</AvatarSubTitle>
                <AvatarSubTitle>Email</AvatarSubTitle>
              </div>
              <div>
                <AvatarSubTitleProps>{selectUser.name}</AvatarSubTitleProps>
                <AvatarSubTitleProps>{selectUser.age}</AvatarSubTitleProps>
                <AvatarSubTitleProps>{selectUser.email}</AvatarSubTitleProps>
              </div>
            </AvatarContainerDetails>
          </ContainerAvatar>
        </>
      ) : null}
    </Container>
  );
};
