const BayesClassifier = require('bayes-classifier');

const data = require('./dataset/dataset');

var classifier = new BayesClassifier()
var storedClassifier = require('./store.json');
classifier.restore(storedClassifier)

// for(var k =0; k < 20; k++)
// {
//     console.log(classifier.classify(data[k].input),' actual ans is '+data[k].output);
// }

module.exports.detect = function(str) {
   var ans =  classifier.classify(str);
   
   return ans;
}

module.exports.getResults = function(str){
   var ans = classifier.getClassifications(str);

   return ans;
}



