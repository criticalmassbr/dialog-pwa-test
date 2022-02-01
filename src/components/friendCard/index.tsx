import { CardContainer } from "./style";
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
  return <CardContainer></CardContainer>;
};

export default FriendCard;
