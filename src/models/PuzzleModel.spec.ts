import PuzzleModel from './PuzzleModel';

describe('PuzzleModel', () => {
  const grid = [
    [1, 2, 3, 4],
    [5, 6, 7, 0],
  ];

  it('should genGrid', () => {
    const puzzleModel = new PuzzleModel();
    const result = puzzleModel['genGrid'](4);

    expect(result.length).toBe(4);
    expect(result[0].length).toBe(4);
  });

  it('should shuffleGrid', () => {
    const puzzleModel = new PuzzleModel();
    const result = puzzleModel['shuffleGrid'](grid);

    expect(result).toEqual(grid);
  });

  it('should locateBlank', () => {
    const puzzleModel = new PuzzleModel();
    puzzleModel['grid'] = [[...grid[0]], [...grid[1]]];
    puzzleModel['locateBlank']();

    expect(puzzleModel['blankRow']).toBe(1);
    expect(puzzleModel['blankCol']).toBe(3);
  });

  it.each<[[number, number], number[]]>([
    [
      [0, 3],
      [1, 0],
    ],

    [
      [1, 2],
      [0, 1],
    ],

    [
      [0, 2],
      [0, 0],
    ],
  ])('should moveTile with: %s', (coord, result) => {
    const puzzleModel = new PuzzleModel();
    puzzleModel['grid'] = [[...grid[0]], [...grid[1]]];
    puzzleModel['locateBlank']();

    expect(puzzleModel.moveTile(...coord)).toEqual(result);
  });

  it('should getGrid', () => {
    const puzzleModel = new PuzzleModel();
    puzzleModel['grid'] = [[...grid[0]], [...grid[1]]];

    expect(puzzleModel.getGrid()).toEqual(grid);
  });
});
