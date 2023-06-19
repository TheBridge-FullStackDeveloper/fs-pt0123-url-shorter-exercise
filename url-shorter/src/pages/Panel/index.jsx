import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { short } from '../../services';
import { useUser } from '../../hooks';
const Panel = ({ link }) => {
  const [url, setUrl] = useState('');
  const [urlGenereted, setUrlGenereted] = useState('');
  const [links, setLinks] = useState([]);
  const { data: user } = useUser();
  const handleSortUrl = async () => {
    const data = await short.generator(url);
    console.log(data.url);
    if (data?.url) {
      setUrlGenereted(data.url);
      handleGerUrls();
    }
  };

  const handleCopyUrlGenerated = async () => {
    await navigator.clipboard.writeText(url);
  };

  const handleGerUrls = async () => {
    const { links } = await short.getLinks();
    console.log(links);
    setLinks(links);
  };

  useEffect(() => {
    //traernos las urls
    handleGerUrls();
  }, []);
  return (
    <Container>
      <PanelContainer>
        <HeaderUsername></HeaderUsername>
        <Generator>
          <PageTitle>Panel</PageTitle>
          <InputGenerator value={url} onChange={(e) => setUrl(e.target.value)} />
          <GenareteButton disabled={!url?.trim()} onClick={handleSortUrl}>
            Generate
          </GenareteButton>

          <ResultUrl onClick={handleCopyUrlGenerated}>{urlGenereted}</ResultUrl>
        </Generator>
        <UrlList>
          {links.map((link, key) => {
            return (
              <LinkContainer key={key}>
                <LinkTop>
                  {key + 1}.{link.short_url}
                </LinkTop>
                <LinkBottom>
                  <UsesCreator>{`${link.uses_by_creator} yours`}</UsesCreator>
                  <AllUses>{`${link.uses} overall`}</AllUses>
                </LinkBottom>
              </LinkContainer>
            );
          })}
        </UrlList>
      </PanelContainer>
    </Container>
  );
};

export default Panel;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: solid 2px;
  border-radius: 20px;
  padding: 40px;
  width: 400px;
  height: 800px;
  overflow: auto;
`;
const InputGenerator = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 5px;
  margin-bottom: 16px;
  margin-top: 10px;
  font-style: italic;
`;

const HeaderUsername = styled.div``;

const Generator = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  font-size: 4em;
  font-style: italic;
`;

const GenareteButton = styled.div`
  border: 2px solid;
  border-radius: 5px;
  cursor: pointer;
  padding: 6px 8px;
  user-select: none;
  margin-top: 12px;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.4;
      pointer-events: none;
    `}
  &:hover {
    background-color: #00000012;
  }
`;

const ResultUrl = styled.div`
  margin-top: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid;
`;

const UrlList = styled.div`
  width: 100%;
  border: 2px solid;
  border-radius: 20px;
`;
const LinkContainer = styled.div`
  border-bottom: 2px solid;
  margin-bottom: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
`;
const LinkTop = styled.div`
  text-align: center;
`;
const LinkBottom = styled.div`
  display: flex;
`;
const UsesCreator = styled.div`
  flex: 1;
  text-align: center;
`;
const AllUses = styled.div`
  flex: 1;
  text-align: center;
`;
