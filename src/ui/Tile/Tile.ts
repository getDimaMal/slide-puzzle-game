import { getFullWidth } from '@/utils';
import * as styles from './tile.module.scss';

class Tile {
  private tile: HTMLElement;
  public onClick!: () => void;

  constructor(private root: HTMLElement) {
    this.tile = document.createElement('div');
    this.root.append(this.tile);
  }

  private handleClick = (event: Event) => {
    event.preventDefault();
    this.onClick();
  };

  slide = (row: number, col: number) => {
    const time = 124;
    const axis = row ? 'Y' : 'X';
    const width = getFullWidth(this.tile);
    const getTranslate = (value: number) => `translate${axis}(${value}px)`;

    return new Promise((resolve) => {
      this.tile.style.setProperty('--time', `${time}ms`);
      this.tile.style.setProperty('--from', getTranslate(0));
      this.tile.style.setProperty('--to', getTranslate(width * (row || col)));
      this.tile.classList.add(styles['tile--slide']);

      setTimeout(() => {
        this.tile.classList.remove(styles['tile--slide']);
        this.tile.removeAttribute('style');
        resolve(null);
      }, time);
    });
  };

  render(value: number) {
    this.tile.textContent = value ? value.toString() : '';
    this.tile.className = value ? styles['tile'] : `${styles['tile']} ${styles['tile--empty']}`;
    if (value) {
      this.tile.addEventListener('click', this.handleClick);
      this.tile.addEventListener('touchend', this.handleClick);
    } else {
      this.tile.removeEventListener('click', this.handleClick);
      this.tile.removeEventListener('touchend', this.handleClick);
    }

    return this.tile;
  }
}

export default Tile;
