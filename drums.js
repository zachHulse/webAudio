function Drums(context) {
  this.context = context;
  this.kick = new Kick(context);
  this.hats = new HiHat(context);
  this.snare = new Snare(context);
}

Drums.prototype.track2 = function(now) {
  let kick = this.kick;
  let hats = this.hats;
  let snare = this.snare;

  kick.trigger(now);
  kick.trigger(now + sixteenth);
  kick.trigger(now + eighth);

  kick.trigger(now + half);
  kick.trigger(now + half + sixteenth);
  kick.trigger(now + half + eighth);

  for (let i = 0; i < 2; i += sixteenth) {
    hats.trigger(now + i);
  }

  snare.trigger(now + quarter);
  snare.trigger(now + dottedHalf);
};

Drums.prototype.track1 = function(now) {
  let kick = this.kick;
  let hats = this.hats;
  let snare = this.snare;

  kick.trigger(now);
  kick.trigger(now + eighth);
  kick.trigger(now + half);

  for (let i = 0; i < 2; i += eighth) {
    hats.trigger(now + i);
  }

  snare.trigger(now + quarter);
  snare.trigger(now + dottedHalf);

};

Drums.prototype.track3 = function (now) {
  let kick = this.kick;
  let hats = this.hats;
  let snare = this.snare;

  kick.trigger(now);
  kick.trigger(now + half - sixteenth);
  kick.trigger(now + half);

  for (let i = eighth; i < 2; i += quarter) {
    hats.trigger(now + i);
  }

  snare.trigger(now + quarter);
  snare.trigger(now + dottedHalf);

};

Drums.prototype.track4 = function (now) {
  let kick = this.kick;
  let hats = this.hats;
  let snare = this.snare;

  kick.trigger(now);
  kick.trigger(now + quarter - sixteenth);
  kick.trigger(now + quarter + sixteenth);
  kick.trigger(now + quarter + eighth);
  kick.trigger(now + half);
  kick.trigger(now + half + sixteenth);

  for (let i = 0; i < 2; i += sixteenth) {
    hats.trigger(now + i);
  }

  hats.trigger(now);
  hats.trigger(now + quarter);
  hats.trigger(now + half);
  hats.trigger(now + dottedHalf);

  snare.trigger(now + sixteenth);
  snare.trigger(now + eighth);
  snare.trigger(now + quarter);
  snare.trigger(now + dottedHalf);
};

Drums.prototype.fill1 = function (now) {
  let kick = this.kick;
  let hats = this.hats;
  let snare = this.snare;

  kick.trigger(now);
  kick.trigger(now + sixteenth);
  kick.trigger(now + quarter);
  kick.trigger(now + quarter + sixteenth);
  kick.trigger(now + half);
  kick.trigger(now + half + sixteenth);
  kick.trigger(now + dottedHalf);
  kick.trigger(now + dottedHalf + sixteenth);

  hats.trigger(now + eighth);
  hats.trigger(now + quarter + eighth);
  hats.trigger(now + half + eighth);

  snare.trigger(now + dottedHalf);
  snare.trigger(now + dottedHalf + sixteenth);
  snare.trigger(now + dottedHalf + eighth);
  snare.trigger(now + whole - sixteenth);

};


Drums.prototype.fill2 = function (now) {
  let kick = this.kick;
  let hats = this.hats;
  let snare = this.snare;

  kick.trigger(now);
  kick.trigger(now + sixteenth);
  kick.trigger(now + eighth);
  kick.trigger(now + eighth + sixteenth);

  snare.trigger(now + quarter);
  snare.trigger(now + quarter + sixteenth);
  snare.trigger(now + quarter + eighth);
  snare.trigger(now + half - sixteenth);

  kick.trigger(now + half);
  kick.trigger(now + half + sixteenth);
  snare.trigger(now + half + eighth);
  snare.trigger(now + dottedHalf - sixteenth);

  kick.trigger(now + dottedHalf);
  hats.trigger(now + dottedHalf + eighth);
  snare.trigger(now + dottedHalf + eighth);

};

Drums.prototype.fill3 = function (now) {
  let kick = this.kick;
  let hats = this.hats;
  let snare = this.snare;

  hats.trigger(now);
  hats.trigger(now + sixteenth);
  hats.trigger(now + eighth);
  hats.trigger(now + eighth + sixteenth);
  snare.trigger(now + quarter);
  snare.trigger(now + quarter + sixteenth);

  hats.trigger(now + quarter + eighth);
  hats.trigger(now + half - sixteenth);
  hats.trigger(now + half);
  hats.trigger(now + half + sixteenth);
  snare.trigger(now + half + eighth);
  snare.trigger(now + dottedHalf - sixteenth);

  kick.trigger(now + dottedHalf);
  kick.trigger(now + dottedHalf + sixteenth);
  snare.trigger(now + dottedHalf + eighth);
};

function Kick(context) {
  this.context = context;
}

Kick.prototype.setup = function() {
  this.osc = this.context.createOscillator();
  this.gain = this.context.createGain();
  this.osc.connect(this.gain);
  this.gain.connect(this.context.destination)
};

Kick.prototype.trigger = function(time) {
  this.setup();

  this.osc.frequency.setValueAtTime(150, time);
  this.gain.gain.setValueAtTime(1, time);

  this.osc.frequency.exponentialRampToValueAtTime(0.01, time + quarter);
  this.gain.gain.exponentialRampToValueAtTime(0.01, time + quarter);

  this.osc.start(time);

  this.osc.stop(time + quarter);
};

function Snare(context) {
  this.context = context;
}

Snare.prototype.noiseBuffer = function() {
  const bufferSize = this.context.sampleRate;
  const buffer = this.context.createBuffer(1, bufferSize, this.context.sampleRate);
  const output = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }

  return buffer;
};

Snare.prototype.setup = function() {
  this.noise = this.context.createBufferSource();
  this.noise.buffer = this.noiseBuffer();
  const noiseFilter = this.context.createBiquadFilter();
  noiseFilter.type = 'highpass';
  noiseFilter.frequency.value = 1000;
  this.noise.connect(noiseFilter);
  this.noiseEnvelope = this.context.createGain();
  noiseFilter.connect(this.noiseEnvelope);

  this.noiseEnvelope.connect(this.context.destination);
  this.osc = this.context.createOscillator();
  this.osc.type = 'triangle';

  this.oscEnvelope = this.context.createGain();
  this.osc.connect(this.oscEnvelope);
  this.oscEnvelope.connect(this.context.destination);
};

Snare.prototype.trigger = function(time) {
  this.setup();

  this.noiseEnvelope.gain.setValueAtTime(1, time);
  this.noiseEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.2);
  this.noise.start(time);

  this.osc.frequency.setValueAtTime(100, time);
  this.oscEnvelope.gain.setValueAtTime(0.7, time);
  this.oscEnvelope.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
  this.osc.start(time);

  this.osc.stop(time + 0.2);
  this.noise.stop(time + 0.2);
};

function HiHat(context) {
  this.context = context;
}

HiHat.prototype.setup = function() {
  this.gain = this.context.createGain();
  // Bandpass
  this.bandpass = this.context.createBiquadFilter();
  this.bandpass.type = "bandpass";
  this.bandpass.frequency.value = 10000;

  // Highpass
  this.highpass = this.context.createBiquadFilter();
  this.highpass.type = "highpass";
  this.highpass.frequency.value = 5000;

  // Connect the graph
  this.bandpass.connect(this.highpass);
  this.highpass.connect(this.gain);
  this.gain.connect(this.context.destination);
};

HiHat.prototype.trigger = function(time) {
  this.setup();
  const fundamental = 40;
  const ratios = [2, 3, 4.16, 5.43, 6.79, 8.21];

// Create the oscillators
  const context = this.context;
  const bandpass = this.bandpass;
  ratios.forEach((ratio) => {
    const osc = context.createOscillator();
    osc.type = "square";
    // Frequency is the fundamental * this oscillator's ratio
    osc.frequency.value = fundamental * ratio;
    osc.connect(bandpass);
    osc.start(time);
    osc.stop(time + 0.3);
  });

// Define the volume envelope
  this.gain.gain.setValueAtTime(0.00001, time);
  this.gain.gain.exponentialRampToValueAtTime(1, time + 0.02);
  this.gain.gain.exponentialRampToValueAtTime(0.3, time + 0.03);
  this.gain.gain.exponentialRampToValueAtTime(0.00001, time + 0.3);
};

