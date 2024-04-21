import { createWelcomeElement } from './index';

describe('DOM element creation', () => {
  it('creates an element with the welcome class', () => {
    const element = createWelcomeElement();
    expect(element).toHaveClass('welcome');
  });
});
