import { Container, Input } from "./styles";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <Container>
      <img
        src="https://www.projetodraft.com/wp-content/uploads/2020/04/logo-dialog.jpg"
        alt="dialog logo"
      />
      <Input>
        <input type="text" placeholder="Search" />
        <button>
          <BsSearch />
        </button>
      </Input>
    </Container>
  );
};

export default Header;
