

var brain = require('brain.js');
const fs = require('fs');
var net = new brain.recurrent.LSTM();

const data = require('./dataset/data');

net.train(data
, { iterations:5000});

for(var i = 0; i < 20; i++)
{
console.log(net.run(data[i].input)+' actual ans is '+ data[i].output);
}
//fs.writeFileSync('trained-net.js', `export default ${ net.toFunction().toString() };`);

  

 

    

