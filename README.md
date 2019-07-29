# spam-detection

Small package based on Naive Bayes classifier to classify messages as spam or ham.

# Install
```
npm install spam-detection

```
# Usage
```
const spamcheck = require('spam-detection');

const ans = spamcheck.detect('hello how are you') // invoke detect method

console.log(ans); // ham

const result = spamcheck.getResult('hello how are you')

console.log(result); // [ { label: 'ham', value: 0.01866475233309404 },
                        { label: 'spam', value: 0.0030509691313711416 } ]
```
# License

ISC

