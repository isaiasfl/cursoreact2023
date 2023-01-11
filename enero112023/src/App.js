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
      <Card
        url={
          nombres.genero[0] === "masculino"
            ? "https://randomuser.me/api/portraits/men/0.jpg"
            : "https://randomuser.me/api/portraits/women/0.jpg"
        }
      />
    </div>
  );
}

export default App;
