import { Link } from "react-router";

function ListDisplay({ characterList }) {
  return (
    <div className="flex-items">
      {characterList.results.length === 0 ? (
        <p>No characters found</p>
      ) : (
        characterList.results.map((character) => (
          <div className="card" key={character.id}>
            <img src={character.image} alt={character.name} />
            <div className="container">
              <h4>
                <b>{character.name}</b>
              </h4>
              <p>{character.species}</p>
              <p>{character.status}</p>
            </div>
            <Link to={`/characterinfo/${character.name}`}>
              <button>Details</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
}

export default ListDisplay;
