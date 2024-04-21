type BoardType = number[][];

export type PuzzleModelProps = {
  size: number;
};

class PuzzleModel {
  private board: BoardType;

  constructor(private props: PuzzleModelProps) {
    this.board = this.generateBoard();
  }

  private generateBoard() {
    const { size } = this.props;

    const board = Array.from({ length: size }, (_, row) =>
      Array.from({ length: size }, (_, col) => row * size + col + 1),
    );

    board[size - 1][size - 1] = 0;

    return board;
  }

  public getBoard() {
    return this.board;
  }

  public setBoard(newBoard: BoardType) {
    this.board = newBoard;
  }
}

export default PuzzleModel;
