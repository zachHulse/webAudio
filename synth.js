

function Synth (context) {
  this.context = context;
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

