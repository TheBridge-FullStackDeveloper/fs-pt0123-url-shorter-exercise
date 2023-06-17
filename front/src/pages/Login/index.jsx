import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Styled from "../../styles";
import { Link } from "wouter";

import { validations } from "../../constants";

const Login = () => {
  const { required } = validations;

  const handleSubmit = (data) => {
    console.info("> data: ", data);
  };

  return (
    <Styled.Page>
      <Title>Login</Title>

      <Form onSubmit={handleSubmit} button="Create">
        <Input
          name="email"
          label={true}
          placeholder="email@domain.com"
          validation={{ required }}
        />
        <Input
          name="password"
          type="password"
          label={true}
          placeholder="******"
          validation={validations}
        />
      </Form>

      <Footer>
        <Link to="/register">Don't have account yet? Create one!</Link>
      </Footer>
    </Styled.Page>
  );
};

export default Login;
