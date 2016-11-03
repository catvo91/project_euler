var largest = 9801; 
var reverse = 0;
var x = 99;
var y = 0;
var palindrome = function()
{
	while (largest <= 9801)
	{
		reverse = parseInt(largest.toString().split('').reverse().join(''));
		while (largest !== reverse)
		{   
			largest--
			reverse = parseInt(largest.toString().split('').reverse().join(''));
			//so this loop finds palindromes, next step is to evaluate divisibility
		}
		while (largest % x !== 0 && largest % y !== 0 && x > 50)
		{
			x--
			y = largest / x;
			//if it does hit something where largest % x === 0 & y < 100, exits the loop
		}
		return;
	}

}

palindrome();
console.log(largest);
console.log(x);
console.log(y);


// scratch work

var largest = 9801; 
var reverse = 0;
var x = 99;
var y = 0;
var divisible = function()

{
	while (largest % x !== 0 && x > 50)
	{
		x--
		if (largest % y !==0)
		{
			x--
		}

	}
	return;
}

palindrome();
console.log(largest);
console.log(x);
console.log(y);