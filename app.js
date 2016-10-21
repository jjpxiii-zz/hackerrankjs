var input = "5 2 3\n1 3 3";
var triangle = require('./triangleperimeter');
var triplets = require('./triplets');
//var circu = require('./circulararrayrotation');
//console.log(circu.processData(input));

function filter_list(l) {
    return l.filter(function (a) { return (typeof a !== 'string'); });
}

function squareOrSquareRoot(array) {
    for (var i = 1; i < array.length; i++) {
        if (Math.sqrt(array[i]) % 1 == 0)
            array[i] = Math.sqrt(array[i]);
        else
            array[i] *= array[i];
    }
    return array;
}

function alphabetPosition(text) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var final = "";
  for(var i=0; i<text.length; i++)
  {
    final += alphabet.indexOf(text.toLowerCase())+1 + " ";
  }
  return final.trim();
}

function tribonacci(signature, n){
if (n===0) return [];
if (!signature) signature = [];

  if (n===1) return signature.length == 0 ? [signature[0]] : signature; 
  if (n===2 && signature.length == 1) return [signature[0],signature[1]];
  if (n===3 && signature.length == 2) return [signature[0],signature[1], signature[2]];
  if (signature.length==0) signature.push(signature[0],signature[1],signature[2], signature[0] + signature[1] + signature[2]);
else if (n > 3) signature.push(signature[signature.length-3] + signature[signature.length-2] + signature[signature.length]);
  return tribonacci(signature, n-1);
}

console.log(tribonacci([1,1,1],10));

//console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));