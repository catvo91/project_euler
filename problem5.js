// project euler problem 5. i told myself i'd do the first 5 problems before moving on in the odin project. salvation is near.
// https://projecteuler.net/problem=5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// remove redundant factors

var numbers = [6, 7, 8, 9, 10]
var i = 0;
var divisible = true;
var multiples = function ()
{	loop1:
	for (var x = 20; x < 28; x += 2)
	{
		while (i < numbers.length && divisible === true)
		{
				if (x % numbers[i] !== 0)
				{
					divisible = false;
				}
				else if (divisible === true)
					{
						i++;
					}
		}
	continue loop1;
	}
};

multiples();
