const G0 = 440 * Math.pow(2, -50/12);
const A0 = 440 * Math.pow(2, -48/12);
const B0 = 440 * Math.pow(2, -46/12);
const C1 = 440 * Math.pow(2, -45/12);
const D1 = 440 * Math.pow(2, -43/12);
const E1 = 440 * Math.pow(2, -41/12);
const F1 = 440 * Math.pow(2, -40/12);
const G1 = 440 * Math.pow(2, -38/12);
const A1 = 440 * Math.pow(2, -36/12);
const B1 = 440 * Math.pow(2, -34/12);
const C2 = 440 * Math.pow(2, -33/12);
const D2 = 440 * Math.pow(2, -31/12);
const E2 = 440 * Math.pow(2, -29/12);
const F2 = 440 * Math.pow(2, -28/12);
const G2 = 440 * Math.pow(2, -26/12);
const A2 = 440 * Math.pow(2, -24/12);
const B2 = 440 * Math.pow(2, -22/12);
const C3 = 440 * Math.pow(2, -21/12);
const D3 = 440 * Math.pow(2, -19/12);
const E3 = 440 * Math.pow(2, -17/12);
const F3 = 440 * Math.pow(2, -16/12);
const G3 = 440 * Math.pow(2, -14,12);
const A3 = 440 * Math.pow(2, -12/12);
const B3 = 440 * Math.pow(2, -10/12);
const C4 = 440 * Math.pow(2, -9/12);
const D4 = 400 * Math.pow(2, -7/12);
const E4 = 440 * Math.pow(2, -5/12);
const F4 = 440 * Math.pow(2, -4/12);
const G4 = 440 * Math.pow(2, -2/12);
const A4 = 440;
const B4 = 440 * Math.pow(2, 2/12);
const C5 = 440 * Math.pow(2, 3/12);
const D5 = 440 * Math.pow(2, 5/12);
const E5 = 440 * Math.pow(2, 7/12);
const F5 = 440 * Math.pow(2, 8/12);
const G5 = 440 * Math.pow(2, 10/12);
const A5 = 440 * Math.pow(2, 12/12);

function Synth (context) {
    this.context = context;
    this.sixteenth = 0.125;
    this.eighth = 0.25;
    this.quarter = 0.50;
    this.half = 1;
    this.dottedHalf = 1.50;
    this.whole = 2;

    this.susSixteenth = 0.1;
    this.susEighth = 0.2;
    this.susQuarter = 0.45;
    this.susHalf = 0.95;
    this.susDottedQuarter = 1.45;
    this.susWhole = 1.95;
}

Synth.prototype.setup = function() {
  const audioCtx = this.context;
  const partialAmplitudes = [1, 0.5, 0.7, 0.3,];
  this.partials = partialAmplitudes.map(() => audioCtx.createOscillator());
  this.partialGains = partialAmplitudes.map(() => audioCtx.createGain());
  this.masterGain = audioCtx.createGain();

  partialAmplitudes.forEach((amp, index) => {
    this.partialGains[index].gain.value = amp;
    this.partials[index].connect(this.partialGains[index]);
    this.partialGains[index].connect(this.masterGain);
  });
  this.masterGain.gain.value = 0.4;
  this.masterGain.connect(this.context.destination);
};

Synth.prototype.trigger = function(frequency, time, sustain) {
  this.setup();

  this.partials.forEach((o, index) => {
    o.frequency.setValueAtTime(frequency * (index + 1), time);
  });

  this.partials.forEach((o => o.start(time)));
  this.partials.forEach(o => o.stop(time + sustain));
};

Synth.prototype.melody1 = function(t) {
  this.trigger(D3, t, this.susSixteenth);
  this.trigger(E3, t + this.sixteenth, this.susSixteenth);
  this.trigger(F3, t + this.eighth, this.susSixteenth);
  this.trigger(G2, t + this.quarter - this.sixteenth, this.susSixteenth);
  this.trigger(A2, t + this.quarter, this.susQuarter);
  this.trigger(B2, t + this.half, this.susSixteenth);
  this.trigger(C3, t + this.half + this.sixteenth, this.susSixteenth);
  this.trigger(D3, t + this.half + this.eighth, this.susEighth);
  this.trigger(C3, t + this.dottedHalf, this.susEighth);
  this.trigger(G2, t + this.dottedHalf + this.eighth, this.susEighth);
};

Synth.prototype.melody2 = function (t) {
  this.trigger(C3, t, this.susEighth);
  this.trigger(E3, t + this.eighth, this.susEighth);
  this.trigger(G3, t + this.quarter, this.susSixteenth);
  this.trigger(F3, t + this.quarter + this.sixteenth, this.susSixteenth);
  this.trigger(E3, t + this.quarter + this.eighth, this.susSixteenth);
  this.trigger(D3, t + this.half - this.sixteenth, this.susSixteenth);
  this.trigger(G2, t + this.half, this.susQuarter);
  this.trigger(C3, t + this.dottedHalf, this.susQuarter);
};

Synth.prototype.melody3 = function (t) {
  this.trigger(G2, t, this.susSixteenth);
  this.trigger(A2, t + this.sixteenth, this.susSixteenth);
  this.trigger(B2, t + this.eighth, this.susSixteenth);
  this.trigger(C3, t + this.quarter - this.sixteenth, this.susSixteenth);
  this.trigger(A2, t + this.quarter, this.susSixteenth);
  this.trigger(B2, t + this.quarter + this.sixteenth, this.susSixteenth);
  this.trigger(C3, t + this.quarter + this.eighth, this.susSixteenth);
  this.trigger(D3, t + this.half - this.sixteenth, this.susSixteenth);
  this.trigger(B2, t + this.half, this.susSixteenth);
  this.trigger(C3, t + this.half + this.sixteenth, this.susSixteenth);
  this.trigger(D3, t + this.half + this.eighth, this.susSixteenth);
  this.trigger(E3, t + this.dottedHalf - this.sixteenth, this.susSixteenth);
  this.trigger(E3, t + this.dottedHalf, this.susSixteenth);
  this.trigger(D3, t + this.dottedHalf + this.sixteenth, this.susSixteenth);
  this.trigger(C3, t + this.dottedHalf + this.eighth, this.susEighth);
};

Synth.prototype.melody4 = function (t) {
  this.trigger(A1, t, this.susSixteenth);
  this.trigger(A1, t + this.sixteenth, this.susSixteenth);
  this.trigger(A1, t + this.eighth, this.susEighth);
  this.trigger(C2, t + this.quarter, this.susSixteenth);
  this.trigger(C2, t + this.quarter + this.sixteenth, this.susSixteenth);
  this.trigger(C2, t + this.quarter + this.eighth, this.susEighth);
  this.trigger(E2, t + this.half, this.susSixteenth);
  this.trigger(E2, t + this.half + this.sixteenth, this.susSixteenth);
  this.trigger(E2, t + this.half + this.eighth, this.susEighth);
  this.trigger(G2, t + this.dottedHalf, this.susSixteenth);
  this.trigger(G2, t + this.dottedHalf + this.sixteenth, this.susSixteenth);
  this.trigger(G2, t + this.dottedHalf + this.eighth, this.susEighth);
};

Synth.prototype.playLoop = function(t, melody) {
    this[melody](t);
    this[melody](t + 2);
    this[melody](t + 4);
};

