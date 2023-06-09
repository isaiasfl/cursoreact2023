import React, { useState } from "react";
import { Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
const GiphySearch = () => {
  const [searchItems, setsearchItems] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    // conexión con api diréctamente en el propio buscador. No es lo más apropiado. Ideal sacarlo fuera.
    try {
      const apiKey = "gFgSti0OySWTvG3uTn581egWqFHhjw6v"; // Aquí debes colocar tu propia clave de API de Giphy
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchItems}&limit=12`;
      const response = await fetch(url);
      const data = await response.json();
      setResults(data.data);
    } catch (error) {
      console.error(
        "Error al buscar los Gifs. Intente con otro elemento:",
        error
      );
    }
  };

  return (
    <Container className="mt-3 mb-3">
      <InputGroup className="mb-3 me-3 ms-3">
        <InputGroup.Text id="basic-addon1" className="me-3 ms-3">
          🏋️‍♀️{"    "}
        </InputGroup.Text>
        <input
          type="text"
          value={searchItems}
          onChange={(e) => setsearchItems(e.target.value)}
        />
        <button className="me-3 ms-3" onClick={handleSearch}>
          Search
        </button>
      </InputGroup>
      <Container className="mt-3 mb-3 me-3 ms-3">
        <Row className="justify-content-md-center">
          {results.map((gif) => (
            <Col key={gif.id}>
              <Card
                style={{ width: "18rem", height: "300px", width: "300px" }}
                className="bg-dark text-white mt-2 mb-2"
              >
                <Card.Img
                  variant="top"
                  src={gif.images.fixed_height.url}
                  alt={gif.title}
                />
                <Card.Body>
                  <Card.Title>{gif.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default GiphySearch;
