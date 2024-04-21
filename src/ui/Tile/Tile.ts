import * as styles from './tile.module.scss';

export interface TileProps {
  value: number;
}

class Tile {
  private readonly element: HTMLElement;

  constructor(private props: TileProps) {
    const { value } = this.props;

    this.element = document.createElement('div');
    this.element.append(value ? value.toString() : '');
    this.element.classList.add(styles.tile);
  }

  render() {
    return this.element;
  }
}

export default Tile;
