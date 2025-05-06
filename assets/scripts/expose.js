// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const image = document.querySelector('img[src="assets/images/no-image.png"]');
  const audio = document.querySelector('#expose audio');
  const horn_btn = document.getElementById("horn-select");

  // horn dropdown sets corresponding image/audio
  horn_btn.addEventListener('change', (event) => {
    const choice = event.target.value;  
    image.src = `assets/images/${choice}.svg`;
    image.alt = choice.replace('-', ' ');
    audio.src = `assets/audio/${choice}.mp3`;
  });

}