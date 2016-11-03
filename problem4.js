// problem 4 of projet euler A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

//Find the largest palindrome made from the product of two 3-digit numbers.

//https://projecteuler.net/problem=4

//first tenative answer. unsure of how reliable it is among other numbers.

// if this taught me one thing, its to actively understand what your variables are doing at any point in your code

// not putting x = 999; at the beginning of the loop gave me so many problems and made me wonder what the hell i was doing wrong or if i was just dumb

//completed 11/3 way past my bedtime

//this answer takes some computational user input, with understanding that a 3 digit integer x 3 digit interger would at max be 999 x 999 = 998001 and at smallest it would be 100 x 100 = 10000

// x & largest have to be adjusted accordingly, along with y > upper limit (of 1000 here, cuz max of 3 integers)

var largest = 998001; 
var reverse = 0;
var x = 999;
var y = largest / x;
var palindrome = function()
{	loop1:
	for (var i = largest; i > 10000; i--)
	{
		x = 999;
		reverse = parseInt(i.toString().split('').reverse().join(''));
		if (i !== reverse)
		{
			continue loop1;
		}
		else
		{
			while (i % x !== 0 && x/y > 0.8 && x/y < 1.2) // the ratios for x/y were only added for efficiency -- i figured x & y would be relatively close together since we were maxing out largest as the largest possible palindrome and both variables were starting basically from 1000. one being skewed as large or small would vice versa make the other variable small or large.
			{
				x--
				y = i / x;
				if (y > 1000)
				{
					continue loop1;
				}
			}
			if (i % x === 0)
			{
				largest = i;
				y = largest / x;
				return;
			}
			else
			{
				continue loop1;
			}
		}
	}
}
palindrome();
console.log(largest);
console.log(reverse);
console.log(x);
console.log(y);
console.log(x/y);
