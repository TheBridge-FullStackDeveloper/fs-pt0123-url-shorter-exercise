import styled from 'styled-components';

const Section = styled.section`
  padding: 20px;
 
  
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

    button[type="submit"] {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      font-size: 16px;
      border: none;
      cursor: pointer;
      margin-top: 10px;
    }
  }

  ul {
    border: 1px solid black;
    display: flex;
    background-color: floralwhite;
    list-style: none;
    padding: 0;
    align-content: flex-end;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;

    li {
      margin-top: 10px;
    display: flex;
    margin-bottom: 10px;
    justify-content: space-around;
      margin-bottom: 10px;
    }
  }
`;

export default Section;