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
    let oddSum =0;
    for(i=n;i>=0;i=i-1){
        if(i%2==1){
            
            oddSum = oddSum +1;

        }
    
    }
    return oddSum-1;
  }

  let result2 = oddsSmallerThan(15);
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