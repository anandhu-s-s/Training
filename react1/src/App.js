import Home from "./Home";

const App = () => {
  const name = "Anandhu";
  return (
    <div className="App" style={{
      color: "blue"
    }}>
        Hello {name}
        <Home name={name} Phone='12345668789'/>
    </div>
  );
}

export default App;
