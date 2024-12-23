import { Link } from "react-router";
function Welcome() {
  return (
    <>
      <div className="home-container">
        <h1>Welcome to the Rick and Morty Character Explorer!</h1>
        <p>
          Dive into the wacky, unpredictable world of Rick and Morty with our
          easy-to-use character database! Powered by a free API, our website
          lets you discover detailed profiles of your favorite characters from
          the iconic animated series. Whether you're a fan of the genius
          scientist Rick, his adventurous grandson Morty, or any of the
          countless bizarre beings they encounter, you're in the right place.
        </p>
        <p>
          Browse through characters and get quick access to all the essential
          details—from their appearance to their role in the show. Stay
          up-to-date with the latest characters added and immerse yourself in
          the Rick and Morty universe like never before.
        </p>
        <p>
          Join the adventure now and start exploring the characters of Rick and
          Morty!
        </p>

        <Link to={"/characterlist"}>
          <button>Browse Characters</button>
        </Link>
      </div>
    </>
  );
}

export default Welcome;
