import PuzzleModel from '@/models/PuzzleModel';
import PuzzleView from '@/views/PuzzleView';
import PuzzleController from './PuzzleController';

jest.mock('@/models/PuzzleModel');
jest.mock('@/views/PuzzleView');

describe('PuzzleController', () => {
  let model: jest.Mocked<PuzzleModel>;
  let view: jest.Mocked<PuzzleView>;
  let controller: PuzzleController;

  beforeEach(() => {
    jest.clearAllMocks();

    model = new PuzzleModel({ size: 4 }) as jest.Mocked<PuzzleModel>;
    view = new PuzzleView({ size: 4 }) as jest.Mocked<PuzzleView>;

    view.board = document.createElement('div');

    controller = new PuzzleController(model, view);
  });

  it('should initialize', () => {
    expect(model.getBoard).toHaveBeenCalled();
    expect(view.update).toHaveBeenCalledWith(model.getBoard());
  });

  it('should set click event listener', () => {
    controller['update'] = jest.fn();

    const event = new MouseEvent('click');
    view.board.dispatchEvent(event);

    expect(controller['update']).toHaveBeenCalled();
  });

  it('should call update', () => {
    const board = [[1]];

    jest.clearAllMocks();
    model.getBoard.mockReturnValue(board);

    controller['update']();

    expect(model.setBoard).toHaveBeenCalledWith(expect.any(Array));
    expect(model.getBoard).toHaveBeenCalledTimes(1);
    expect(view.update).toHaveBeenCalledWith(board);
  });
});
