import React from "react";
import { Card, Image } from "semantic-ui-react";

const CardPost = ({ image, title, article_text, id }) => (
  <Card key={id}>
    <Image size="tiny" src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Description>{article_text}</Card.Description>
    </Card.Content>
  </Card>
);

export default CardPost;
