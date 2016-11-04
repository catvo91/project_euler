// project euler problem 5. i told myself i'd do the first 5 problems before moving on in the odin project. salvation is near.
// https://projecteuler.net/problem=5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

//completed way past my bedtime once again ~('.')/ 11/4/15

//added a function to remove redundant numbers from the prompt

var notRedundant = function()
{
	var original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	var factors = 0;
	var y = 0;
	var numbers = [];
	for (var x = 0; x < original.length; x++)
	{
		y = x + 1;
		factors = 1
		while (y < original.length && factors !== 0)
		{
			factors = original[y] % original[x];
			y++;
		}
		if (factors !== 0)
		{
		numbers.push(original[x]);
		}

	}
	return numbers;
}

var multiples = function (numbers)
{	notRedundant();
	var numbers = notRedundant();
	var i = 0;
	var divisible = x / i;
	var sum = 0;
	for (var x = 20; x < 1000000000; x += 20) // arbitrary x limit & x +=20 because that is the largest factor
	{
		i = 0;
		sum = 0;
		divisible = 0;
		while (i < numbers.length && divisible === 0)
		{	
			divisible = x % numbers[i];
			sum += divisible;
			i++
		}	
		if (sum === 0)
		{
			return x;
		}
	}
}	
multiples();
var multiplesResult = multiples();
console.log(multiplesResult);

