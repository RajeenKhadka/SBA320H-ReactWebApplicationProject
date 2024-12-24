import { Link } from "react-router";
import ListDisplay from "../components/ListDisplay";
import { useState, useEffect } from "react";

function CharacterList() {
  const [characterList, setCharacterList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCharacterList(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  // Filter the character list based on the search term
  const filteredCharacters = characterList.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="btn">
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </div>
      <div className="container">
        <h1>Character List</h1>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Display filtered characters */}
        <ListDisplay characterList={{ results: filteredCharacters }} />
      </div>
    </div>
  );
}

export default CharacterList;
