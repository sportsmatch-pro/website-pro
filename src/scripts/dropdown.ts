/**
 * Dropdown behavior — hover-open (80ms) / hover-close (120ms) for Producto dropdown;
 * click-toggle for both Producto and language dropdowns;
 * outside-click and Escape key to close both dropdowns;
 * adds data-scrolled attribute to <header> when scrollY > 4.
 */
export function initDropdowns(): void {
  // ─── Producto dropdown (hover + click) ───────────────────────────────────
  const productDropdowns = document.querySelectorAll<HTMLElement>('.dropdown');

  productDropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector<HTMLElement>('[data-dropdown-trigger]');
    if (!trigger) return;

    let openTimer: ReturnType<typeof setTimeout>;
    let closeTimer: ReturnType<typeof setTimeout>;

    function open(): void {
      clearTimeout(closeTimer);
      dropdown.dataset.open = 'true';
      trigger!.setAttribute('aria-expanded', 'true');
    }

    function close(): void {
      dropdown.dataset.open = 'false';
      trigger!.setAttribute('aria-expanded', 'false');
    }

    // Hover open (80ms delay)
    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      openTimer = setTimeout(open, 80);
    });

    // Hover close (120ms delay)
    dropdown.addEventListener('mouseleave', () => {
      clearTimeout(openTimer);
      closeTimer = setTimeout(close, 120);
    });

    // Click toggle
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (dropdown.dataset.open === 'true') {
        close();
      } else {
        open();
      }
    });
  });

  // ─── Language dropdown (click only) ──────────────────────────────────────
  const langDropdown = document.querySelector<HTMLElement>('.lang-dropdown');

  if (langDropdown) {
    const langTrigger = langDropdown.querySelector<HTMLElement>('[data-lang-trigger]');

    if (langTrigger) {
      langTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = langDropdown.dataset.open === 'true';
        langDropdown.dataset.open = isOpen ? 'false' : 'true';
        langTrigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      });
    }
  }

  // ─── Outside-click closes both dropdown types ─────────────────────────────
  document.addEventListener('click', (e) => {
    productDropdowns.forEach((dropdown) => {
      if (!dropdown.contains(e.target as Node)) {
        dropdown.dataset.open = 'false';
        dropdown.querySelector('[data-dropdown-trigger]')
          ?.setAttribute('aria-expanded', 'false');
      }
    });

    if (langDropdown && !langDropdown.contains(e.target as Node)) {
      langDropdown.dataset.open = 'false';
      langDropdown.querySelector('[data-lang-trigger]')
        ?.setAttribute('aria-expanded', 'false');
    }
  });

  // ─── Escape key closes all dropdowns ─────────────────────────────────────
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;

    productDropdowns.forEach((dropdown) => {
      dropdown.dataset.open = 'false';
      dropdown.querySelector('[data-dropdown-trigger]')
        ?.setAttribute('aria-expanded', 'false');
    });

    if (langDropdown) {
      langDropdown.dataset.open = 'false';
      langDropdown.querySelector('[data-lang-trigger]')
        ?.setAttribute('aria-expanded', 'false');
    }
  });

  // ─── Sticky header shadow on scroll ──────────────────────────────────────
  const header = document.querySelector<HTMLElement>('header.site-header');

  if (header) {
    const onScroll = (): void => {
      header.dataset.scrolled = window.scrollY > 4 ? 'true' : 'false';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ─── Mobile drawer toggle ─────────────────────────────────────────────────
  const mobileToggle = document.querySelector<HTMLElement>('[data-mobile-toggle]');
  const mobileDrawer = document.querySelector<HTMLElement>('[data-mobile-drawer]');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.dataset.open === 'true';
      mobileDrawer.dataset.open = isOpen ? 'false' : 'true';
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });
  }
}
