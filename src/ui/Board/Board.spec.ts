import Board from './Board';

describe('Board', () => {
  it('should render component', () => {
    const component = new Board({ size: 4 }).render();

    expect(component.tagName.toLowerCase()).toBe('div');
    expect(component.classList.contains('board')).toBeTruthy();
  });
});
