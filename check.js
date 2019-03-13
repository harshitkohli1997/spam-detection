const BayesClassifier = require('bayes-classifier');

const data = require('./dataset/data');

var classifier = new BayesClassifier()
var storedClassifier = require('./store.json');
classifier.restore(storedClassifier)

for(var k =0; k < 20; k++)
{
    console.log(classifier.classify(data[k].input),' actual ans is '+data[k].output);
}