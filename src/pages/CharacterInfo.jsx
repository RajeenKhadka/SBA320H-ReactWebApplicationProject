import { useParams } from "react-router";
import { useState, useEffect } from "react";

function CharacterInfo() {
  const [oneCharacter, setOneCharacter] = useState(null);

  const params = useParams();
  const characterName = params.name;

  let url = "https://rickandmortyapi.com/api/character";

  const getOneCharacter = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      // Loop through the results and find the character by name
      data.results.forEach((character) => {
        if (characterName === character.name) {
          setOneCharacter(character);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (characterName) {
      getOneCharacter(url);
    }
  }, [characterName]); // Fetch when characterName changes

  const loaded = () => {
    return (
      <div>
        <h2>Name: {oneCharacter.name}</h2>
        <img src={oneCharacter.image} alt={oneCharacter.name} />
        <p>Species: {oneCharacter.species}</p>
        <p>Status: {oneCharacter.status}</p>
      </div>
    );
  };

  const loading = () => {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  };

  return <div>{oneCharacter ? loaded() : loading()}</div>;
}

export default CharacterInfo;
