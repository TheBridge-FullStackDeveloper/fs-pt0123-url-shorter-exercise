import Styled from "./styles";

const Links = ({ list = [] }) => {
  return (
    <Styled.Links>
      {list.map((element, id) => {
        return (
          <Styled.Element key={id}>
            <a href={element.url} target="blank">
              {element.url}
            </a>
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
