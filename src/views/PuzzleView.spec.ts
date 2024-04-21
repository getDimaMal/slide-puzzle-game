import PuzzleView, { PuzzleViewProps } from './PuzzleView';

const getProps = (props: Partial<PuzzleViewProps> = {}): PuzzleViewProps => ({
  size: 4,
  board: [[1]],
  ...props,
});

describe('PuzzleView', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should render', () => {
    const puzzleView = new PuzzleView({ ...getProps() });
    document.body.append(puzzleView.render());

    expect(document.getElementsByClassName('board')[0]).toBeInTheDocument();
    expect(document.getElementsByClassName('tile')[0]).toBeInTheDocument();
  });

  it('should update', () => {
    const puzzleView = new PuzzleView({ ...getProps() });

    document.body.append(puzzleView.render());

    expect(document.getElementsByClassName('tile')[0].textContent).toBe('1');

    puzzleView.update([[2]]);

    expect(document.getElementsByClassName('tile')[0].textContent).toBe('2');
  });
});
