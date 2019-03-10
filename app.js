

var brain = require('brain.js');
const fs = require('fs');
var net = new brain.recurrent.LSTM();
net.train([
  {input: "my unit-tests failed.", output: '1'},
  {input: "tried the program, but it was buggy.", output: '1'},
  {input: "i need a new power supply.", output:'0'},
  {input: "the drive has a 2TB capacity.", output: '0'},
  {input: "unit-tests", output: '1'},
  {input: "program", output: '1'},
  {input: "power supply", output:'0' },
  {input: "drive", output: '0'},
], { iterations:500});

fs.writeFileSync('trained-net.js', `export default ${ net.toFunction().toString() };`);

  

 

    

