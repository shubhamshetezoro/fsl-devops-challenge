import IPv4Addr from "./IPv4Addr";
import "./App.css";

function App() {
  const unusedVariable = "This will cause a linting error";
  
  return (
    <div className="App">
      <header className="App-header">
        <div>CIDR Calculator - Failure Test ❌</div>
      </header>
      <IPv4Addr />
      <footer>
        <hr />
        If you find this tool useful, you might enjoy reading my blog:{" "}
        <a href="https://rderik.com">rderik.com</a>
      </footer>
    </div>
  );
}

export default App;
