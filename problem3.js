// the following is a solution to the euler project's problem 3 https://projecteuler.net/problem=3

// i originally made a pretty comple code with two functions (one to find all the factors and one to check to see if the factors were prime)
// overall it gets the job done, but way too much computing power. Revised my code with some inspiration from a fellow classmate


// CODE 1 (don't try to plug in that really fat number cuz it will crash you)
// a function that finds factors in n
var factors = [];
var divisors = function(n)
{
	for (i = 2; i < n; i++)
	{
		if (n % i === 0)
		{
			factors.push(i);
		}
	}
};

// a function that checks factors to see if the are prime, and if the are, submits them to a
var primeCheck = true;
var primeNumbers = [];
var isPrime = function()
{	loop1:
	for (var y in factors)
	{
		for (var j = 2; j < factors[y]; j++)
		{
			if (factors[y] % j === 0)
			{
				primeCheck = false;
				if (primeCheck === false)
					{
						continue loop1;
					}
			}
			else if (factors[y] % j !== 0)
			{
				primeCheck = true;
			}
		}
		if (primeCheck === true)
		{
			primeNumbers.push(factors[y]);
		}
	}
};

isPrime();
console.log("The prime numbers are " + primeNumbers);


// upon comparison, my code sucks. attempts to optimize and incorpate other code i have seen

// CODE 2 - beautiful in its simplicity and elegance. Props to https://github.com/imousterian/OdinProject/blob/master/euler_problems/euler_pr3.js

var prime = 0;
var div = 2;
var findPrime = function(input)
{
	while (input > 1)
	{
		while (input % div === 0) // checking for factors. the largest logical factor will 2 * something
		{
			prime = input;
			input = input / div; // think 100 = 50 * 2
		}
		div++ // keep increasing div until the new input is divisible ie input = 50 / 5
		// eventually div will increase to a point where inputs are no longer divisible by anything cleanly, and div will be so large that input < 1
	}
	return prime;
};

findPrime(10);
console.log(prime);


