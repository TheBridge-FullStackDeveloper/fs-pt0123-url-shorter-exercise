import Form from "../../components/Form";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Common from "../../styles";
import Styled from "./styles";

import { useState } from "react";
import Links from "../../components/Links";
import Modal from "../../components/Modal";
import { validations } from "../../constants";
import { useShortsList, useUrl, useUser } from "../../hooks";

const Panel = () => {
  const { data: user } = useUser();
  const { data: list } = useShortsList();
  const [shortUrl, generateUrl] = useUrl();
  const [showModal, setShowModal] = useState(false);
  const { required } = validations;

  if (showModal) return <Modal handleModal={setShowModal} />;

  return (
    <Common.Page>
      <Styled.User onClick={() => setShowModal(true)}>
        <p>{user.data.username}</p>
      </Styled.User>
      <Title>Panel</Title>

      <Form onSubmit={generateUrl} button="Generate" gap="5">
        <Input
          name="url"
          placeholder="https://paste-your-url-here.com"
          validation={{ required }}
        />
      </Form>

      <Styled.Generated>
        <a href={shortUrl} target="blank">{shortUrl}</a>
      </Styled.Generated>

      <Links list={list?.data?.shorts} />
    </Common.Page>
  );
};

export default Panel;
