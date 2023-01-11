import uuid from "react-uuid";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const nombres = [
    {
      nombre: "Antonio",
      profesion: "Dev",
      genero: "masculino",
    },
    {
      nombre: "Carla",
      profesion: "Front",
      genero: "femenino",
    },
  ];

  return (
    <div className="App">
      <ul>
        {nombres.map((element) => {
          return (
            <li key={uuid()}>
              <Card nombre={element.nombre} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
