const { rawListeners } = require('process');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback){
  let vari;
  reader.question(`Is ${el1} > ${el2}, 'yes' or 'no'?`, function(res){
    if (res === 'yes'){
      callback(true);
    } else if (res === 'no'){
      callback(false);
    } else {
      throw new Error("Enter 'yes' or 'no' only! Restart from the beginning");
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  
  if (i === arr.length - 1){ 
    outerBubbleSortLoop(madeAnySwaps);
    return arr;
  }

  if (i < arr.length - 1){
    askIfGreaterThan(arr[i], arr[i + 1], function(){
      if (true){
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      }
    });
  }
  innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
}

function absurdBubbleSort(arr, sortCompletionCallback){
  function outerBubbleSortLoop(madeAnySwaps){
    if (madeAnySwaps === true){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else{
      sortCompletionCallback(arr);
      return arr;
    }
  }
  outerBubbleSortLoop(true);
}


// askIfGreaterThan(1,2);
// let arr = [1, 123, 902, 39, 0, 2];
// console.log(arr);
// innerBubbleSortLoop(arr, 0, false);


absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
  console.log(arr);
});