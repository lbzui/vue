interface ThemeColor {
  light: string;
  dark: string;
}

export function supportsCssVars(): boolean {
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

export function changeModeHandler(handler: () => void): void {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (): void => {
    handler();
  });
}

export function setModeAttrs(isDark: boolean, themeColor: ThemeColor): void {
  document.documentElement.setAttribute('theme', isDark ? 'dark' : 'light');

  if (document.querySelector('meta[name=theme-color]')) {
    document.querySelector('meta[name=theme-color]')!
      .setAttribute('content', isDark ? themeColor.dark : themeColor.light);
  }

  if (document.querySelector('meta[name=apple-mobile-web-app-status-bar-style]')) {
    document.querySelector('meta[name=apple-mobile-web-app-status-bar-style]')!
      .setAttribute('content', isDark ? 'black' : 'default');
  }
}

export function cancelContextmenu(): void {
  document.addEventListener('contextmenu', (e: MouseEvent): void => {
    e.preventDefault();
  });
}

export function lockBodyScroll(val: boolean): void {
  document.body.classList[val ? 'add' : 'remove']('lbz-body--lock-scroll');
}
