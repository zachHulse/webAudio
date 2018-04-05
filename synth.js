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

var sixteenth = 0.125;
var eighth = 0.25;
var quarter = 0.50;
var half = 1;
var dottedHalf = 1.50;
var whole = 2;

var susSixteenth = 0.1;
var susEighth = 0.2;
var susQuarter = 0.45;
var susHalf = 0.95;
var susDottedQuarter = 1.45;
var susWhole = 1.95;

function Synth (context) {
  this.context = context;
};

Synth.prototype.setup = function() {
  var audioCtx = this.context;
  var partialAmplitudes = [1, 0.5, 0.7, 0.3,];
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
  this.trigger(D3, t, susSixteenth);
  this.trigger(E3, t + sixteenth, susSixteenth);
  this.trigger(F3, t + eighth, susSixteenth);
  this.trigger(G2, t + quarter - sixteenth, susSixteenth);
  this.trigger(A2, t + quarter, susQuarter);
  this.trigger(B2, t + half, susSixteenth);
  this.trigger(C3, t + half + sixteenth, susSixteenth);
  this.trigger(D3, t + half + eighth, susEighth);
  this.trigger(C3, t + dottedHalf, susEighth);
  this.trigger(G2, t + dottedHalf + eighth, susEighth);
};

Synth.prototype.melody2 = function (t) {
  this.trigger(C3, t, susEighth);
  this.trigger(E3, t + eighth, susEighth);
  this.trigger(G3, t + quarter, susSixteenth);
  this.trigger(F3, t + quarter + sixteenth, susSixteenth);
  this.trigger(E3, t + quarter + eighth, susSixteenth);
  this.trigger(D3, t + half - sixteenth, susSixteenth);
  this.trigger(G2, t + half, susQuarter);
  this.trigger(C3, t + dottedHalf, susQuarter);
};

Synth.prototype.melody3 = function (t) {
  this.trigger(G2, t, susSixteenth);
  this.trigger(A2, t + sixteenth, susSixteenth);
  this.trigger(B2, t + eighth, susSixteenth);
  this.trigger(C3, t + quarter - sixteenth, susSixteenth);
  this.trigger(A2, t + quarter, susSixteenth);
  this.trigger(B2, t + quarter + sixteenth, susSixteenth);
  this.trigger(C3, t + quarter + eighth, susSixteenth);
  this.trigger(D3, t + half - sixteenth, susSixteenth);
  this.trigger(B2, t + half, susSixteenth);
  this.trigger(C3, t + half + sixteenth, susSixteenth);
  this.trigger(D3, t + half + eighth, susSixteenth);
  this.trigger(E3, t + dottedHalf - sixteenth, susSixteenth);
  this.trigger(E3, t + dottedHalf, susSixteenth);
  this.trigger(D3, t + dottedHalf + sixteenth, susSixteenth);
  this.trigger(C3, t + dottedHalf + eighth, susEighth);
};

Synth.prototype.melody4 = function (t) {
  this.trigger(A1, t, susSixteenth);
  this.trigger(A1, t + sixteenth, susSixteenth);
  this.trigger(A1, t + eighth, susEighth);
  this.trigger(C2, t + quarter, susSixteenth);
  this.trigger(C2, t + quarter + sixteenth, susSixteenth);
  this.trigger(C2, t + quarter + eighth, susEighth);
  this.trigger(E2, t + half, susSixteenth);
  this.trigger(E2, t + half + sixteenth, susSixteenth);
  this.trigger(E2, t + half + eighth, susEighth);
  this.trigger(G2, t + dottedHalf, susSixteenth);
  this.trigger(G2, t + dottedHalf + sixteenth, susSixteenth);
  this.trigger(G2, t + dottedHalf + eighth, susEighth);
};

