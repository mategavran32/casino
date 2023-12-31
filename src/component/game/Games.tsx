import { useMemo } from "react";
import { useData } from "../../hooks/useData";
import "../../styles/Games.scss";
import Game from "./Game";
import { GameData } from "../../types";
import ScrollableContainer from "../utils/ScrollableContainer";
import { Link } from "react-router-dom";
interface GameProps {
  publisher?: string;
}

function Games({ publisher }: GameProps) {
  const { data } = useData();

  const filteredData = useMemo(() => {
    if (Array.isArray(data)) {
      return data.filter((game: GameData) => game.publisher === publisher);
    }
    return [];
  }, [data, publisher]);
  const limitedData = useMemo(() => filteredData.slice(0, 12), [filteredData]);

  if (!Array.isArray(data)) {
    return <div>Loading</div>;
  }

  return (
    <div className="gamesContainer">
      <div className="titleDiv">
        <h2>{publisher} Games</h2>
        <Link to={`/allgames`}>
          <p>Show All {">"}</p>
        </Link>
      </div>
      <ScrollableContainer>
        {limitedData.map((game: GameData) => (
          <div className={`game${game.id}`} key={game.id}>
            <Game key={game.id} data={game} />
          </div>
        ))}
      </ScrollableContainer>
    </div>
  );
}

export default Games;
