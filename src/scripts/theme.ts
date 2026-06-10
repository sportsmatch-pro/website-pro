/**
 * Theme toggle — cycles light → dark → system on each click.
 * Persists preference to localStorage under key 'sm-theme'.
 * Always resolves data-theme on <html> so Tailwind dark: utilities work,
 * including when the preference is 'system' and the OS is dark.
 */
export function initThemeToggle(): void {
  const root = document.documentElement;
  const STORE_KEY = 'sm-theme';
  const mql = matchMedia('(prefers-color-scheme: dark)');

  function resolveAndApply(mode: 'light' | 'dark' | 'system'): void {
    if (mode === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else if (mode === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      // system: set data-theme="dark" when OS is dark so dark: utilities fire
      if (mql.matches) {
        root.setAttribute('data-theme', 'dark');
      } else {
        root.removeAttribute('data-theme');
      }
    }
  }

  function getStoredMode(): 'light' | 'dark' | 'system' {
    const stored = localStorage.getItem(STORE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return 'system';
  }

  function applyTheme(mode: 'light' | 'dark' | 'system'): void {
    if (mode === 'system') {
      localStorage.removeItem(STORE_KEY);
    } else {
      localStorage.setItem(STORE_KEY, mode);
    }
    resolveAndApply(mode);

    const ariaLabels: Record<string, string> = {
      light: 'Switch to dark mode',
      dark: 'Switch to system mode',
      system: 'Switch to light mode',
    };
    document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((btn) => {
      btn.setAttribute('aria-label', ariaLabels[mode] ?? 'Toggle theme');
    });
    document.querySelectorAll<HTMLElement>('[data-theme-icon]').forEach((el) => {
      el.style.display = el.dataset.themeIcon === mode ? '' : 'none';
    });
  }

  // Re-resolve when OS preference changes while in system mode
  mql.addEventListener('change', () => {
    if (getStoredMode() === 'system') resolveAndApply('system');
  });

  document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cur = getStoredMode();
      applyTheme(cur === 'light' ? 'dark' : cur === 'dark' ? 'system' : 'light');
    });
  });

  // Sync aria-labels on init
  applyTheme(getStoredMode());
}
