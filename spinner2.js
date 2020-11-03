const spinnerFrames = ['|', '/', '-', '\\', '|'];

for (let x = 0; x <= spinnerFrames.length; x++) {
  let frame = spinnerFrames[x] + '  ';
  if (x === spinnerFrames.length) {
    frame = "\n";
  }
  
  setTimeout(() => {
    process.stdout.write('\r' + frame);
  }, 100 + 200 * x);
}