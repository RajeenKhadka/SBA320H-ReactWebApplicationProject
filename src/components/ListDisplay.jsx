import { Link } from "react-router";

function ListDisplay({ characterList }) {
  if (!characterList || !characterList.results) {
    return <p>Loading characters...</p>;
  }

  return (
    <div className="flex-items">
      {characterList.results.map((character) => (
        <div key={character.id} className="card">
          <img src={character.image} alt={character.name} />
          <div className="container">
            <h4>
              <b>{character.name}</b>
            </h4>
            <p>{character.species}</p>
            {/* <p>{character.status}</p> */}
          </div>
          <Link to={`/characterinfo/${character.name}`}>
            <button>Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ListDisplay;
