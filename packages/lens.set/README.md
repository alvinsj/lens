# lens.set

Similar to [`lodash.set`](https://lodash.com/docs/4.17.4#set), but maintaining the immutability of data. 

## example
```js
const helloWorld = {hello: [{place: 'world'}]}

const lensPath = ['hello', 0, 'place'];
const helloSingapore = set(lensPath, 'singapore', helloWorld);

console.log(helloSingapore); // {hello: [{place: 'singapore'}]}
console.log(helloWorld === helloSingapore); // false
```

## properties
- properties inherited from [`immutability-helper`]()
  - [maintains immutability](https://github.com/kolodny/immutability-helper#immutability-helper)
  - [no autovivification](https://github.com/kolodny/immutability-helper#autovivification)
  - maintains value if there is no change
