**Part 1b: A Little More of a Challenge**

1) Because var is bound by the function, i  gets up to 3 (array length) before the loop terminates.  
2) discountedPrice goes to 150. It has the last value from the loop (300 x (1 - 0.5) = 150).  
3) finalPrice is again just 150 because it just keeps the last rounded value from the final iteration.  
4) [50, 100, 150] because the function just populates the discounted array with prices. 
5) Error. i is only accessible to the for-loop. Line 12 can’t do anything with it. 
6) Error. discountedPrice is only accessible to the for-loop. Line 13 can’t do anything with it. 
7) finalPrice is set at 150. There’s no error because finalPrice is declared before the if-condition, 
and because of that, it’s accessible afterwards as well. 
8) [50, 100, 150] all the variables have perfect scope. No errors, no mistakes. 
9) Error. i is only accessible in the for-block 
10) length = 3. There’s no error because length is declared before the if-condition, and because of 
that, it’s accessible afterwards as well. 
11) [50, 100, 150]. There is no error because while discounted array is const, its contents can still be 
changed with .push(). 

**Part 1c: Data Types**

12)  
a) student.name  
b) student[‘Grad Year’]  
c) student.greeting()  
d) student[‘Favorite Teacher’].name  
e) student.courseLoad[0]  

**Part 1d: Basic Operators & Type Conversion**

13)  
a) 32 → because this becomes concatenation during addition  
b) 1 → because this becomes numeric operation for subtraction  
c) 3 → because null becomes 0 in numeric operations  
d) 3null → because null becomes the string “null”  
e) 4 → because true becomes 1  
f) 0 → because both false and null mean 0  
g) 3undefined → because undefined becomes a string  
h) NaN → undefined becomes NaN in math  

14)  
a) true → the string ‘2’ becomes 2  
b) false → we just go by alphabet  
c) true → the ‘==” turns the 2 into ‘2’  
d) false → strict equality makes sure to check the value AND the type  
e) false → true is coerced into 1, and 1 != 2  
f) true → Boolean(2) gives me true, and they’re the same type.  

15) == is almost looser than === because the former kind of forces equality in some cases because it 
does type coercion. The latter gives me false if the types are different! 

**Part 1f: Functions**

17) [2, 4, 6] because modifyArray iterates through [1, 2, 3]. For each element, it calls doSomething, 
and this multiplies the number by 2 (1x2, 2x2, 3x2) and populates newArr with the result 

**Part 1g: Final Question**

19) 1, 4, 3, 2 → 1 and 4 are immediately logged as synchronous code. setTimeout with 0 ms. is 
added to the event queue and runs after main script. setTimeout with 1000 ms runs last. 
