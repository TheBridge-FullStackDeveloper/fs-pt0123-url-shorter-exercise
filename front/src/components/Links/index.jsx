import Styled from "./styles";
import { Link } from "wouter";

const Links = ({ list }) => {
  return (
    <Styled.Links>
      {list.map((element, id) => {
        return (
          <Styled.Element key={id}>
            <Link href={element.link}>{element.link}</Link>
            <Styled.Stats>
              <span>{element.yours} yours</span>{" "}
              <span>{element.overall} overall</span>
            </Styled.Stats>
          </Styled.Element>
        );
      })}
    </Styled.Links>
  );
};

export default Links;
