export function getFullWidth(element: HTMLElement) {
  const computedStyle = window.getComputedStyle(element);

  const elementWidth = element.offsetWidth;
  const marginLeft = parseInt(computedStyle.marginLeft, 10);
  const marginRight = parseInt(computedStyle.marginRight, 10);

  return elementWidth + marginLeft + marginRight;
}
