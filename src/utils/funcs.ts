export function supportsCssVariables(): boolean {
  const { CSS }: any = window;

  if (!(CSS && typeof CSS.supports === 'function')) {
    return false;
  }

  // Safari: https://bugs.webkit.org/show_bug.cgi?id=154669
  return CSS.supports('--css-vars', 'yes')
    || (CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000'));
}

export function isDarkModeEnabled(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function registerChangeModeHandler(handler: () => void): void {
  window.matchMedia('(prefers-color-scheme: dark)').onchange = (): void => {
    handler();
  };
}
