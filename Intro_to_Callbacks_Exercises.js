const { rawListeners } = require('process');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  let first;
  
  if (numsLeft === 0) {
    reader.close();
    return completionCallback(sum)
  }

  if (numsLeft > 0) {
    reader.question('Please enter a number:', (res) => {
      first = res;
      sum += parseInt(first);
      console.log(`Current Sum is ${sum}.`);
      numsLeft--
      addNumbers(sum, numsLeft, completionCallback)
    });
  }

}

addNumbers(0, 5, sum => console.log(`Total Sum: ${sum}`));





// function Clock () {
//   const date = new Date();
//   this.hour = date.getHours();
//   this.min = date.getMinutes();
//   this.sec = date.getSeconds();
//   this._tick = this._tick.bind(this);
//   this.printTime = this.printTime.bind(this);
//   this.incSec = this.incSec.bind(this);

  
//   this._tick(this.printTime);

// }
  
// Clock.prototype.printTime = function() {
//   console.log(`${this.hour} : ${this.min} : ${this.sec}`);
// };

// Clock.prototype.incSec = function(){
//   this.sec ++;
//   if (this.sec >= 60){
//     this.sec = this.sec % 60;
//     this.min ++;
//   }
//   if (this.min >= 60) {
//     this.min = this.min % 60;
//     this.hour++;
//   }
//   if (this.hour >= 24){
//     this.hour = this.hour % 24;
//   }
// };

// Clock.prototype._tick = function(callback) {
//   setInterval(this.incSec,1000);
//   setInterval(callback,1000);

// };    


// // let clock = new Clock();