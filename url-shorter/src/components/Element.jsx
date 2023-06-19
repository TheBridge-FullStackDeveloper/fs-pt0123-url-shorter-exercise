import styled from 'styled-components';
const Element = ({ title, name, type = 'text', rules, error, register }) => {
  return (
    <ElementContainer>
      <Title>{title}</Title>
      <ElementInput type={type} placeholder={title} {...register(name, rules)} />
      {error && <ErrorText>{error}</ErrorText>}
    </ElementContainer>
  );
};

export default Element;

const ErrorText = styled.span`
  color: red;
  font-size: 9px;
`;

const Title = styled.label`
  margin-top: 16px;
  font-size: 20px;
  font-style: italic;
`;

const ElementContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ElementInput = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 5px;
  margin-bottom: 16px;
  margin-top: 10px;
  font-style: italic;
`;
