import PuzzleView, { PuzzleViewProps } from './PuzzleView';

const getProps = (props: Partial<PuzzleViewProps> = {}): PuzzleViewProps => ({
  size: 4,
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
  });

  it('should update', () => {
    const puzzleView = new PuzzleView({ ...getProps() });

    document.body.append(puzzleView.render());

    expect(document.getElementsByClassName('tile').length).toBe(0);

    puzzleView.update([[1]]);
    expect(document.getElementsByClassName('tile').length).toBe(1);
    expect(document.getElementsByClassName('tile')[0].textContent).toBe('1');

    puzzleView.update([[2]]);
    expect(document.getElementsByClassName('tile').length).toBe(1);
    expect(document.getElementsByClassName('tile')[0].textContent).toBe('2');
  });
});
