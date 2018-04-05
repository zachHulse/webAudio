var audioContext;


window.onload = function (ev) {
  audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // var globalGain = audioContext.createGain();
  // globalGain.gain.setValueAtTime(0.2, audioContext.currentTime);
  // globalGain.connect(audioContext.destination);

  var button = document.querySelector('.play');
  button.addEventListener('click', play);
};


function play(e) {
  var osc1 = audioContext.createOscillator();
  var osc2 = audioContext.createOscillator();
  var osc3 = audioContext.createOscillator();
  var osc4 = audioContext.createOscillator();

  var masterGain = audioContext.createGain();
  masterGain.gain.setValueAtTime(0.3, audioContext.currentTime);

  osc1.frequency.setValueAtTime(440, audioContext.currentTime);
  osc1.frequency.setValueAtTime(440 * Math.pow(2, 1/12), audioContext.currentTime + 1);
  osc1.frequency.setValueAtTime(440 * Math.pow(2, 2/12), audioContext.currentTime + 2);

  osc2.frequency.setValueAtTime(550, audioContext.currentTime);
  osc2.frequency.setValueAtTime(550 * Math.pow(2, 1/12), audioContext.currentTime + 1);
  osc2.frequency.setValueAtTime(550 * Math.pow(2, 2/12), audioContext.currentTime + 2);

  osc3.frequency.setValueAtTime(660, audioContext.currentTime);
  osc3.frequency.setValueAtTime(660 * Math.pow(2, 1/12), audioContext.currentTime + 1);
  osc3.frequency.setValueAtTime(660 * Math.pow(2, 2/12), audioContext.currentTime + 2);

  //osc1.connect(audioContext.destination);
  osc1.connect(masterGain);
  osc2.connect(masterGain);
  osc3.connect(masterGain);
  masterGain.connect(audioContext.destination);

  osc1.start();
  osc2.start();
  osc3.start();
  osc1.stop(audioContext.currentTime + 3);
  osc2.stop(audioContext.currentTime + 3);
  osc3.stop(audioContext.currentTime + 3);
}