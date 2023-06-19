import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { templates } from '../../misc/templates';
import Element from '../../components/Element';
import { useRegister } from '../../hooks';

const SignUp = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = templates.validationTemplates;
  const doRegister = useRegister();

  return (
    <Container>
      <Form onSubmit={handleSubmit(doRegister)}>
        <PageTitle> Register </PageTitle>
        <Element title="Username" name="username" register={register} rules={{ required: true }} error={formState.errors && errors[formState.errors?.username?.type]} />
        <Element title="Email" name="email" register={register} rules={{ required: true }} error={formState.errors && errors[formState.errors?.email?.type]} />
        <Element title="Password" name="password" register={register} rules={{ required: true, minLength: 4 }} error={formState.errors && errors[formState.errors?.password?.type]} />
        <Submit type="submit" />
        <LoginLink>
          Do you have an account?<Link href="http://localhost:5173/signin">Login</Link>
        </LoginLink>
      </Form>
    </Container>
  );
};

export default SignUp;

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
  margin-bottom: 16px;
`;
const LoginLink = styled.p`
  margin-top: 100px;
  font-style: italic;
`;

const Link = styled.a`
  font-size: 16px;
`;
