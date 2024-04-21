import * as styles from './board.module.scss';

interface BoardProps {
  size: number;
}

class Board {
  private readonly element: HTMLElement;

  constructor(private props: BoardProps) {
    const { size } = this.props;

    this.element = document.createElement('div');
    this.element.style.setProperty('--size', size.toString());
    this.element.classList.add(styles.board);
  }

  render() {
    return this.element;
  }
}

export default Board;
