var BayesClassifier = require('bayes-classifier')
var classifier = new BayesClassifier()
 
const data = require('./dataset/dataset');
const fs = require('fs');

console.log(data.length)
var positiveDocuments = []
var negativeDocuments = []
for(var i = 0; i < data.length; i++)
{
    if(data[i].output === "ham")
    {
    positiveDocuments.push(data[i].input);
    }
    else {
        negativeDocuments.push(data[i].input);
    }
}


 
classifier.addDocuments(positiveDocuments, `ham`)
classifier.addDocuments(negativeDocuments, `spam`)
 
classifier.train()
 
//console.log(classifier.classify(``)) // "positive"
for(var k =0; k < 20; k++)
{
    console.log(classifier.classify(data[k].input),' actual ans is '+data[k].output);
}
 
var storeFile = `${__dirname}/store.json`
fs.writeFileSync(storeFile, JSON.stringify(classifier));
