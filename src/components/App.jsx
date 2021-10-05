import "./App.css";

import Header from "./Header";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      {/* Шапка сайта */}
      <Header />
      {/* Роуты */}
      <Routes />
    </div>
  );
}

export default App;
