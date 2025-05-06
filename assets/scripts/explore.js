// explore.js

window.addEventListener("DOMContentLoaded", init);

const inputTxt = document.querySelector("#text-to-speak");
const voiceSelect = document.getElementById("voice-select");

let voices = [];

function init() {
  // TODO
  populateVoiceList();

  const speech_button = document.querySelector("#explore button");
  speech_button.addEventListener("click", () => {
    speak();
  });
}

function populateVoiceList() {
  if (typeof speechSynthesis !== "undefined") {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = "";

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

function speak() {
  if (speechSynthesis.speaking) {
    console.error("speechSynthesis.speaking");
    return;
  }

  if (inputTxt.value !== "") {
    if (!voiceSelect.selectedOptions.length) {
      console.warn("No voice selected.");
      return;
    }

    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);

    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }
    speechSynthesis.speak(utterThis);
  }
}
