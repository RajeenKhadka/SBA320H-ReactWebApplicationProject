import { Route, Routes } from "react-router";
import Welcome from "./pages/Welcome";
import CharacterList from "./pages/CharacterList";
import "./App.css";
import CharacterInfo from "./pages/CharacterInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />}></Route>
      <Route path="/characterlist" element={<CharacterList />}></Route>
      <Route path="/characterinfo/:name" element={<CharacterInfo />}></Route>
    </Routes>
  );
}

export default App;
