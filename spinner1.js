// process.stdout.write('hello from spinner1.js... \rheyyy\n');


setTimeout(() => {
  process.stdout.write('\r|  ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/  ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-  ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\  ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|  ');
}, 900);

setTimeout(() => {
  process.stdout.write('\rB A N A N A S');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r               \n');
}, 1030);