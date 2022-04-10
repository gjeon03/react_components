import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Components from "./Routes/Components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Components />} />
      </Routes>
    </Router>
  );
}

export default App;
