const BayesClassifier = require('bayes-classifier');

var classifier = new BayesClassifier()
var storedClassifier = require('./store.json');
classifier.restore(storedClassifier)

module.exports.detect = function(str) {
   var ans =  classifier.classify(str);
   return ans;
}

module.exports.getResults = function(str){
   var ans = classifier.getClassifications(str);
   return ans;
}



