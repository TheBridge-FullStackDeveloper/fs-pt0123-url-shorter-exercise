import { styled } from "styled-components";

const Links = styled.section`
  height: 40%;
  width: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid;
  padding-top: 20px;
`;

const Element = styled.div`
  a {
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
  }
`;

const Link = styled.p``;

const Stats = styled.p`
  display: flex;
  justify-content: space-around;

  span {
    border-bottom: 1px solid;
  }
`;

export default {
  Links,
  Element,
  Link,
  Stats,
};
