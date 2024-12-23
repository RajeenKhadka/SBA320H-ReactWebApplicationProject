import ListDisplay from "../components/ListDisplay";
import { useState, useEffect } from "react";

function CharacterList() {
  const [character, setCharacter] = useState({});

  let url = "https://rickandmortyapi.com/api/character";

  //Get list of all Characters
  const getCharacters = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setCharacter(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCharacters(url);
  }, []);

  return (
    <>
      <ListDisplay characterList={character} getCharacters={getCharacters} />
    </>
  );
}

export default CharacterList;
