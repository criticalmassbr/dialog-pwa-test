import {
  CardContainer,
  CardImage,
  CardSubTitle,
  CardSubTitleProps,
  ContainerDetails,
} from './cardStyle';

export const Card = () => {
  return (
    <>
      <CardContainer>
        <div>
          <CardImage src='https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg'></CardImage>
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
            <CardSubTitleProps>Camila Correia</CardSubTitleProps>
            <CardSubTitleProps>28</CardSubTitleProps>
            <CardSubTitleProps>Castanhos</CardSubTitleProps>
            <CardSubTitleProps>MJV</CardSubTitleProps>
            <CardSubTitleProps>camila@mjv.com.br</CardSubTitleProps>
          </div>
        </ContainerDetails>
      </CardContainer>
    </>
  );
};
