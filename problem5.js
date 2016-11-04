// project euler problem 5. i told myself i'd do the first 5 problems before moving on in the odin project. salvation is near.
// https://projecteuler.net/problem=5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

//completed way past my bedtime once again ~('.')/ 11/4/15

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// remove redundant factors -- possibly make a function to remove these redundant integers?

var numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
var check = [];
var i = 0;
var divisible = x / i;
var x = 20;
var sum = 0;
var multiples = function ()
{	
	for (var x = 20; x < 1000000000; x += 20) // arbitrary x limit & x +=20 because that is the largest factor
	{
		i = 0;
		check = [];
		sum = 0;
		divisible = x % numbers[i];
		while (i < numbers.length)
		{	
			divisible = x % numbers[i];
			check.push(divisible);
			sum += check[i];
			i++
			if (sum === 0 && check.length === numbers.length)
			{
				return x;
			}
		}	
	}
}	
multiples();

