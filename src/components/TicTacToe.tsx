import { useEffect, useState } from "react";

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  const winner = (squares:string[]) => {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];

    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  };

  const handleClick = (currentSquare: number) => {
    let cpySquares = [...squares];
    if (winner(cpySquares) || cpySquares[currentSquare]) return;
    cpySquares[currentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  };

  useEffect(() => {
    if (!winner(squares) && squares.every((item) => item !== "")) {
      setStatus("This is a Draw! Please restart the game");
    } else if (winner(squares)) {
      setStatus(`Winner is ${winner(squares)}`);
    } else {
      setStatus(`Next Player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  const handleRestart=()=>{
    setIsXTurn(true)
    setSquares(Array(9).fill(""))
  }

  return (
    <>
    <div className="flex flex-col border border-red-300  justify-center mt-10 items-center mx-auto w-[303px]   ">
      <div className="flex   ">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="flex  ">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="flex  ">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
    <div className="flex flex-col w-1/2 mx-auto justify-center">
      <h1 className="text-2xl text-center mt-7">{status} </h1>
      <button className="bg-gray-300 px-2 py-1 rounded-md mt-2 w-1/2 mx-auto" onClick={handleRestart}>Restart</button>

    </div>
      </>
  );
};

export default TicTacToe;

type SquareType = {
  value: string[];
  onClick: () => void;
};

const Square = ({ value, onClick }: SquareType) => {
  return (
    <button
      onClick={onClick}
      className=" bg-gray-100 text-6xl p-2 border border-red-300  h-[100px] w-[100px]"
    >
      {value}{" "}
    </button>
  );
};
