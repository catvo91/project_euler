//first attempt on my own

var sum = 0;

for (var i = 0; i < 1000; i++)
{
    if ( i % 3 === 0 && i % 5 === 0)
    {
        sum += i;
    }
    else if (i % 3 === 0 && i % 5 !== 0)
    {
        sum += i;
    }
    else if (i % 3 !== 0 && i % 5 === 0)
    {
        sum += i;
    }
};

console.log(sum);

// after reviewing others' answers, realizing my code is redundant and || serves our purposes better here

var sum = 0;

for (var i = 0; i < 1000; i++)
{
    if ( i % 3 === 0 || i % 5 === 0)
    {
        sum += i;
   };
};

