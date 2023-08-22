import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ListConteiner";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer
        mensaje={"Donde encontraras todo lo necesario para tus fiestas !!  "}
      />
    </div>
  );
}

export default App;
