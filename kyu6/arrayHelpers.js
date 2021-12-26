// TODO
Array.prototype.square = function () { return this.map(num => { return num * num }) }
Array.prototype.cube = function () { return this.map(num => { return num * num * num }) }
Array.prototype.sum = function () { return this.reduce((a, b) => { return a + b }, 0) }
Array.prototype.average = function () { return this.sum() / this.length }
Array.prototype.even = function () { return this.filter(num => { return num % 2 === 0 }) }
Array.prototype.odd = function () { return this.filter(num => { return num % 2 !== 0 }) }

/* 
This kata is designed to test your ability to extend the functionality of built -in classes.
In this case, we want you to extend the built -in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
*/