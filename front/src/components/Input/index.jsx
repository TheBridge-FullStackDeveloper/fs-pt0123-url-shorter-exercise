import Styled from './styles'

const Input = ({ label, name, register, validation, errors, ...rest }) => {
  return (
    <Styled.Wrapper>
        {!!label && <Styled.Label htmlFor={name}>{name}</Styled.Label>}
        <Styled.Input {...{ id: name, ...register(name, validation), ...rest }} />
        <Styled.Error>{errors?.message}</Styled.Error>
    </Styled.Wrapper>
  );
};

export default Input;
