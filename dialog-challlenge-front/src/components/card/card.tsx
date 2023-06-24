import { IPerson } from '../../interface/user';
import {
  CardContainer,
  CardImage,
  CardSubTitle,
  CardSubTitleProps,
  ContainerDetails,
} from './cardStyle';

interface CardProps {
  user: IPerson;
}

export const Card = ({ user }: CardProps) => {
  return (
    <>
      <CardContainer>
        <div>
          <CardImage src={user.picture}></CardImage>
        </div>
        <ContainerDetails>
          <div>
            <CardSubTitle>Nome</CardSubTitle>
            <CardSubTitle>Idade</CardSubTitle>
            <CardSubTitle>Cor dos Olhos</CardSubTitle>
            <CardSubTitle>Empresa</CardSubTitle>
            <CardSubTitle>Email</CardSubTitle>
          </div>
          <div>
            <CardSubTitleProps>{user.name}</CardSubTitleProps>
            <CardSubTitleProps>{user.age}</CardSubTitleProps>
            <CardSubTitleProps>{user.eyeColor}</CardSubTitleProps>
            <CardSubTitleProps>{user.company}</CardSubTitleProps>
            <CardSubTitleProps>{user.email}</CardSubTitleProps>
          </div>
        </ContainerDetails>
      </CardContainer>
    </>
  );
};
