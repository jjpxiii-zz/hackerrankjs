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

function validParentheses(parens) {
  var s = [];
  parens.split('').forEach(x => x == '(' ? s.push('(') : s.pop() == undefined ? s.push(')') : void (0));
  return s.length == 0;
}

function isValidIP(str) {
  console.log(str)
  //return res = str ? false : str.split('.').length != 4 ? false : str.trim().split('.').every(o => parseInt(o) >= 0 && parseInt(o) < 256);
  var s = str.trim().split('.');
  console.log(s);
  for (var i = 0; i < 4; i++) {
    if (str.indexOf(' ') > 0) return false;
    if (str.trim() == '0.0.0.0') return false;
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

function computeThreesAndFives(n) {
  var res = 0
  var n3 = n - (n % 3)
  var n5 = n - (n % 5)
  var n15 = n - (n % 15)
  var sum3 = 0
  var sum5 = 0
  var sum15 = 0

  sum3 = n3 * (n3 + 3) / 6
  sum5 = n5 * (n5 + 5) / 10
  sum15 = n15 * (n15 + 15) / 30

  return sum3 + sum5 - sum15
}

Number.prototype.mod = function (n) {
  return ((this % n) + n) % n;
};

// var gcd = function (a, b) {
//   if (!b) {
//     return a;
//   }
//   return gcd(b, a % b);
// };

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  if (b > a) {
    var temp = a;
    a = b;
    b = temp;
  }

  while (true) {
    a %= b;
    if (a === 0) { return b; }
    b %= a;
    if (b === 0) { return a; }
  }
}

function decomposeFraction(n, d, arr) {
  if (!arr)
    var arr = [];
  if (n == 0 || !n || d == 0 || !d) {
    return [];
  }
  if (n % d == 0)
    arr.push((n / d).toString());
  else if (n == 1)
    arr.push(n + (d != 1 ? ("/" + d) : ""));
  else {
    arr.push("1" + (Math.ceil(d / n) == 1 ? "" : "/" + Math.ceil(d / n)));
    var n2 = (-d).mod(n);
    if (n2 == 0)
      return arr;
    var d2 = d * Math.ceil(d / n);
    decomposeFraction(n2 / gcd(n2, d2), d2 / gcd(n2, d2), arr);
  }
  return arr;
}

function decompose(n) {
  if (n.indexOf('/') > 0) {
    var num = Number(n.substring(0, n.indexOf('/')).trim());
    var denum = Number(n.substring(n.indexOf('/') + 1).trim());
  }
  else if (n.indexOf('.') > 0) {
    var num = Number(n.trim());
    var denum = 1;
    while (num % 1 != 0) {
      num *= 10;
      denum *= 10;
    }
  }
  return decomposeFraction(num, denum, null);
}



console.log(decompose("2/8"));

//var numberOfTimes = Int(readLine()!)!
//var n = Int(readLine()!)!
//var n = str.components(separatedBy :"\n")

// for (var i=1; i<numberOfTimes; i++)
// {
//     print(computeThreesAndFives(Int(readLine()!)!))
// }

var decodeBits = function(bits){
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces
    var bits = bits.trim();
    var tx = 1;
    var space = "0000000";
    while (bits.indexOf(space.repeat(tx)) > -1)
    {
      tx++;
    }
    tx--;
    var t = bits.replace('0'.repeat(7*tx)/g, ' ').replace("1".repeat(3*tx), '-').replace('0'.repeat(3*tx), '').replace('1'.repeat(tx), '.').replace('0'.repeat(tx), '');
    console.log(t); 
    return t;
}

var decodeMorse = function(morseCode){
    // ToDo: Accept dots, dashes and spaces, return human-readable message
    return morseCode.replace('.', MORSE_CODE['.']).replace('-', MORSE_CODE['-']).replace(' ', '');
}

decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011');