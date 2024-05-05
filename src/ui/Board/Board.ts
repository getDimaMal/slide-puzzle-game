import * as styles from './board.module.scss';

class Board {
  private board: HTMLElement;

  constructor(private root: HTMLElement) {
    this.board = document.createElement('div');
    this.root.append(this.board);
  }

  render(size: number) {
    this.board.style.setProperty('--size', size.toString());
    this.board.classList.add(styles['board']);
    return this.board;
  }
}

export default Board;
