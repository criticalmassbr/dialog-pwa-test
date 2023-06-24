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


const verifyColor = (color: string) => {
  switch (color) {
    case 'blue':
      return 'Azul';
    case 'green':
      return 'Verde';
    case 'brown':
      return 'Castanho';
    default:
      return color;
  }
};
const verifyAge = (age: number) => {
  if (age > 1) {
    return `${age} anos`;
  } else {
    return `${age} ano`;
  }
};

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
            <CardSubTitleProps>{verifyAge(user.age)}</CardSubTitleProps>
            <CardSubTitleProps>{verifyColor(user.eyeColor)}</CardSubTitleProps>
            <CardSubTitleProps>{user.company}</CardSubTitleProps>
            <CardSubTitleProps>{user.email}</CardSubTitleProps>
          </div>
        </ContainerDetails>
      </CardContainer>
    </>
  );
};
