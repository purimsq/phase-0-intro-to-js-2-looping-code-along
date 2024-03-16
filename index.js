// Code your solutions in this file

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGift(arr) {
//   for(let i = 0; i < arr.length; i++){
//     console.log(`Wrapped ${arr[i]} and added a bow!`);
//   };
// }

// wrapGift(gifts)

// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
//   debugger;
// }

function writeCards(arr, eventName){
  const gratitudeArr = [];

  for(let i = 0; i < arr.length; i++){
    gratitudeArr.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`);
  };

  return gratitudeArr;
};

writeCards(["Charlie", "Samip", "Ali"], "surprise");

function countDown(n){
  let start = n;
  while (start >= 0) {
    console.log(start--);
  }
};

countDown(7);