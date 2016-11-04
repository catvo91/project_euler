// problem 4 of projet euler A palindromic number reads the same both ways. The i palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

//Find the i palindrome made from the product of two 3-digit numbers.

//https://projecteuler.net/problem=4

//first tenative answer. unsure of how reliable it is among other numbers.

// if this taught me one thing, its to actively understand what your variables are doing at any point in your code

// not putting x = 999; at the beginning of the loop gave me so many problems and made me wonder what the hell i was doing wrong or if i was just dumb

//completed 11/3 way past my bedtime

//this answer takes some computational user input, with understanding that a 3 digit integer x 3 digit interger would at max be 999 x 999 = 998001 and at smallest it would be 100 x 100 = 10000

// x & i have to be adjusted accordingly, along with y > upper limit (of 1000 here, cuz max of 3 integers)

// removed the labels


var palindrome = function()
{	var reverse = 0;
	var x = 999;
	var y = i / x;
	var z = 1;
	for (var i = 998001; i > 100000; i--)
	{
		x = 999;
		y = i / x;
		z = 1;
		reverse = parseInt(i.toString().split('').reverse().join(''));
		while (i === reverse && y < 999)
		{
			y = i / x;
			z = i % x;
			if (z === 0)
			{
				return {
					i: i,
					x: x,
					y: y,
				}
			}
			x--;
		}
	}
}
var palindromeResult = palindrome();
console.log(palindromeResult);

