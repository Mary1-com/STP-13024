const faqTriggers = document.querySelectorAll('[data-faq-trigger]');

const closeFaqItem = trigger => {
  const panelId = trigger.getAttribute('aria-controls');
  const panel = document.getElementById(panelId);

  trigger.setAttribute('aria-expanded', 'false');

  if (panel) {
    panel.hidden = true;
  }
};

const openFaqItem = trigger => {
  const panelId = trigger.getAttribute('aria-controls');
  const panel = document.getElementById(panelId);

  trigger.setAttribute('aria-expanded', 'true');

  if (panel) {
    panel.hidden = false;
  }
};

faqTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const isCurrentOpen = trigger.getAttribute('aria-expanded') === 'true';

    faqTriggers.forEach(closeFaqItem);

    if (!isCurrentOpen) {
      openFaqItem(trigger);
    }
  });
});