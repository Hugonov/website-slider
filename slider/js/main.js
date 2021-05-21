'use strict';

// DONNEES

// Numéro de la slide à afficher
// = Index dans le tableau des slides
let slide = 0;
let slides;

// Variable qui va contenir le numéro du timer
// Initialisée à null => le timer est arrêté
let timerId = null;

// FONCTIONS

// 3. Création de la fonction appelée lorsque l'événement est déclenché
function onNextSlide()
{
    // // 1. Retirer la classe active sur l'image affichée
    // let activeSlide = document.querySelector('.slider-figure.active');
    // activeSlide.classList.remove('active');
    
    // 2. Ajouter la classe active sur l'image que l'on veut afficher (la slide suivante)
    slide++;
    
    // Si jamais on dépasse le dernier élément du tableau on revient à 0
    if (slide > slides.length - 1) {
        slide = 0;
    }
    
    // // On récupère la slide suivante
    // let nextSlide = slides[slide];
    
    // // Ajout de la classe active sur la slide suivante
    // nextSlide.classList.add('active');
    
    // Appel de la fonction qui met à jour la slide
    updateSlide();
}

function onPreviousSlide()
{
    // 1. Retirer la classe active sur l'image affichée
    // let activeSlide = document.querySelector('.slider-figure.active');
    // activeSlide.classList.remove('active');
    
    slide--;
    
    // Si jamais on dépasse le premier élémént du tableau on revient au dernier (taille du tableau - 1)
    if (slide < 0) {
        slide = slides.length - 1;
    }
    
    // // On récupère la slide précédente
    // let previousSlide = slides[slide];
    
    // // Ajout de la classe active sur la slide précédente
    // previousSlide.classList.add('active');
    
    updateSlide();
}

function onRandomSlide()
{
    let random;
    
    // On récupère un numéro aléatoire compris entre 0 et longueur - 1
    // Si le numéro aléatoire généré est le même que le numéro de la slide
    // on en génère un autre
    do {
        random = getRandomInteger(0, slides.length - 1);
    } while (random === slide);
    
    // On l'affecte au numéro de la slide
    slide = random;
    
    // Mise à jour de la slide
    updateSlide();
}

function onPlayPauseSlider()
{

    // Si le timer est arrêté (ou pas encore lancé)
    // On va lancer le timer et enregistrer le numéro
    if (timerId === null) {
        // Chaque seconde on appelle une fonction qui va passer à la slide suivante
        timerId = setInterval(onNextSlide, 1000);
    } else {
        // Si le timer est lancé, on va l'arrêter
        clearInterval(timerId);
        
        // Le timer est maintenant arrêté => on repasse timerId à null
        timerId = null;
    }
}

function updateSlide()
{
    // 1. Retirer la classe active sur l'image affichée
    let activeSlide = document.querySelector('.slider-figure.active');
    activeSlide.classList.remove('active');
    
    // On récupère la nouvelle slide
    let newSlide = slides[slide];
    
    // Ajout de la classe active sur la nouvelle slide
    newSlide.classList.add('active');
}

// CODE PRINCIPAL
document.addEventListener('DOMContentLoaded', function () {
    // Récupérer toutes les images html dans un tableau
    slides = document.querySelectorAll('.slider-figure');
    
    // 1. Récupérer l'élément
    let nextButton = document.querySelector('#next');
    let previousButton = document.querySelector('#prev');
    let randomButton = document.querySelector('#random');
    let playPauseButton = document.querySelector('#play-pause');
    
    // 2. Mettre en place l'événement
    nextButton.addEventListener('click', onNextSlide);
    previousButton.addEventListener('click', onPreviousSlide);
    randomButton.addEventListener('click', onRandomSlide);
    playPauseButton.addEventListener('click', onPlayPauseSlider);
});