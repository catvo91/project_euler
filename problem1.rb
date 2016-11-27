# hi trying project euler with ruby
#If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
#The sum of these multiples is 23.
#Find the sum of all the multiples of 3 or 5 below 1000.
# so basically find a all numbers that are divisible by 3 or 5 below 1000 and add them together
# https://projecteuler.net/problem=1

def sum x #x is the limit of the problem, here it is 1000
	arrayofNumbers = []
	n = 0
	while n < x # integer n
		if n % 3 == 0 || n % 5 == 0
			arrayofNumbers << n
		end
		n += 1
	end # could do a while loop for the array addition, but thats proably unncessary computing power
	answer = arrayofNumbers.inject(0, :+) # (a, b) a denotes what number you start with, :+ probably is the addtion function
end

sum 1000

#solution 2 cuz why not // optimization

def sum x #x is the limit of the problem, here it is 1000
	answer = 0
	n = 0
	while n < x # integer n
		if n % 3 == 0 || n % 5 == 0
			answer += n
		end
		n += 1
	end
	return answer
end

puts sum 1000
