import { useAuth } from "../../hooks";
import Styled from "../../styles";
import Button from "../Button";
import Title from "../Title";

const Modal = ({ handleModal }) => {
  const { logout } = useAuth();

  return (
    <Styled.Page vertical="center">
      <Title tag="h2" position="center">
        You are about to leave!
      </Title>
      <Title tag="h3">Are you sure?</Title>
      <Button onClick={() => handleModal(false)}>Nop</Button>
      <p onClick={logout}>Yeah</p>
    </Styled.Page>
  );
};

export default Modal;
