import './styles/main.scss';
import * as styles from './index.module.scss';

export function createWelcomeElement(): HTMLElement {
  const element = document.createElement('div');
  element.classList.add(styles.welcome);
  element.append('Welcome!');
  return element;
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  root?.append(createWelcomeElement());
});
