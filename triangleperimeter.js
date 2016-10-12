module.exports = {
	processData: function (input) {
		if (typeof input === 'string' || input instanceof String) {
			var n = input.split("\n")[0];
			var numbers = input.split("\n")[1].split(" ").sort(function (a, b) {
				return b - a;
			});
			for (var i=0; i < numbers.length - 2; i++)
			{
				var a = +numbers[i];
				var b = +numbers[i+1]; 
				var c = +numbers[i+2];
				if (a+b > c && a+c > b && b+c>a)
				{
					return numbers[i+2] + " " + numbers[i+1] + " " + numbers[i];
				}
			}
			return "-1";
		}
		else
			return "-1";
	}
}
