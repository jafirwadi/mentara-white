/* Mentara — interactions
   - mobile nav toggle
   - FAQ accordion
   - testimonial switcher
   - on-scroll reveal
*/
document.addEventListener('DOMContentLoaded', function () {

  /* ---------- mobile nav ---------- */
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- FAQ accordion ---------- */
  var faqButtons = document.querySelectorAll('.faq-question');

  function setFaqState(button, open) {
    var answer = button.nextElementSibling;
    button.setAttribute('aria-expanded', String(open));
    answer.style.maxHeight = open ? answer.scrollHeight + 'px' : '0px';
  }

  faqButtons.forEach(function (btn) {
    // set initial state (first item ships open in the markup)
    setFaqState(btn, btn.getAttribute('aria-expanded') === 'true');

    btn.addEventListener('click', function () {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      faqButtons.forEach(function (b) { setFaqState(b, false); });
      if (!isOpen) setFaqState(btn, true);
    });
  });

  /* ---------- testimonial switcher ---------- */
  var testiButtons = document.querySelectorAll('.testi-name-btn');
  var quoteText = document.getElementById('testiQuoteText');
  var authorName = document.getElementById('testiAuthorName');
  var authorImg = document.getElementById('testiAuthorImg');
  var portraitImg = document.getElementById('testiPortraitImg');
  var avatarSources = {
    'mentara-avatar-1': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=85',
    'mentara-avatar-2': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=85',
    'mentara-avatar-3': 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=80&h=80&q=85',
    'mentara-avatar-4': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=85'
  };
  var portraitSources = {
    'mentara-avatar-1': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=520&h=620&q=85',
    'mentara-avatar-2': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=520&h=620&q=85',
    'mentara-avatar-3': 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=520&h=620&q=85',
    'mentara-avatar-4': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=520&h=620&q=85'
  };

  testiButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      testiButtons.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      if (quoteText) quoteText.textContent = btn.dataset.quote;
      if (authorName) authorName.textContent = btn.dataset.name;
      if (authorImg) {
        authorImg.src = avatarSources[btn.dataset.avatar] || avatarSources['mentara-avatar-1'];
        authorImg.alt = btn.dataset.name;
      }
      if (portraitImg) {
        portraitImg.src = portraitSources[btn.dataset.avatar] || portraitSources['mentara-avatar-1'];
        portraitImg.alt = 'Portrait of ' + btn.dataset.name;
      }
    });
  });

  /* ---------- on-scroll reveal ---------- */
  var revealSelector = [
    '.hero-copy', '.hero-gallery', '.about-image', '.about-content',
    '.service-card', '.step-item', '.portfolio-card',
    '.testi-quote-card', '.testi-list', '.testi-portrait',
    '.team-card', '.blog-card', '.faq-intro', '.faq-list',
    '.cta-copy', '.cta-image'
  ].join(', ');

  var revealEls = document.querySelectorAll(revealSelector);
  revealEls.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // no IntersectionObserver support — just show everything
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

});
