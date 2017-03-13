$(document).ready(function(){
let imageIndex = 0; // Par défaut, l'image a l'index 0
let item = $('.item'); // On stocke les objets du carousel dans une variable item
let lastImage = item.length - 1; // On stocke l'index de la dernière image active dans lastImage

// Ce qu'il se passe en cliquant sur le bouton "Next"
  $('#next').click(function(){
    $('.item').removeClass('active'); // On enlève la classe .active sur l'élément courant pour le cacher
    imageIndex += 1; // On incrémente l'indexe de l'image pour passer à la suivante

    // Une boucle pour le défilement infini
    if (imageIndex <= lastImage) { // Si l'index de l'élément actif est inférieur ou égal à l'index de la dernière image affichée
      $('.item').eq(imageIndex).addClass('active'); // On affiche l'élément avec la classe .active
    } else { // Sinon...
      imageIndex = 0; // On revient au début...
      $('.item').eq(imageIndex).addClass('active');// Et on affiche la première image de la liste, et c'est reparti
    }

  });

// La même chose pour le bouton "prev", dans l'autre sens
  $('#prev').click(function(){

    $('.item').removeClass('active');

    imageIndex -= 1;

    if (imageIndex >= 0) {

      $('.item').eq(imageIndex).addClass('active');

    } else {

      imageIndex = lastImage ;
      $('.item').eq(imageIndex).addClass('active');

    }

  });

// Une fonction pour faire défiler les images automatiquement
  function autoslide() {

// setInterval réglé à 3000ms
    setInterval(function() {

      // Ici, le code est le même que pour le click sur "Next"
      $('.item').removeClass('active');
      imageIndex += 1;

      if (imageIndex <= lastImage) {
        $('.item').eq(imageIndex).addClass('active');
      } else {
        imageIndex = 0;
        $('.item').eq(imageIndex).addClass('active');
      }
    }, 3000);
  }

  autoslide(); // Appel de la fonction autoslide

});