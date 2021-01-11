import React, { FunctionComponent, SyntheticEvent, useEffect } from 'react';
import styled from "styled-components";
import colors from "../../assets/css/colors";
import loader from "../../assets/loader.gif";
interface Person {
  id: string
  name?: string
  age?: string
  eyeColor?: string
  company?: string
  email?: string
  picture?: string
  friends?: [Person]
  greeting?: string
}

interface ContainerProps {
  onClick: (event: SyntheticEvent) => any;
}

const Container = styled.div<ContainerProps>`
  border:solid 1px ${colors.primary};
  border-radius:1.9em;
  cursor:pointer;
  display:flex;
  flex-direction:column;
  margin:auto;
  padding:1.6em 1.1em;
  width:200px;
`
const PersonImg = styled.span`
  margin:auto;
  min-height:200px;
`;

const PersonInfo = styled.span`
  text-overflow:ellipsis;
  overflow:hidden;
  white-space: nowrap;
  width:100%;
`;

const PersonInfoArea = styled.span`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  margin:auto;
  padding-bottom:2px;
  padding-top:8px;
  width:100%;
`;

const Card: FunctionComponent<{ person: Person, onClick: Function }> = ({ person, onClick }) => {
  const { name, age, eyeColor, company, email, picture } = person;
  const handler = (person: Person) => {
    window.scrollTo({ top: window.screenTop });
    onClick(person);
  }
  useEffect(() => {
    const objects = document.getElementsByClassName('placeholder');
    Array.from(objects).forEach((item: any) => {
      const img = new Image();
      img.src = item.dataset.src;
      img.onload = () => {
        item.classList.remove('placeholder');
        return item.nodeName === 'IMG' ?
          item.src = item.dataset.src :
          item.style.backgroundImage = `url(${item.dataset.src})`;
      };
    });
  }, [])
  return (
    <Container data-testid="personCard" onClick={(event: SyntheticEvent) => { event.preventDefault(); handler(person) }}>
      <PersonImg>
        <img src={loader} alt="carregando imagem..." className="placeholder" data-src={picture} />
      </PersonImg>
      <PersonInfoArea>
        <PersonInfo data-testid={name}>{`name: ${name}`}</PersonInfo>
        <PersonInfo>{`age: ${age}`}</PersonInfo>
        <PersonInfo>{`eyeColor: ${eyeColor}`}</PersonInfo>
        <PersonInfo>{`company: ${company}`}</PersonInfo>
        <PersonInfo>{`email: ${email}`}</PersonInfo>
      </PersonInfoArea>
    </Container>);
}

export default Card;