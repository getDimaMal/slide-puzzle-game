import Board from '@/ui/Board';
import Tile from '@/ui/Tile';
import PuzzleView from './PuzzleView';

jest.mock('@/ui/Board', () => {
  return jest.fn().mockImplementation(() => ({ render: jest.fn() }));
});

jest.mock('@/ui/Tile', () => {
  return jest.fn().mockImplementation(() => ({
    onClick: null,
    slide: jest.fn(),
    render: jest.fn(),
  }));
});

describe('PuzzleView class', () => {
  const mockGrid = [[1, 2]];
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  test('initialRender properly initializes tiles', () => {
    const puzzleView = new PuzzleView(container);
    puzzleView.render(mockGrid);

    expect(Board).toHaveBeenCalledTimes(1);
    expect(Tile).toHaveBeenCalledTimes(2);
  });

  test('onTileClick is triggered on tile click', () => {
    const puzzleView = new PuzzleView(container);
    puzzleView.render(mockGrid);
    puzzleView.onTileClick = jest.fn();
    puzzleView['tiles'][0][0].onClick();

    expect(puzzleView.onTileClick).toHaveBeenCalledWith(0, 0);
  });

  test('slide method triggers tile slide', () => {
    const puzzleView = new PuzzleView(container);
    puzzleView.render(mockGrid);
    puzzleView.slide(0, 0, 1, 1);

    expect(puzzleView['tiles'][0][0].slide).toHaveBeenCalledWith(1, 1);
  });

  test('render updates existing tiles', () => {
    const puzzleView = new PuzzleView(container);
    puzzleView.render(mockGrid);
    puzzleView.render([[3, 4]]);

    expect(puzzleView['tiles'][0][0].render).toHaveBeenCalledWith(3);
    expect(puzzleView['tiles'][0][1].render).toHaveBeenCalledWith(4);
  });
});
