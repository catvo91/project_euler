# problem 3! its like strolling through memory lane
# The prime factors of 13195 are 5, 7, 13 and 29.

# What is the largest prime factor of the number 600851475143 ?
# project euler https://projecteuler.net/problem=3

def primeFactors(x)
	largestFactor = 1
	currentFactor = 1
	while currentFactor <= x # limit of the problem
		if x % currentFactor == 0 
			x = x / currentFactor
			if currentFactor > largestFactor
				largestFactor = currentFactor
				currentFactor = 0
			end
		end
		currentFactor += 1
	end
	return largestFactor
end

puts primeFactors(600851475143)


