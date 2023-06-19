import styled from 'styled-components';

const Section = styled.section`
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    label {
      font-size: 16px;
      margin-bottom: 5px;
    }

    input {
      padding: 8px;
      margin-bottom: 10px;
      width: 100%;
      font-size: 16px;
    }

    p {
      color: red;
      font-size: 14px;
      margin-bottom: 10px;
    }

    input[type="submit"] {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      font-size: 16px;
      border: none;
      cursor: pointer;
    }
  }
`;

export default Section;