import "./assets/css/App.css";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import RouteMap from "./routes";

function App() {
  return (
    <>
      <Router>
        <RouteMap />
      </Router>
    </>
  );
}

export default App;
