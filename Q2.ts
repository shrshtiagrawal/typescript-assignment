// Q2: Create a sample application in Typescript to find the prime numbers from 1 to 100.

var i : number=0;
var num : number=0;

for (i=0;i<=100;i++)
{
    var count : number=null ;
    for(num =i; num>=1; num--)
    {
           if(i%num==0)
       {
       count = count + 1;
       }
    }
    if (count ==2)
    {
       console.log(i);
    }
}