import { create } from "zustand";
import { combine } from "zustand/middleware";
import { devtools } from "zustand/middleware";

const useGameStore = create(
  devtools(
    combine({ squares: Array(9).fill(null), xIsNext:true }, (set) => {
      return {
        setSquares: (nextSquares) => {
          set((state) => ({
            squares:
              typeof nextSquares === "function"
                ? nextSquares(state.squares)
                : nextSquares,
          }))
        },
        setXIsNext: (nextXIsNext) => {
            set((state) => ({
                xIsNext:
                    typeof nextXIsNext === "function"
                        ? nextXIsNext(state.xIsNext)
                        : nextXIsNext
            }))
        }
      }
    })
  )
);

export default useGameStore;
