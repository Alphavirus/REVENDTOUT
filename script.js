

 /* script js */ 

/* Script pour la barre de navigation */

 var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
  
}

 /* script pour les animations */ 

// Sélectionner toutes les sections avec la classe 'hidden'

const sections = document.querySelectorAll('section, main > div, form');

// Fonction pour vérifier si un élément est visible
function isElementVisible(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight - 100; // Ajuste selon ton design
}

// Fonction pour ajouter la classe 'show' aux éléments visibles
function revealOnScroll() {
  sections.forEach((section) => {
    if (isElementVisible(section)) {
      section.classList.add('show');
    }
  });
}

// Événement de scroll
window.addEventListener('scroll', revealOnScroll);

// Appel initial pour révéler les éléments visibles dès le chargement
revealOnScroll();


// Sélectionner les liens du menu
const navLinks = document.querySelectorAll('#navbar a');

// Ajouter un événement au clic pour chaque lien
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le comportement par défaut
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll fluide
    }
  });
});

// Smooth scroll pour le bouton "En haut"
const backToTop = document.querySelector('a i');
if (backToTop) {
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('html').scrollIntoView({ behavior: 'smooth' });
  });
}
