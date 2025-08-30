## Accessing an array in JavaScript.
To access an array in JavaScript, we need to use the index value, each value inside the array has its own index value starting from `0` to `n` value
so if we have an array like this: 
```js 
const myArray = ["Hello", "World"];
```
We have an index from `0` to `1`. The `Hello` value is in index `0`, and now we can use it to access only that value using `console.log()`
```js 
const myArray = ["Hello", "World"];
console.log(myArray[0]); // this will only output the "Hello" on the console
```

## Using for loop
Lets say we have this array example below:
```js 
const items = ["Laptop","SmartPhone","Connector","Adapter","Flashdrive","wifi",];
```
So to access all the elements in the array we can use for loop to access them.
```js 
const items = ["Laptop","SmartPhone","Connector","Adapter","Flashdrive","wifi",];
for(var i = 0, len = items.length; i <= 0; i++){
  console.log(items[i]);
}
```
