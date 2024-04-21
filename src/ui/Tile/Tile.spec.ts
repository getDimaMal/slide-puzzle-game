import Tile, { TileProps } from './Tile';

const getProps = (props: Partial<TileProps> = {}): TileProps => ({
  value: 0,
  ...props,
});

describe('Tile', () => {
  it('should render', () => {
    const res = new Tile(getProps()).render();

    expect(res.tagName.toLowerCase()).toBe('div');
    expect(res.classList.contains('tile')).toBeTruthy();
  });

  it('should render NOT empty', () => {
    const props = getProps({ value: 1 });
    const res = new Tile(props).render();

    expect(res.firstChild?.textContent).toEqual(props.value.toString());
  });
});
