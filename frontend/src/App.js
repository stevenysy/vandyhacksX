import "./App.css";
import Main from "./Main";

function App() {
  const appStyle = {
    backgroundImage: "url(/Background.png)",
    backgroundSize: "cover",
    height: "100vh",
  };

  return (
    <div className="App" style={appStyle}>
      <Main />
    </div>
  );
}

export default App;
