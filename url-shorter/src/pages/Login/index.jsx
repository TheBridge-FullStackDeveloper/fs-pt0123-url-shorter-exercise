import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { templates } from '../../misc/templates';
import Element from '../../components/Element';
import { useLogin, useGuard } from '../../hooks';

const Signin = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = templates.validationTemplates;
  const doLogin = useLogin();
  useGuard();

  return (
    <Container>
      <Form onSubmit={handleSubmit(doLogin)} defaultValues={{ email: 'alberto@gmail.com' }}>
        <PageTitle> Login </PageTitle>
        <Element title="Email" name="email" register={register} rules={{ required: true }} error={formState.errors && errors[formState.errors?.email?.type]} />
        <Element title="Password" type="password" name="password" register={register} rules={{ required: true }} error={formState.errors && errors[formState.errors?.password?.type]} />
        <Submit type="submit" />
        <RegisterLink>
          You do not have an account?<Link href="http://localhost:5173/signup">Register</Link>
        </RegisterLink>
      </Form>
    </Container>
  );
};

export default Signin;

const Link = styled.a`
  font-size: 16px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: solid 2px;
  border-radius: 20px;
  padding: 40px;
  width: 400px;
  height: 800px;
  flex-wrap: wrap;
`;

const Submit = styled.input`
  border: solid 1px;
  border-radius: 5px;
  width: 100px;
  height: 35px;
  margin-top: 16px;
`;

const PageTitle = styled.h1`
  font-size: 4em;
  font-style: italic;
`;

const RegisterLink = styled.p`
  margin-top: 200px;
  font-style: italic;
`;
