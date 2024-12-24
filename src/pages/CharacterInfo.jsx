import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";

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
      <div className="character-container">
        <h2>Name: {oneCharacter.name}</h2>
        <div className="flex-character">
          <div>
            <img
              className="character-img"
              src={oneCharacter.image}
              alt={oneCharacter.name}
            />
          </div>
          <div>
            <p>Species: {oneCharacter.species}</p>
            <p>Status: {oneCharacter.status}</p>
            <p>Origin: {oneCharacter.origin.name}</p>
            <p>Gender: {oneCharacter.gender}</p>
          </div>
        </div>
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

  return (
    <div>
      <div className="btn">
        <Link to={"/characterlist"}>
          <button>Go Back To Characters</button>
        </Link>
      </div>
      {oneCharacter ? loaded() : loading()}
    </div>
  );
}

export default CharacterInfo;
