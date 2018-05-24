/***** 
 * Problem 1
 Multiples of 3 and 5
 */
function multiples3_5(num) {
    var nat_nums = [];
    var sum = 0;

    if(num <= 20000){
        for(i = 1 ; i < num; i++){
            if((i % 3) == 0 || (i % 5) == 0){
                nat_nums.push(i);
            }
        }

        nat_nums.forEach(element => {
            sum += element;
        });
    }else {
        sum = 'too large';
    }

    return sum;
}

/****
 * Problem 2
Even Fibonacci Numbers 
*/
function evenfibonum(num){
    var fibo_nums = [];
    var fibo_sum = 0;
    var sum = 0;
    var len = 0;
   
    if(num <= 2000){
        for(i = 1; i < num; i++){
            len = fibo_nums.length;
            if(i==1)
                fibo_sum = 1;
            else if(i==2)
                fibo_sum = 2;
            else
                fibo_sum = fibo_nums[len-1] + fibo_nums[len-2];
        
            fibo_nums.push(fibo_sum);
         }
         
         fibo_nums.forEach(element => {
                if(element%2 == 0){
                    sum += element;
                }
        });
    }else {
        sum = 'too large';
    }

    return sum;
}

/**
 * Problem 3
 * Largest Prime Factor
 */
function largestprime(number){
    if(number < 6000000){
        var primes = primefactors(number);
        var primelen = primes.length;
        return primes[primelen - 1];
    }
    else {
        return "Number too large";
    }
}

function primefactors(number){
    var primeArray = [];
    
    for(var i = 2; i < number ; i++){
        if(number % i == 0){
            if(is_prime(i))
                primeArray.push(i);
        }  
    }

    if(is_prime(number)){
        primeArray.push(number);
    }

    return primeArray;
}

function is_prime(n){
    //var sqp = Math.floor(Math.sqrt(n));
    if(n < 2 || n == NaN || n == null) return false;
    if(n == 2) return true;
    if(n % 2 == 0) return false;
    for(var j = 3; j < n; j += 1){
        if(n % j == 0) 
            return false;
    }
    return true;
}

/****
 * Problem 4
 * Largest Palindrome Product 
 */
function largestpalindrome(n){
    if(n < 7){
        var palindromes = [];
        var palindromefound = false;
        var startnumber = Math.pow(10, n - 1);
        var endnumber = Math.pow(10,n) - 1;
    
        for(i = endnumber; i >= startnumber; i -= 1){
            for(j = endnumber; j >= startnumber; j -= 1){
                if(is_palindrome(i * j)){
                    palindromes.push(i * j);
                    palindromefound = true;
                }
                if(palindromefound ==  true) break;
            }
            if(palindromefound == true) break;
        }
    
        palindromefound = false;
        return palindromes;
    } else {
        return "Computation Error! Number too large"; 
    }
}

 function is_palindrome(number){
     var arr = number.toString().split("");
     var testarr = number.toString().split("").reverse();
     return ((arr.toString() == testarr.toString()) ? true : false);
 }


 /****
  * Problem 5
  * Smallest Multiple
  */

  function smallestmultiple(n){
      var multipleval;
      var isgot = false;

      for(i = n; i < 10000000; i += n){
          isgot = ((i%(n-1)) == 0);
          for(j = (n-1); j > 1; j -= 1){
              isgot = (((i % j) == 0) && isgot);
              if(isgot == false) break;
          }
          if(isgot == true){
            multipleval = i;
            break;
          }
      }

      if(isgot == false) multipleval = "Not found";
      isgot = false;
      return multipleval;
  }

/****
 * Problem 6 
 * Sum square difference 
 */

 function sumsquarediff(n){
     if(n < 10000000){
        var diff = squareofsums(n) - sumofsquares(n);
        return Math.abs(diff);
     }else{
         return "Number too large";
     }
 }

 function sumofsquares(n){
    var sumsquare = 0;

    for(i = 1; i <= n; i += 1){
        sumsquare += Math.pow(i,2);
    }

    return sumsquare;
 }

 function squareofsums(n){
     var squaresum = 0;

     for(i = 1; i <= n; i += 1){
         squaresum += i;
     }

     return Math.pow(squaresum, 2);
 }

 /**************
  * Problem 7
  * 10001st prime
  */

  function numberedprime(n){
      if(n < 20000){
        var primes = [];
        var plen, numofprimes = 100;
        var increment = 200;
  
        do {
          getprimes(numofprimes, primes);
          plen = primes.length;
          numofprimes += increment;
        } while (n > plen);
  
        return primes[n - 1];
      }else {
          return "Wastes too much time";
      }
  }

  function getprimes(n, p){
    for(i = 2; i < n; i += 1){
        if(is_prime(i)){
            p.push(i);
        }
    }
  }

  /***************
   * Problem 8 
   * Largest product in a series of numbers
   */
  function largestproductinseries(sublen){
      var digit1000 = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
      
      if(sublen < 1000 && sublen >= 0){
        var subdigit;
        var solarray = [];
        var len = digit1000.length - sublen + 1;
        
        for(j = 0; j < len; j++){
            subdigit = digit1000.substr(j,sublen);
            if(subdigit.search("0") < 0){
              solarray.push(digitmult(subdigit));
            }else continue;
        }
  
        solarray.sort(function(a,b) {return b - a});
        if(solarray[0]  == undefined) return "Number too large";
        else return solarray[0];
      }else {
          return "Invalid Input";
      }
  }

  function digitmult(arr){
      var mult = 1;
      var splittedarr = arr.split("");
      for(i = 0; i < splittedarr.length; i++){
          mult *= parseInt(splittedarr[i]);
      }

      return mult;
  }

  /***************
   * Problem 9
   * Special Pythagorean triplet
   */

    function specialpythagoreantriplet(limit){
        if(limit < 5000){
            var prods = [];
            var k;
            for(i = 2; i < limit; i++){
                for(j = 2; j < limit; j++){
                    if(ispythagoreantriplet(i , j)){
                        k = Math.sqrt(pythagorastriangle(i,j));
                        if((i+j+k) ==  limit){
                            prods.push(i +"|" + j + "|" + k + " Product abc: " + (i*j*k));
                        }
                    }
                }
            }
    
            if(prods.length == 0){
                return "Array is empty";
            }else {
                return prods;
            }
        }else {
            return "Computational Error";
        }
    }

    function ispythagoreantriplet(a , b){
        if(Number.isInteger(Math.sqrt(pythagorastriangle(a,b))) && (a < b)){
            return true;
        }else return false;
    }

    function pythagorastriangle(a,b){
        return Math.pow(a,2) + Math.pow(b,2);
    }

    /***************
   * Problem 10
   * Summation of primes
   */

   function summationofprimes(nlimit){
       var primes = [];
       var sum = 0;
       
       if(nlimit < 100000){
         sum = sumprimes(2, nlimit);
       }else {
          return "Computational Error. Number too large!";
       }

       return sum;
   }

   function sumprimes(st, n){
    var s = 0;
    for(i = st; i < n; i++ ){
        if(is_prime(i)){
            s += i;
        }
    }

    return s;
   }


   /***************
   * Problem 11
   * Largest product in a grid
   */

   function largestproductgrid(){
       var a = [[8,2,22,97,38,15,0,40,0,75,4,5,7,78,52,12,50,77,91,8],
                [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,4,56,62,0],
                [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,3,49,13,36,65]
    ];
       var mult = 1, b = [];
       for(i=0;i<20;i++){
           for(j=0;j<3;j++){
             mult *= a[j][i];
           }
           b.push(mult);
       }
       return b;
   }