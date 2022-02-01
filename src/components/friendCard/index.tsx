import { CardContainer, FriendInfo } from "./style";
interface User {
  age: number;
  company: string;
  email: string;
  eyeColor: string;
  id: number;
  name: string;
  profilePic: string;
}
interface CardProps {
  card: User;
}

const FriendCard = ({ card }: CardProps) => {
  return (
    <CardContainer>
      <img src={card.profilePic} alt="" />
      <FriendInfo>
        <p>Name: {card.name}</p>
        <p>Age: {card.age}</p>
        <p>Eye color: {card.eyeColor}</p>
        <p>Company: {card.company}</p>
        <p>Email: {card.email}</p>
      </FriendInfo>
    </CardContainer>
  );
};

export default FriendCard;
