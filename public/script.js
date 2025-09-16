// ✅ Smooth scrolling for navigation links + active state
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove 'active' from all and add to clicked link
    document.querySelectorAll(".navbar a").forEach(a => a.classList.remove("active"));
    this.classList.add("active");

    // Smooth scroll to section
    const section = document.querySelector(this.getAttribute("href"));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// ---- NAV: smooth scroll for internal links, allow external links ----
const navLinks = document.querySelectorAll('.navbar a');

// helper: check if link is an internal anchor (e.g. "#about")
function isInternalAnchor(href) {
  return href && href.startsWith('#') && href.length > 1;
}

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    if (isInternalAnchor(href)) {
      // internal anchor: smooth scroll and set active
      e.preventDefault();

      // set active class
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      const section = document.querySelector(href);
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    // external link: DO NOT preventDefault()
    // if you want external links to open in a new tab programmatically:
    // if (!this.target) { window.open(href, '_blank'); e.preventDefault(); }
    // otherwise, let the browser handle it (default)
  });
});

// ---- update active link while scrolling (keeps active in-sync with viewport) ----
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let currentId = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120; // tweak offset if header is fixed
    const bottom = top + section.offsetHeight;
    if (window.scrollY >= top && window.scrollY < bottom) {
      currentId = section.getAttribute('id');
    }
  });

  if (currentId) {
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  }
});

