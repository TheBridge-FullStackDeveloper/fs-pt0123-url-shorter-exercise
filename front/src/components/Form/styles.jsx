import { styled } from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ gap }) => gap ? gap : '35'}px;
`;

const Fields = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default {
  Form,
  Fields,
};
