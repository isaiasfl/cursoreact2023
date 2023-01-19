import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./App.css";
import DatosApi from "./components/DatosApi";
import Selector from "./components/Selector";
import TarjetaPelicula from "./components/TarjetaPelicula";
function App() {
  // estado llevado al padre para poder tratar la info de las películas.

  const [idSeleccionado, setIdSeleccionado] = useState(false);

  return (
    <div className="App">
      <h1>Datos Api:</h1>
      <h2>Usuarios</h2>
      <hr />
      <Container>
        <Row>
          <Col xs={4}>
            {/* <UsandoUseEffect /> */}
            <Selector setIdSeleccionado={setIdSeleccionado} />
          </Col>
          <Col md="auto">
            {/* <DatosApi /> */}
            <TarjetaPelicula
              idSeleccionado={idSeleccionado}
              setIdSeleccionado={setIdSeleccionado}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
