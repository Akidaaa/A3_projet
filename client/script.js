const audio = document.getElementById('audio');
const phraseInput = document.getElementById('phrase');
const submitButton = document.getElementById('submit');

// Lire le son à l'entrée
audio.play();

// Ajouter un écouteur d'événement pour le bouton d'envoi
submitButton.addEventListener('click', () => {
  const phrase = phraseInput.value.trim();

  // Vérifier si la phrase secrète est correcte
  if (phrase === 'ilSeFichier') {
    // Rediriger vers la page du chat
    window.location.href = 'chat.html';
  } else {
    // Afficher une fenêtre contextuelle d'avertissement
    alert('Désolé, vous n\'êtes pas invité à entrer dans ce chat !');
  }
});
