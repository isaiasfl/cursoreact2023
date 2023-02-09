import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import GuardarPiezas from "./components/GuardarPiezas";
import MostrarPiezas from "./components/MostrarPiezas";
import { getAll } from "./helpers/acceso-firebase";
import "./index.css";
function App() {
  const [pieza, setPieza] = useState(null);

  // async-await (try/catch)
  async function getData() {
    const data = await getAll();
    setPieza(data);
    return data;
  }

  useEffect(() => {
    // then-catch
    // getAll().then((res) => {
    //   setPieza(res);
    // });
    getData();
  }, []);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <GuardarPiezas handlePieza={{ pieza, setPieza }} />
          </Col>
          <Col>
            {pieza && <MostrarPiezas handlePieza={{ pieza, setPieza }} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
