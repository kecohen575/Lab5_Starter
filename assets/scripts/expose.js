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

  
  const volume_icon = document.querySelector('img[src="assets/icons/volume-level-2.svg"]');
  const volume_slider = document.getElementById("volume");

  // volume slider sets corresponding audio volume and icon
  volume_slider.addEventListener('input', (event) => {
    const vol = event.target.value;
    audio.volume = Number(vol) / 100;
    if (vol == 0) {
      volume_icon.src = `assets/icons/volume-level-0.svg`;
      volume_icon.alt = `mute volume icon`;
    }
    else if (vol <= 33) {
      volume_icon.src = `assets/icons/volume-level-1.svg`;
      volume_icon.alt = `level-1 volume icon`;
    }
    else if (vol <= 67) {
      volume_icon.src = `assets/icons/volume-level-2.svg`;
      volume_icon.alt = `level-2 volume icon`;
    }
    else {
      volume_icon.src = `assets/icons/volume-level-3.svg`;
      volume_icon.alt = `level-3 volume icon`;
    }
  })


  const jsConfetti = new JSConfetti()
  const play_btn = document.querySelector('#expose button')

  // play sound button plays corresponding audio (+ a surprise)
  play_btn.addEventListener('click', () => {
    audio.play()
    
    const horn_type = horn_btn.value;
    if (horn_type === 'select') { alert("Please select horn type"); }
    if (horn_type === 'party-horn') { jsConfetti.addConfetti(); }
  })
}