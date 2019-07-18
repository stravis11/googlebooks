import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import "./style.css";

export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function BookListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  authors,
  description,
  href,
  id,
  handleSave,
  props
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <a
              href={href}
              className="btn btn-info link"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              Read Book
            </a>
            <button
              type="button"
              onClick={() => handleSave(id)}
              className="btn btn-success"
            >
              Save Book
            </button>
            <h3>{title}</h3>
            <h3>{authors}</h3>
            <p>Synopsis: {description}</p>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
