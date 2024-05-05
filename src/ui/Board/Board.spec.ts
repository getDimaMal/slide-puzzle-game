import Board from './Board';

describe('Board', () => {
  it('should render component', () => {
    const board = new Board(document.body).render(4);

    expect(board.tagName.toLowerCase()).toBe('div');
    expect(board.classList.contains('board')).toBeTruthy();
  });
});
