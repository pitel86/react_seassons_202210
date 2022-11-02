import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import SubComponents from "./components/SubComponents";
import Library from "./components/Library";

function App() {
  const title = "mi titulo";
  const subtitle = "mi subtitulo";

  const colores = ["red", "green", "yellow", "blue", "purple", "orange"]

  const books = [{
    title: "El guardian entre el centeno",
    author: "JD Sallinger"
  },{
    title: "El señor de los anillos",
    author: "JR Tolkien"
  },{
    title: "Quijote",
    author: "Cervantes"
  }]
  return (
    <div className="App">

      <Library libros={books}/>



      {/* <Title titulo={title} subtitulo={subtitle}>
        <SubComponents colors={colores}/>
      </Title>
      <Title titulo="pepito"></Title> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to asdasdasd.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
