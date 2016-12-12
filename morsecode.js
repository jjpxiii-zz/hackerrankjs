function palindrome(str) {
    var len = str.length;
    for (var i = 0; i < Math.floor(len / 2); i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

var decodeBits = function (bits) {
    var bits = bits.trim().replace(/^0+|0+$/g, "");
    if (bits.indexOf(0) == -1) return '.';
    if (palindrome(bits)) {
        if ((bits.match(/1/g) || []).length / (bits.match(/0/g) || []).length == 6) return '--';
        if ((bits.match(/1/g) || []).length > (bits.match(/0/g) || []).length) return '..';
    }
    var tx = 1;
    var space = "0000000";
    while (bits.indexOf(space.repeat(tx)) > -1) {
        tx++;
    }
    tx--;
    var t = tx > 0 ? bits.replace(new RegExp('0'.repeat(7 * tx), 'gi'), '   ').replace(new RegExp("1".repeat(3 * tx), 'gi'), '-').replace(new RegExp('0'.repeat(3 * tx), 'gi'), ' ').replace(new RegExp('1'.repeat(tx), 'gi'), '.').replace(new RegExp('0'.repeat(tx), 'gi'), '') :
        bits.indexOf("01110") > -1 ? bits.replace(new RegExp("111", 'gi'), '-').replace(new RegExp('1', 'gi'), '.').replace(new RegExp('0', 'gi'), '') :
            bits.replace(/0{3,}/gi, '#').replace(/1{3,}/gi, '-').replace(/1{1,2}/gi, '.').replace('#', ' ').replace(/0{1,2}/gi, '');
    return t;
}

module.exports = {
    decodeBitsAdvanced: function (bits) {
        bits = bits.replace(/(^0+|0+$)/g, '')

        // Find transmission rate
        var rate = Math.min.apply(null, bits.match(/0+|1+/g).map(function (b) { return b.length }))

        var count1 = bits.match(/1+/g).map(function (b) { return b.length });
        var count0 = bits.match(/0+/g).map(function (b) { return b.length });

        var l1 = bits.match(/0+|1+/g);

        var a = {}
        for (var i = 0; i < l1.length; i++) {
            if (!a[l1[i].length]) a[l1[i].length] = 1
            else a[l1[i].length] = a[l1[i].length] + 1
        }

        var rateDots = '';
        var rateDashes = '';
        var rateLongSpaces = '';

        var index = 1;
        var firstInt = false;
        var secondInt = false;

        for (var i = 1; i <= Number(Object.keys(a).slice(-1)[0]); i++) {
            // if (index > Object.keys(a).length) break;
            if (!a[i]) {
                if (!firstInt && rateDots.length > 0) firstInt = true;
                else if (!secondInt && rateDashes.length > 0) secondInt = true;
                continue;
            }
            if (!firstInt) {
                rateDots += i + ',';
                continue;
            }
            if (!secondInt) {
                rateDashes += i + ',';
                continue;
            }

            rateLongSpaces += i + ',';
            continue;
        }

        var keys = []; for (var key in a) keys.push(key);
        var c = keys.sort(function (y, z) { return a[z] - a[y] });

        console.log(c[0])
        console.log(c[1])
        console.log(c[2])
        console.log(c[3])
        console.log(c[4])
        // cas difficile
        if (rateDots.length < 0 || rateDashes < 0 || rateLongSpaces < 0) {
            console.log('hard')
            rateDots = rate + ',' + (rate * 3 - 1)
            rateDashes = (rate * 3) + ',' + (rate * 7 - 1)
            rateLongSpaces = (rate * 7) + ','
        }

        else {
            console.log('dots ' + rateDots)
            console.log('dashes ' + rateDashes)
            console.log('long ' + rateLongSpaces)
            var temp = rateDots.substring(0, rateDots.length - 1).split(',');
            rateDots = temp[0] + ',' + (temp.length > 1 ? temp[temp.length - 1] : '');

            temp = rateDashes.substring(0, rateDashes.length - 1).split(',');
            // rateDashes = temp[0] + ',' + (temp.length > 1 ? temp[temp.length - 1] : '');
            rateDashes = temp[0] + ','

            temp = rateLongSpaces.substring(0, rateLongSpaces.length - 1).split(',');
            // rateLongSpaces = temp[0] + ',' + (temp.length > 1 ? temp[temp.length - 1] : '');
            rateLongSpaces = temp[0] + ','
        }

        var longSpaces = RegExp(0 + '{' + rateLongSpaces + '}', 'g');
        var spaces = RegExp(0 + '{' + rateDashes + '}', 'g');
        var dashes = RegExp(1 + '{' + rateDashes + '}', 'g');
        var dots = RegExp(1 + '{' + rateDots + '}', 'g');

        bits = bits.replace(longSpaces, '   ');
        bits = bits.replace(spaces, ' ');
        bits = bits.replace(dashes, '-');
        bits = bits.replace(dots, '.')
        bits = bits.replace(/[01]/g, '');

        return bits;
    },
    decodeBitsAdvanced2: function (bits) {
        // Trim zeros
        bits = bits.replace(/(^0+|0+$)/g, '')

        // Find transmission rate
        var rate = Math.min.apply(null, bits.match(/0+|1+/g).map(function (b) { return b.length }))

        var count1 = bits.match(/1+/g).map(function (b) { return b.length });
        var count0 = bits.match(/0+/g).map(function (b) { return b.length });

        var l1 = bits.match(/1+/g);

        var a = {}
        for (var i = 0; i < l1.length; i++) {
            if (!a[l1[i].length]) a[l1[i].length] = 1
            else a[l1[i].length] = a[l1[i].length] + 1
        }

        var rateDots = '';
        var rateDashes = '';
        var rateLongSpaces = '';

        var index = 1;
        var firstInt = false;
        var secondInt = false;

        for (var i = 1; i <= Number(Object.keys(a).slice(-1)[0]); i++) {
            // if (index > Object.keys(a).length) break;
            if (!a[i]) {
                if (!firstInt && rateDots.length > 0) firstInt = true;
                else if (!secondInt && rateDashes.length > 0) secondInt = true;
                continue;
            }
            if (!firstInt) {
                rateDots += i + ',';
                continue;
            }
            if (!secondInt) {
                rateDashes += i + ',';
                continue;
            }

            rateLongSpaces += i + ',';
            continue;
        }

        var keys = []; for (var key in a) keys.push(key);
        var c = keys.sort(function (y, z) { return a[z] - a[y] });

        console.log(c[0])
        console.log(c[1])
        console.log(c[2])
        console.log(c[3])
        console.log(c[4])
        // cas difficile
        if (rateDots.length < 0 || rateDashes < 0 || rateLongSpaces < 0) {
            console.log('hard')
            rateDots = rate + ',' + (rate * 3 - 1)
            rateDashes = (rate * 3) + ',' + (rate * 7 - 1)
            rateLongSpaces = (rate * 7) + ','
        }

        else {
            console.log('dots ' + rateDots)
            console.log('dashes ' + rateDashes)
            console.log('long ' + rateLongSpaces)
            var temp = rateDots.substring(0, rateDots.length - 1).split(',');
            rateDots = temp[0] + ',' + (temp.length > 1 ? temp[temp.length - 1] : '');

            temp = rateDashes.substring(0, rateDashes.length - 1).split(',');
            // rateDashes = temp[0] + ',' + (temp.length > 1 ? temp[temp.length - 1] : '');
            rateDashes = temp[0] + ','

            temp = rateLongSpaces.substring(0, rateLongSpaces.length - 1).split(',');
            // rateLongSpaces = temp[0] + ',' + (temp.length > 1 ? temp[temp.length - 1] : '');
            rateLongSpaces = temp[0] + ','
        }

        var longSpaces = RegExp(0 + '{' + rateLongSpaces + '}', 'g');
        var spaces = RegExp(0 + '{' + rateDashes + '}', 'g');
        var dashes = RegExp(1 + '{' + rateDashes + '}', 'g');
        var dots = RegExp(1 + '{' + rateDots + '}', 'g');

        bits = bits.replace(longSpaces, '   ');
        bits = bits.replace(spaces, ' ');
        bits = bits.replace(dashes, '-');
        bits = bits.replace(dots, '.')
        bits = bits.replace(/[01]/g, '');

        return bits;
        // Convert to morse code
        // bits = bits
        //     .replace(new RegExp('(?:111){' + rate + '}(?:0{' + rate + '}|$)', 'g'), '-')
        //     .replace(new RegExp('1{' + rate + '}(?:0{' + rate + '}|$)', 'g'), '.')
        //     .replace(new RegExp('(?:000000){' + rate + '}', 'g'), '   ')
        //     .replace(new RegExp('(?:00){' + rate + '}', 'g'), ' ')

        // return bits
    },

    decodeMorse: function (morseCode) {
        return morseCode.trim().replace(new RegExp("   ", 'gi'), ' # ').split(' ').map(function (word) { return word == "#" ? " " : MORSE_CODE[word]; }).join('');
    }
}
