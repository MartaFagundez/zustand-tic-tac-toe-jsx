import Square from "./Square";
import useGameStore from "../store";

export default function Board() {
  const xIsNext = useGameStore((state) => state.xIsNext);
  const setXIsNext = useGameStore((state)=> state.setXIsNext)
  const squares = useGameStore((state) => state.squares);
  const setSquares = useGameStore((state) => state.setSquares);
  const player = xIsNext ? "X" : "O"

  function handleClick(i) {
    if (squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    setSquares(nextSquares);
    setXIsNext(!xIsNext)
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        width: "calc(3 * 2.5rem)",
        height: "calc(3 * 2.5rem)",
        border: "1px solid #999",
      }}
    >
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onSquareClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
