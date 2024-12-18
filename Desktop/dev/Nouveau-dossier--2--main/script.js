// Sélection des éléments du DOM
let btn = document.querySelector(".navbar-hamburger");
let navbar = document.querySelector(".menu");
let app = document.querySelector(".app");

// Fonction pour ajouter la classe 'active'
function addActive(slide) {
  slide.classList.add('active');
}

// Fonction pour retirer la classe 'active'
function removeActive(slide) {
  slide.classList.remove('active');
}

// Fonction pour activer le point de navigation correspondant à la diapositive
function setActiveDot(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Fonction pour afficher une diapositive en fonction de l'index
function showSlide(index) {
  removeActive(slides[currentIndex]);
  currentIndex = (index + slides.length) % slides.length;
  addActive(slides[currentIndex]);
  setActiveDot(currentIndex);
}

// Fonction pour créer une carte produit
function createCard(product) {
  let container = document.createElement("div");
  container.className = "container";

  // Afficher l'image
  let pic = document.createElement("img");
  pic.src = product.imageUrl;
  container.appendChild(pic);

  // Afficher le titre
  let title = document.createElement("h2");
  title.innerText = product.name;
  container.appendChild(title);

  // Afficher la description
  let description = document.createElement("p");
  description.innerText = product.description;
  container.appendChild(description);

  // Afficher le prix
  let price = document.createElement("p");
  price.innerText = `${product.price}€`;
  container.appendChild(price);

  app.appendChild(container);
}

// Initialisation de la diapositive et du point de navigation
window.onload = function () {
  let slides = document.getElementsByClassName('carousel-item');
  let dots = document.querySelectorAll('.slider-dot');
  let currentIndex = 0;

  // Ajouter la classe 'active' à la première diapositive et au premier point
  addActive(slides[0]);
  setActiveDot(0);

  // Changement automatique des diapositives toutes les 5 secondes
  setInterval(function () {
    showSlide(currentIndex + 1);
  }, 5000);

  // Ajout de la fonctionnalité de navigation par les points (dots)
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });
};

// Fonction pour récupérer et afficher les produits
async function fetchProducts() {
  try {
    const response = await fetch('./food.json'); // Charger le fichier JSON
    if (!response.ok) {
      throw new Error('Erreur lors du chargement du fichier JSON');
    }
    const products = await response.json(); // Convertir en objet JSON

    console.log(products); // Afficher les produits dans la console

    // Utiliser l'objet `products` pour créer les cartes
    Object.keys(products).forEach(category => {
      products[category].forEach(createCard);
    });
  } catch (error) {
    console.error('Erreur:', error);
  }
}

// Appeler la fonction pour afficher les produits
fetchProducts();
