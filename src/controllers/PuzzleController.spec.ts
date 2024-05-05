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

    model = new PuzzleModel() as jest.Mocked<PuzzleModel>;
    view = new PuzzleView(document.body) as jest.Mocked<PuzzleView>;

    controller = new PuzzleController(model, view);
  });

  it('should initialize', () => {
    expect(model.getGrid).toHaveBeenCalled();
    expect(view.render).toHaveBeenCalledWith(model.getGrid());
  });

  it('should moveTile', () => {
    jest.spyOn(model, 'moveTile').mockReturnValue([1, 2]);
    controller['moveTile'](3, 4);

    expect(view.slide).toHaveBeenCalledWith(3, 4, 1, 2);
    expect(view.render).toHaveBeenCalledWith(model.getGrid());
  });
});
