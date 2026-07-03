// const header = document.querySelector('[data-header]');
// const openMenuBtn = document.querySelector('[data-menu-open]');
// const closeMenuBtn = document.querySelector('[data-menu-close]');
// const mobileMenu = document.querySelector('[data-menu]');
// const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');

// if (header) {
//   const handleHeaderScroll = () => {
//     header.classList.toggle('is-scrolled', window.scrollY > 20);
//   };

//   window.addEventListener('scroll', handleHeaderScroll);
//   handleHeaderScroll();
// }

// if (openMenuBtn && closeMenuBtn && mobileMenu) {
//   const openMenu = () => {
//     mobileMenu.classList.add('is-open');
//     openMenuBtn.setAttribute('aria-expanded', 'true');
//     document.body.style.overflow = 'hidden';
//   };

//   const closeMenu = () => {
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', 'false');
//     document.body.style.overflow = '';
//   };

//   openMenuBtn.addEventListener('click', openMenu);
//   closeMenuBtn.addEventListener('click', closeMenu);

//   mobileMenuLinks.forEach(link => {
//     link.addEventListener('click', closeMenu);
//   });

//   mobileMenu.addEventListener('click', event => {
//     if (event.target === mobileMenu) {
//       closeMenu();
//     }
//   });

//   document.addEventListener('keydown', event => {
//     if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
//       closeMenu();
//     }
//   });
// }

const header = document.querySelector('[data-header]');
const openMenuBtn = document.querySelector('[data-menu-open]');
const closeMenuBtn = document.querySelector('[data-menu-close]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileMenuLinks = document.querySelectorAll('[data-mobile-menu-link]');

if (header) {
  const handleHeaderScroll = () => {
    if (window.scrollY > 20) {
      header.dataset.scrolled = 'true';
    } else {
      delete header.dataset.scrolled;
    }
  };

  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll();
}

if (openMenuBtn && closeMenuBtn && mobileMenu) {
  const openMenu = () => {
    mobileMenu.dataset.open = 'true';
    openMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.dataset.menuOpen = 'true';
  };

  const closeMenu = () => {
    delete mobileMenu.dataset.open;
    openMenuBtn.setAttribute('aria-expanded', 'false');
    delete document.body.dataset.menuOpen;
  };

  openMenuBtn.addEventListener('click', openMenu);
  closeMenuBtn.addEventListener('click', closeMenu);

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  mobileMenu.addEventListener('click', event => {
    if (event.target === mobileMenu) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mobileMenu.dataset.open === 'true') {
      closeMenu();
    }
  });
}