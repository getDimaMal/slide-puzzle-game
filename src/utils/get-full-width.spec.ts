import { getFullWidth } from '@/utils/get-full-width';

describe('getFullWidth', () => {
  it('calculates the total width of an element', () => {
    const element = document.createElement('div');
    element.style.marginLeft = '10px';
    element.style.marginRight = '1px';
    Object.defineProperty(element, 'offsetWidth', { value: 100 });

    document.body.append(element);

    const width = getFullWidth(element);

    expect(width).toBe(111);
  });
});
