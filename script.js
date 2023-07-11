// // Initialize new SpeechSynthesisUtterance object
// let speech = new SpeechSynthesisUtterance();

// // Set Speech Language
// speech.lang = "en";

// let voices = []; // global array of available voices

// window.speechSynthesis.onvoiceschanged = () => {
//   // Get List of Voices
//   voices = window.speechSynthesis.getVoices();

//   // Initially set the First Voice in the Array.
//   speech.voice = voices[0];

//   // Set the Voice Select List. (Set the Index as the value, which we'll use later when the user updates the Voice using the Select Menu.)
//   let voiceSelect = document.querySelector("#voices");
//   voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
// };

// document.querySelector("#rate").addEventListener("input", () => {
//   // Get rate Value from the input
//   const rate = document.querySelector("#rate").value;

//   // Set rate property of the SpeechSynthesisUtterance instance
//   speech.rate = rate;

//   // Update the rate label
//   document.querySelector("#rate-label").innerHTML = rate;
// });

// document.querySelector("#volume").addEventListener("input", () => {
//   // Get volume Value from the input
//   const volume = document.querySelector("#volume").value;

//   // Set volume property of the SpeechSynthesisUtterance instance
//   speech.volume = volume;

//   // Update the volume label
//   document.querySelector("#volume-label").innerHTML = volume;
// });

// document.querySelector("#pitch").addEventListener("input", () => {
//   // Get pitch Value from the input
//   const pitch = document.querySelector("#pitch").value;

//   // Set pitch property of the SpeechSynthesisUtterance instance
//   speech.pitch = pitch;

//   // Update the pitch label
//   document.querySelector("#pitch-label").innerHTML = pitch;
// });

// document.querySelector("#voices").addEventListener("change", () => {
//   // On Voice change, use the value of the select menu (which is the index of the voice in the global voice array)
//   speech.voice = voices[document.querySelector("#voices").value];
// });

// document.querySelector("#start").addEventListener("click", () => {
//   // Set the text property with the value of the textarea
//   speech.text = document.querySelector("textarea").value;

//   // Start Speaking
//   window.speechSynthesis.speak(speech);
// });

// document.querySelector("#pause").addEventListener("click", () => {
//   // Pause the speechSynthesis instance
//   window.speechSynthesis.pause();
// });

// document.querySelector("#resume").addEventListener("click", () => {
//   // Resume the paused speechSynthesis instance
//   window.speechSynthesis.resume();
// });

// document.querySelector("#cancel").addEventListener("click", () => {
//   // Cancel the speechSynthesis instance
//   window.speechSynthesis.cancel();
// });


// Initialize new SpeechSynthesisUtterance object
let speech = new SpeechSynthesisUtterance();

// Set Speech Language
speech.lang = "en";

let voices = []; // global array of available voices

window.speechSynthesis.onvoiceschanged = () => {
  // Get List of Voices
  voices = window.speechSynthesis.getVoices();

  // Initially set the First Voice in the Array.
  speech.voice = voices[0];

  // Set the Voice Select List. (Set the Index as the value, which we'll use later when the user updates the Voice using the Select Menu.)
  let voiceSelect = document.querySelector("#voices");
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));

  // Retrieve saved settings from localStorage (if any)
  const savedSettings = JSON.parse(localStorage.getItem("settings"));
  if (savedSettings) {
    // Apply saved settings
    document.querySelector("#volume").value = savedSettings.volume;
    document.querySelector("#volume-label").textContent = savedSettings.volume;
    document.querySelector("#rate").value = savedSettings.rate;
    document.querySelector("#rate-label").textContent = savedSettings.rate;
    document.querySelector("#pitch").value = savedSettings.pitch;
    document.querySelector("#pitch-label").textContent = savedSettings.pitch;
    document.querySelector("#voices").value = savedSettings.voiceIndex;
    speech.voice = voices[savedSettings.voiceIndex];
  }
};

document.querySelector("#rate").addEventListener("input", () => {
  // Get rate Value from the input
  const rate = document.querySelector("#rate").value;

  // Set rate property of the SpeechSynthesisUtterance instance
  speech.rate = rate;

  // Update the rate label
  document.querySelector("#rate-label").innerHTML = rate;

  // Save the updated settings to localStorage
  saveSettings();
});

document.querySelector("#volume").addEventListener("input", () => {
  // Get volume Value from the input
  const volume = document.querySelector("#volume").value;

  // Set volume property of the SpeechSynthesisUtterance instance
  speech.volume = volume;

  // Update the volume label
  document.querySelector("#volume-label").innerHTML = volume;

  // Save the updated settings to localStorage
  saveSettings();
});

document.querySelector("#pitch").addEventListener("input", () => {
  // Get pitch Value from the input
  const pitch = document.querySelector("#pitch").value;

  // Set pitch property of the SpeechSynthesisUtterance instance
  speech.pitch = pitch;

  // Update the pitch label
  document.querySelector("#pitch-label").innerHTML = pitch;

  // Save the updated settings to localStorage
  saveSettings();
});

document.querySelector("#voices").addEventListener("change", () => {
  // On Voice change, use the value of the select menu (which is the index of the voice in the global voice array)
  const voiceIndex = document.querySelector("#voices").value;
  speech.voice = voices[voiceIndex];

  // Save the updated settings to localStorage
  saveSettings();
});

document.querySelector("#start").addEventListener("click", () => {
  // Set the text property with the value of the textarea
  speech.text = document.querySelector("textarea").value;

  // Start Speaking
  window.speechSynthesis.speak(speech);
});

document.querySelector("#pause").addEventListener("click", () => {
  // Pause the speechSynthesis instance
  window.speechSynthesis.pause();
});

document.querySelector("#resume").addEventListener("click", () => {
  // Resume the paused speechSynthesis instance
  window.speechSynthesis.resume

  document.querySelector("#resume").addEventListener("click", () => {
    // Resume the paused speechSynthesis instance
    window.speechSynthesis.resume();
  });
  
  document.querySelector("#cancel").addEventListener("click", () => {
    // Cancel the speechSynthesis instance
    window.speechSynthesis.cancel();
  });
  
  // Function to save the settings to localStorage
  function saveSettings() {
    const settings = {
      volume: document.querySelector("#volume").value,
      rate: document.querySelector("#rate").value,
      pitch: document.querySelector("#pitch").value,
      voiceIndex: document.querySelector("#voices").value
    };
  
    // Save the settings to localStorage
    localStorage.setItem("settings", JSON.stringify(settings));
  }
  
  // Retrieve saved settings from localStorage (if any)
  const savedSettings = JSON.parse(localStorage.getItem("settings"));
  if (savedSettings) {
    // Apply saved settings
    document.querySelector("#volume").value = savedSettings.volume;
    document.querySelector("#volume-label").textContent = savedSettings.volume;
    document.querySelector("#rate").value = savedSettings.rate;
    document.querySelector("#rate-label").textContent = savedSettings.rate;
    document.querySelector("#pitch").value = savedSettings.pitch;
    document.querySelector("#pitch-label").textContent = savedSettings.pitch;
    document.querySelector("#voices").value = savedSettings.voiceIndex;
    speech.voice = voices[savedSettings.voiceIndex];
  }
  
  // Function to populate the voice options
  function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    let voiceSelect = document.querySelector("#voices");
    voiceSelect.innerHTML = "";
  
    voices.forEach((voice, i) => {
      voiceSelect.options[i] = new Option(voice.name, i);
    });
  
    // Set the default voice
    speech.voice = voices[0];
    document.querySelector("#voices").value = 0;
  }
  
  // Populate the voice options on page load
  populateVoiceList();
})
