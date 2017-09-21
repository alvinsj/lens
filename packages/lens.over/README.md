# lens.over

Following implementation of [`ramda.over`](http://ramdajs.com/docs/#over)

## example
```js
const helloWorld = {hello: [{place: 'world'}]}

const lensPath = ['hello', 0, 'place'];
const helloBigWorld = over(lensPath, (i) => i.toUpperCasee(), helloWorld);

console.log(helloBigWorld); // {hello: [{place: 'WORLD'}]}
console.log(helloWorld === helloBigWorld); // false
```
