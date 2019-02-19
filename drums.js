function Drums(context) {
    this.context = context;
    this.kick = new Kick(context);
    this.hats = new HiHat(context);
    this.snare = new Snare(context);
    this.sixteenth = 0.125;
    this.eighth = 0.25;
    this.quarter = 0.50;
    this.dottedQuarter = 0.75;
    this.half = 1;
    this.dottedHalf = 1.50;
    this.whole = 2;
}

Drums.prototype.track2 = function (now) {
    let kick = this.kick;
    let hats = this.hats;
    let snare = this.snare;

    kick.trigger(now);
    kick.trigger(now + this.sixteenth);
    kick.trigger(now + this.eighth);

    kick.trigger(now + this.half);
    kick.trigger(now + this.half + this.sixteenth);
    kick.trigger(now + this.half + this.eighth);

    hats.trigger(now);
    hats.trigger(now + this.sixteenth);
    hats.trigger(now + this.eighth);
    hats.trigger(now + this.eighth + this.sixteenth);
    hats.trigger(now + this.quarter);
    hats.trigger(now + this.quarter + this.sixteenth);
    hats.trigger(now + this.quarter + this.eighth);
    hats.trigger(now + this.quarter + this.eighth + this.sixteenth);
    hats.trigger(now + this.half);
    hats.trigger(now + this.half + this.sixteenth);
    hats.trigger(now + this.half + this.eighth);
    hats.trigger(now + this.half + this.eighth + this.sixteenth);
    hats.trigger(now + this.dottedHalf);
    hats.trigger(now + this.dottedHalf + this.sixteenth);
    hats.trigger(now + this.dottedHalf + this.eighth);
    hats.trigger(now + this.dottedHalf + this.eighth + this.sixteenth);

    snare.trigger(now + this.quarter);
    snare.trigger(now + this.dottedHalf);
};

Drums.prototype.track1 = function (now) {
    let kick = this.kick;
    let hats = this.hats;
    let snare = this.snare;

    kick.trigger(now);
    kick.trigger(now + this.eighth);
    kick.trigger(now + this.half);

    hats.trigger(now);
    hats.trigger(now + this.eighth);
    hats.trigger(now + this.quarter);
    hats.trigger(now + this.dottedQuarter);
    hats.trigger(now + this.half);
    hats.trigger(now + 1.25);
    hats.trigger(now + this.dottedHalf);
    hats.trigger(now + 1.75);

    snare.trigger(now + this.quarter);
    snare.trigger(now + this.dottedHalf);

};

Drums.prototype.track3 = function (now) {
    let kick = this.kick;
    let hats = this.hats;
    let snare = this.snare;

    kick.trigger(now);
    kick.trigger(now + this.half - this.sixteenth);
    kick.trigger(now + this.half);

    hats.trigger(now + this.eighth);
    hats.trigger(now + this.quarter + this.eighth);
    hats.trigger(now + this.half + this.eighth);
    hats.trigger(now + this.dottedHalf + this.eighth);

    snare.trigger(now + this.quarter);
    snare.trigger(now + this.dottedHalf);

};

Drums.prototype.track4 = function (now) {
    let kick = this.kick;
    let hats = this.hats;
    let snare = this.snare;

    kick.trigger(now);
    kick.trigger(now + this.quarter - this.sixteenth);
    kick.trigger(now + this.quarter + this.sixteenth);
    kick.trigger(now + this.quarter + this.eighth);
    kick.trigger(now + this.half);
    kick.trigger(now + this.half + this.sixteenth);

    hats.trigger(now);
    hats.trigger(now + this.quarter);
    hats.trigger(now + this.half);
    hats.trigger(now + this.dottedHalf);

    snare.trigger(now + this.sixteenth);
    snare.trigger(now + this.eighth);
    snare.trigger(now + this.quarter);
    snare.trigger(now + this.dottedHalf);
};

Drums.prototype.fill1 = function (now) {
    let kick = this.kick;
    let hats = this.hats;
    let snare = this.snare;

    kick.trigger(now);
    kick.trigger(now + this.sixteenth);
    kick.trigger(now + this.quarter);
    kick.trigger(now + this.quarter + this.sixteenth);
    kick.trigger(now + this.half);
    kick.trigger(now + this.half + this.sixteenth);
    kick.trigger(now + this.dottedHalf);
    kick.trigger(now + this.dottedHalf + this.sixteenth);

    hats.trigger(now + this.eighth);
    hats.trigger(now + this.quarter + this.eighth);
    hats.trigger(now + this.half + this.eighth);

    snare.trigger(now + this.dottedHalf);
    snare.trigger(now + this.dottedHalf + this.sixteenth);
    snare.trigger(now + this.dottedHalf + this.eighth);
    snare.trigger(now + this.whole - this.sixteenth);

};

Drums.prototype.fill2 = function (now) {
    let kick = this.kick;
    let hats = this.hats;
    let snare = this.snare;

    kick.trigger(now);
    kick.trigger(now + this.sixteenth);
    kick.trigger(now + this.eighth);
    kick.trigger(now + this.eighth + this.sixteenth);

    snare.trigger(now + this.quarter);
    snare.trigger(now + this.quarter + this.sixteenth);
    snare.trigger(now + this.quarter + this.eighth);
    snare.trigger(now + this.half - this.sixteenth);

    kick.trigger(now + this.half);
    kick.trigger(now + this.half + this.sixteenth);
    snare.trigger(now + this.half + this.eighth);
    snare.trigger(now + this.dottedHalf - this.sixteenth);

    kick.trigger(now + this.dottedHalf);
    hats.trigger(now + this.dottedHalf + this.eighth);
    snare.trigger(now + this.dottedHalf + this.eighth);

};

Drums.prototype.fill3 = function (now) {
    let kick = this.kick;
    let hats = this.hats;
    let snare = this.snare;

    hats.trigger(now);
    hats.trigger(now + this.sixteenth);
    hats.trigger(now + this.eighth);
    hats.trigger(now + this.eighth + this.sixteenth);
    snare.trigger(now + this.quarter);
    snare.trigger(now + this.quarter + this.sixteenth);

    hats.trigger(now + this.quarter + this.eighth);
    hats.trigger(now + this.half - this.sixteenth);
    hats.trigger(now + this.half);
    hats.trigger(now + this.half + this.sixteenth);
    snare.trigger(now + this.half + this.eighth);
    snare.trigger(now + this.dottedHalf - this.sixteenth);

    kick.trigger(now + this.dottedHalf);
    kick.trigger(now + this.dottedHalf + this.sixteenth);
    snare.trigger(now + this.dottedHalf + this.eighth);
};

function Kick(context) {
    this.context = context;
}

Kick.prototype.setup = function () {
    this.osc = this.context.createOscillator();
    this.gain = this.context.createGain();
    this.osc.connect(this.gain);
    this.gain.connect(this.context.destination)
};

Kick.prototype.trigger = function (time) {
    this.setup();

    this.osc.frequency.setValueAtTime(150, time);
    this.gain.gain.setValueAtTime(1, time);

    this.osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.5);
    this.gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);

    this.osc.start(time);

    this.osc.stop(time + 0.5);
};

function Snare(context) {
    this.context = context;
}

Snare.prototype.noiseBuffer = function () {
    const bufferSize = this.context.sampleRate;
    let buffer = this.context.createBuffer(1, bufferSize, this.context.sampleRate);
    let output = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
    }

    return buffer;
};

Snare.prototype.setup = function () {
    this.noise = this.context.createBufferSource();
    this.noise.buffer = this.noiseBuffer();
    let noiseFilter = this.context.createBiquadFilter();
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

Snare.prototype.trigger = function (time) {
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

HiHat.prototype.setup = function () {
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

HiHat.prototype.trigger = function (time) {
    this.setup();
    const fundamental = 40;
    const ratios = [2, 3, 4.16, 5.43, 6.79, 8.21];

// Create the oscillators
    const context = this.context;
    const bandpass = this.bandpass;
    ratios.forEach(function (ratio) {
        let osc = context.createOscillator();
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

