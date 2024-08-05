function isOdd(n) {
    if(n%2==0){
        return false;
    }else{
        return true;
    }
  }
  
  let result = isOdd(3);
  console.log(result);

  function oddsSmallerThan(n) {
    let oddSum = 0;
    for(i=0;i<=n;i++){
        if(i%2==1){
            oddSum += i;
        }
        return oddSum;
    }
    
  }

  let result2 = oddSum(7);
  console.log(result2);

  function squareOrDouble(n) {
    
    if(n%2==0){
        return n*2;
    }else{
        return n*n;
    }
  }
  let result3 = squareOrDouble(5);
  console.log(result3);