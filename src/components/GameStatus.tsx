type NameProp = {
  enemyPlayerName: string;
  name: string;
};

function GameStatus({ enemyPlayerName, name }: NameProp) {
  return (
    <div>
      <h1>{enemyPlayerName}</h1>
      <h1>{name}</h1>
    </div>
  );
}

export default GameStatus;
