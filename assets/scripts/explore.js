// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  // TODO
  populateVoiceList();
}

function populateVoiceList() {
  if (typeof speechSynthesis !== "undefined") {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}
