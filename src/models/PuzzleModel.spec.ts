import PuzzleModel, { PuzzleModelProps } from './PuzzleModel';

const getProps = (props: Partial<PuzzleModelProps> = {}): PuzzleModelProps => ({
  size: 4,
  ...props,
});

describe('PuzzleModel', () => {
  it('should getBoard', () => {
    const props = getProps();
    const puzzleModel = new PuzzleModel({ ...props });
    const board = puzzleModel.getBoard();

    expect(Array.isArray(board)).toBeTruthy();
    expect(board.length).toBe(props.size);

    expect(Array.isArray(board[0])).toBeTruthy();
    expect(board[0].length).toBe(props.size);
  });

  it('should setBoard', () => {
    const puzzleModel = new PuzzleModel({ ...getProps({ size: 3 }) });
    const board = Array(4)
      .fill(null)
      .map((_, index) => Array(4).fill(index));

    expect(puzzleModel.getBoard()).not.toEqual(board);

    puzzleModel.setBoard(board);

    expect(puzzleModel.getBoard()).toEqual(board);
  });
});
