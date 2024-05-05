import Tile from './Tile';

jest.mock('@/utils', () => ({ getFullWidth: jest.fn() }));

describe('Tile', () => {
  it('should render', () => {
    const value = 1;
    const tile = new Tile(document.body).render(value);

    expect(tile.textContent).toBe(value.toString());
    expect(tile.tagName.toLowerCase()).toBe('div');
    expect(tile.classList.contains('tile')).toBeTruthy();
  });

  it('should render empty', () => {
    const tile = new Tile(document.body).render(0);

    expect(tile.textContent).toBe('');
    expect(tile.className.includes('empty')).toBeTruthy();
  });

  it.each<['X' | 'Y', [number, number]]>([
    ['X', [0, 1]],
    ['Y', [1, 0]],
  ])('should move tile by: %s', async (axis, args) => {
    jest.spyOn(await import('@/utils'), 'getFullWidth').mockReturnValue(100);

    const tile = new Tile(document.body);
    const result = tile.render(1);
    const promise = tile.slide(...args);

    expect(result).toHaveClass('tile--slide');
    expect(result).toHaveStyle(`--time: 124ms;`);
    expect(result).toHaveStyle(`--from: translate${axis}(0px);`);
    expect(result).toHaveStyle(`--to: translate${axis}(100px);`);

    await promise;

    expect(result).not.toHaveAttribute('style');
    expect(result).not.toHaveClass('tile-slide');
  });

  it('should call onClick', () => {
    const tile = new Tile(document.body);
    tile.onClick = jest.fn();
    tile.render(1).dispatchEvent(new Event('click'));

    expect(tile.onClick).toHaveBeenCalledTimes(1);
  });
});
