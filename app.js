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
  for (var i = 0; i < text.length; i++) {
    final += alphabet.indexOf(text.toLowerCase()) + 1 + " ";
  }
  return final.trim();
}

function tribonacci(signature, n) {
  if (n === 0) return [];
  if (!signature) signature = [];

  if (n === 1) return signature.length == 0 ? [signature[0]] : signature;
  if (n === 2 && signature.length == 1) return [signature[0], signature[1]];
  if (n === 3 && signature.length == 2) return [signature[0], signature[1], signature[2]];
  if (signature.length == 0) signature.push(signature[0], signature[1], signature[2], signature[0] + signature[1] + signature[2]);
  else if (n > 3) signature.push(signature[signature.length - 3] + signature[signature.length - 2] + signature[signature.length]);
  return tribonacci(signature, n - 1);
}

function solution(digits) {
  var d = digits.toString();
  var longest = 0;
  for (var i = 0; i < d.length - 4; i++) {
    var n = parseInt(d.slice(i, i + 5));
    if (n > longest) longest = n;
  }
  return longest;
}

function iqTest(numbers) {
  var s = numbers.split(' ');
  var even = 0;
  var odd = 0;

  for (var i = 0; i < 3; i++) {
    s[i] % 2 == 0 ? even++ : odd++;
  }
  for (var i = 0; i < s.length; i++) {
    if (even < odd && s[i] % 2 == 0 || even > odd && s[i] % 2 == 1) {
      return i + 1;
    }
  }
}

var Vector = function (components) {
  this.components = components;
  this.equals = function (v) {
    return arraysEqual(this.components, v.components);
  };
  this.add = function (v) {
    if (this.components.length != v.components.length) throw "error";
    var result = [];
    for (var i = 0; i < this.components.length; i++) {
      result[i] = this.components[i] + v.components[i];
    }
    return new Vector(result);
  };
  this.subtract = function (v) {
    if (this.components.length != v.components.length) throw "error";
    var result = [];
    for (var i = 0; i < this.components.length; i++) {
      result[i] = this.components[i] - v.components[i];
    }
    return new Vector(result);
  };
  this.dot = function (v) {
    if (this.components.length != v.components.length) throw "error";
    var result = 0;
    for (var i = 0; i < this.components.length; i++) {
      result += this.components[i] * v.components[i];
    }
    return result;
  };
  this.norm = function () {
    var result = 0;
    for (var i = 0; i < this.components.length; i++) {
      result += Math.pow(this.components[i], 2);
    }
    return Math.sqrt(result);
  };
  this.toString = function () {
    return '(' + this.components.join(',') + ')';
  };
};

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function validParentheses(parens){
  var s = [];
  parens.split('').forEach(x => x =='(' ? s.push('(') : s.pop() == undefined ? s.push(')') : void(0));
  return s.length == 0;
}

function isValidIP(str) {
console.log(str)
//return res = str ? false : str.split('.').length != 4 ? false : str.trim().split('.').every(o => parseInt(o) >= 0 && parseInt(o) < 256);
var s = str.trim().split('.');
console.log(s);
for (var i=0;i<4;i++)
{
  if(str.indexOf(' ') > 0) return false;
  if(str.trim()=='0.0.0.0') return false;
  if (!str) return false;
  if (str.trim().split('.').length != 4) return false;
  if (parseInt(s[i].trim()) >= 0 && parseInt(s[i].trim()) < 256)
    continue;
  return false;
}  
return true;
  //return str.trim().split('.').every(o => parseInt(o) >= 0 && parseInt(o) < 256);;
}


var a = new Vector([1, 2]);
var b = new Vector([3, 4]);
console.log(isValidIP(' 1.2.3.4'));
console.log(isValidIP('0.0.0.0'));
console.log(isValidIP('123.45.67.89'));

//console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));