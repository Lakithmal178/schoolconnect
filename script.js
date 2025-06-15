// Function to toggle extra paragraph details inside cards
function toggleDetails(card) {
  const detail = card.querySelector('p[hidden]');
  if (detail) {
    detail.hidden = !detail.hidden;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.page-section');
  const learnMoreBtns = document.querySelectorAll('.btn[data-section]');

  function showSection(id) {
    sections.forEach(section => {
      section.classList.toggle('active', section.id === id);
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === id);
    });
    window.scrollTo(0, 0);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = link.dataset.section;
      showSection(targetSection);
    });
  });

  learnMoreBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = btn.dataset.section;
      showSection(targetSection);
    });
  });
});
