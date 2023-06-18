import { Link } from "wouter";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Styled from "../../styles";

import { validations } from "../../constants";
import { useAuth } from "../../hooks/useAuth";
import { useLogged } from "../../hooks";

const Login = () => {
  useLogged()
  const { login } = useAuth();
  const { required } = validations;

  return (
    <Styled.Page>
      <Title>Login</Title>

      <Form onSubmit={login} button="Create">
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
