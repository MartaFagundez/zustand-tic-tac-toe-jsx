import Square from "./Square";

export default function Board() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        width: 'calc(3 * 2.5rem)',
        height: 'calc(3 * 2.5rem)',
        border: '1px solid #999',
      }}
    >
      <Square value="1" onSquareClick={()=>{}} />
      <Square value="2" onSquareClick={()=>{}} />
      <Square value="3" onSquareClick={()=>{}} />
      <Square value="4" onSquareClick={()=>{}} />
      <Square value="5" onSquareClick={()=>{}} />
      <Square value="6" onSquareClick={()=>{}} />
      <Square value="7" onSquareClick={()=>{}} />
      <Square value="8" onSquareClick={()=>{}} />
      <Square value="9" onSquareClick={()=>{}} />
    </div>
  )
}
