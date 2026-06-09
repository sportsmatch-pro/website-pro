/**
 * Theme toggle — cycles light → dark → system on each click.
 * Persists to localStorage under key 'sm-theme'.
 * Sets / removes data-theme attribute on <html>.
 */
export function initThemeToggle(): void {
  const root = document.documentElement;
  const STORE_KEY = 'sm-theme';

  function applyTheme(mode: 'light' | 'dark' | 'system'): void {
    if (mode === 'system') {
      root.removeAttribute('data-theme');
      localStorage.removeItem(STORE_KEY);
    } else {
      root.setAttribute('data-theme', mode);
      localStorage.setItem(STORE_KEY, mode);
    }

    // Update aria-label on all toggle buttons
    const label =
      mode === 'system'
        ? (root.getAttribute('data-theme') === null &&
           matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light')
        : mode;

    document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((btn) => {
      const ariaLabels: Record<string, string> = {
        light: 'Switch to dark mode',
        dark: 'Switch to system mode',
        system: 'Switch to light mode',
      };
      btn.setAttribute('aria-label', ariaLabels[label] ?? 'Toggle theme');
    });
  }

  document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cur = root.getAttribute('data-theme');
      if (cur === 'light') {
        applyTheme('dark');
      } else if (cur === 'dark') {
        applyTheme('system');
      } else {
        // No data-theme (system) → go to light
        applyTheme('light');
      }
    });
  });
}
