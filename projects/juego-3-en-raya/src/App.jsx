import "./App.css";

const TURNS = {
  X: "x",
  O: "o",
};
const Square = ({ children, updateBoard, index }) => {
  return <div className="square">{children}</div>;
};
const board = Array(9).fill(null);

function App() {
  return (
    <main className="board">
      <h1>Juego 3 en raya</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index}>
              {index}
            </Square>
          );
        })}
      </section>
    </main>
  );
}

export default App;
