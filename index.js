
function speak() {
	var text = document.getElementById('speak_text');
	var lang = document.getElementById('voiceSelect');
	var msg = new SpeechSynthesisUtterance();
	var voices = window.speechSynthesis.getVoices();
	// msg.voice = voices[10];
	// msg.volume = 1; // From 0 to 1
	// msg.rate = 1; // From 0.1 to 10
	// msg.pitch = 2; // From 0 to 2
	msg.text = text.value;
	msg.lang = lang.value;
	speechSynthesis.cancel();
	speechSynthesis.speak(msg);

}

function populateVoiceList() {
	

	var voices = speechSynthesis.getVoices();
	console.log(voices);

	for (var i = 0; i < voices.length; i++) {
		var option = document.createElement('option');
		option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
		option.value = voices[i].lang;
		if (voices[i].default) {
			option.textContent += ' -- DEFAULT';
		}

		option.setAttribute('data-lang', voices[i].lang);
		option.setAttribute('data-name', voices[i].name);
		document.getElementById("voiceSelect").appendChild(option);
	}
}

populateVoiceList();
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
	speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
