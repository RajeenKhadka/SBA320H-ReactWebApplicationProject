import { Route, Routes } from "react-router";
import Welcome from "./pages/Welcome";
import CharacterList from "./pages/CharacterList";
import "./App.css";
import CharacterInfo from "./pages/CharacterInfo";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/characterlist" element={<CharacterList />}></Route>
        <Route path="/characterinfo/:name" element={<CharacterInfo />}></Route>
      </Routes>
    </>
  );
}

export default App;
