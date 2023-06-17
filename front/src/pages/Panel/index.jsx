import Form from "../../components/Form";
import Input from "../../components/Input";
import Title from "../../components/Title";
import Common from "../../styles";
import Styled from "./styles";
import { Link } from "wouter";

import { validations } from "../../constants";
import { useState } from "react";
import Modal from "../../components/Modal";
import Links from "../../components/Links";

const fixtures = [
  { link: "http://localhost:4000/short/34tGhK32", yours: "12", overall: "113" },
  { link: "http://localhost:4000/short/34tGhK32", yours: "12", overall: "113" },
  { link: "http://localhost:4000/short/34tGhK32", yours: "12", overall: "113" },
  { link: "http://localhost:4000/short/34tGhK32", yours: "12", overall: "113" },
  { link: "http://localhost:4000/short/34tGhK32", yours: "12", overall: "113" },
  { link: "http://localhost:4000/short/34tGhK32", yours: "12", overall: "113" },
];

const shortLink = 'http://localhost:4000/short/34tGhKll'

const Panel = () => {
  const [showModal, setShowModal] = useState(false);
  const { required } = validations;

  const handleSubmit = (data) => {
    console.info("> data: ", data);
  };

  if (showModal) return <Modal handleModal={setShowModal} />;

  return (
    <Common.Page>
      <Styled.User onClick={() => setShowModal(true)}>
        <p>Molpe</p>
      </Styled.User>
      <Title>Panel</Title>

      <Form onSubmit={handleSubmit} button="Generate" gap="5">
        <Input
          name="url"
          placeholder="https://paste-your-url-here.com"
          validation={{ required }}
        />
      </Form>

      <Styled.Generated>
        <Link href={shortLink}>{shortLink}</Link>
      </Styled.Generated>

      <Links list={fixtures} />
    </Common.Page>
  );
};

export default Panel;
