# lens.view

Following implementation of [`ramda.view`](http://ramdajs.com/docs/#view)

## example
```js
const helloWorld = {hello: [{place: 'singapore'}]}

const lensPath = ['hello', 0, 'place'];
const where = view(lensPath, helloWorld);

console.log(where); // 'singapore'
```
