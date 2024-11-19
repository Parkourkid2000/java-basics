/**
 * Converting Temperatures
 */

// let celcius = 10
// let fahrenheit = celcius * 1.8 + 32

// console.log (fahrenheit)

// /**
//  * Equality and Not equal
//  */

// let bool = "1" !== 1

// console.log (bool)

/**
 * Conditionals
 */

// let subscribed = false
// let loggedIn = true

// if (subscribed === true) {
//     console.log('show the video')
// }

// else if (loggedIn === true) {
//     console.log ('upgrade to pro')
// }

// else {
//     console.log('please log in')
// }

// let cash = 30
// let price = 40
// let remainder = cash - price

// if (cash > price) {
//     console.log (`you paid ${remainder} extra here is your change`)
// }

// else if (cash >= price) {
//     console.log ("thank you for your purchase")
// }

// else {
//     console.log (`haha broke, you still owe ${remainder *-1} dollars`)
// }

/**
 * Logical Operators
 */

// let cash = 50
// let price = 40
// let isStoreOpen = false

// if (3) {
//     console.log(`print the reciept`)
// }

// else if (cash >= price && isStoreOpen) {
//     console.log(`store is closed, come back tomorrow`)
// }

/**
 * Truthy or Falsy
 */

// let val = ""

// if (val) {
//     console.log(!!val)
// }

// else {
//     console.log(!!val)
// }

/**
 * Ternary Operators
 */

// let hot = true

// hot ? console.log('weather is hot outside') : console.log("its freezing out here")

// let subbed = false
// let logged = true

// let str = subbed && logged ? 'we can view the video' : "time to subscribe or log in"

// console.log(str)

// let cash = 50
// let price = 40
// let isStoreOpen = true

// let str = cash >= price && isStoreOpen ? 'give reciept' : 'do not give reciept'
// console.log(str)

// let count = 1

// while (count <= 100) {
//     console.log(count)
//     count = count + 1;
// }

//for (let i = 0; i < 100; i++) {
//    console.log (i)
//}

// for (let i = 1; i <= 20; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log(`${i} -> Frontend Simplfied`)
//     }

//     else if (i % 3 === 0) {
//         console.log(` ${i} -> Frontend`)
//     }

//     else if (i % 5 === 0) {
//         console.log(`${i} -> Simplified`)
//     }

//     else {
//         console.log(i)
//     }

// }

// for (let n = 1; n <= 100; ++n) {
//     if (n % 69 === 0) {
//         console.log(`TonyTesla`)
//     }

//     else if (n % 20 === 0) {
//         console.log(`Tony`)
//     }
//     else if (n % 10 === 0) {
//         console.log(`Tesla`)
//     }

//     else {
//         console.log(n)
//     }

// }

// const str = " TonyTesla is awesome"

// for (i = 0; i < str.length; ++i) {
//     console.log(str[i])

// }

// //Function defenition
// function welcomePersonToFES(firstName, lastName) {
//   console.log(`Welcome to the Collie Cafe, ${firstName} ${lastName} `)

// }

// //Call the function
// welcomePersonToFES('mavid', `danny`);
// welcomePersonToFES('matt', `lee`);
// welcomePersonToFES('simon', `mallow`);

// function fn() {
//     return 7
//     console.log(`my function`)
// }

// fn();

// function sumOfTwoNumbers(num1, num2) {
//     return num1 + num2
// }

// console.log(sumOfTwoNumbers(40, 3))

// function convertCelsuisToFahrenheit(celcuis) {
//     // let fahrenheit and return fahrenheit yields the same as just returning celcuis in this example
//     let fahrenheit = celcuis * 1.8 + 32
//     return fahrenheit
// }

// console.log (convertCelsuisToFahrenheit(10));

//SAME AS ABVE FUNCTION, BUT SHORTER CODE
// function convertCelsuisToFahrenheit(celcius) {
//      return celcius * 1.8 + 32
//
// }

// console.log (convertCelsuisToFahrenheit(0))

//SECOND WAY TO INITIALIZE A FUNCTION
// const convertCelsuisToFahrenheit = () => {
// return "FES"
// }

// console.log (convertCelsuisToFahrenheit(10));

// let arr = [20, 30, 40, 50, 100]

// //first element of array:
// console.log(arr[0]);

// //last element of array:
// console.log (arr[arr.length -1]);

// // add element onto end of array:
// arr.push(200)

// LONG METHOD OF ARRAY FILTER
// let arr = [20, 30, 40, 50, 100]

// let newArr = arr.filter((element) => {
//     console.log(element)
//     if (element < 50) {
//     return true;}
// })

// console.log (newArr);

//SHORT METHOD OF ARRAY FILTER
// let arr = [20, 30, 40, 50, 100]

//  let newArr = arr.filter(element => element < 50 )

//   console.log (newArr);

// let grades = ['A+', 'A', 'FAIL']

// let goodGrades = grades.filter((element) => {
//     console.log(element)
//         if (element !== 'FAIL'){
//         return true;}

// })

// console.log(goodGrades)

// let grades = ['A+', 'A', 'FAIL']

// let goodGrades = grades.filter(element => element !== 'FAIL')

// console.log(goodGrades)

// let grades = ['A+', 'A', 'FAIL']

// let goodGrades = []

// for (let i = 0; i < grades.length; ++i) {
// if  (grades[i] !== 'FAIL') {
//     goodGrades.push(grades[i]);
// }
// }

// console.log (goodGrades);

/* ARRAY MAP LONG VERSION*/
// let arr = [1, 4, 9, 16]

// let newArray = arr.map((element) => {
//     console.log(element)
//     return element + 1;
// })

// console.log(newArray)

/* ARRAY MAP SHORT VERSION */

// let arr = [1, 4, 9, 16]

// let newArray = arr.map(element => element + 1)

// console.log(newArray)

// let dollars = [1, 5, 10, 3]

// let cents = dollars.map ((element) => {
// console.log(element)
// return element * 100
// })

// console.log(cents)

// let dollars = [1, 5, 10, 3]

// let cents = dollars.map (element => element * 100)

// console.log(cents)

// let dollars = [1, 5, 10, 3]

// let cents = []

// for (let i = 0; i < dollars.length; ++i){
//     // console.log(dollars[i])
//     cents.push(dollars[i] * 100)
// }

// console.log(cents)

// let users = [{
//     username: 'David',
//     email: 'davidemail@gmail.com',
//     password: 'test123',
//     subscription: 'VIP',
//     discordId: 'Parkourkid2000',
//     lessonsCompleted: [0, 1],
// },
// {
//     username: 'Mitri',
//     email: 'Mitriemail@gmail.com',
//     password: 'mitri123',
//     subscription: 'VIP',
//     discordId: 'Parkourkid2000',
//     lessonsCompleted: [0, 1, 2, 3],
// },
// ];

// function login(email, password) {
//     for (let i =0; i < users.length; ++i){
//         if (users[i].email === email) {
//             if (users[i].password === password) {
//                 console.log('log the user in - the details are correct')
//         }
//         else { console.log ('password is incorrect - try again!')
//         }
//         return;
//     }
// }
//     console.log ('could not find an email that matches')
// }

// login('davidemail@gmail.com', 'test123')

// console.log(users[0].lessonsCompleted.map(element => element *3))

// console.log (user.discordId[0]);

// console.log(user.lessonsCompleted.map (element => element *2) )

// let users = [
//   {
//     username: "David",
//     email: "davidemail@gmail.com",
//     password: "test123",
//     subscription: "VIP",
//     discordId: "Parkourkid2000",
//     lessonsCompleted: [0, 1],
//   },
//   {
//     username: "Mitri",
//     email: "Mitriemail@gmail.com",
//     password: "mitri123",
//     subscription: "VIP",
//     discordId: "Parkourkid2000",
//     lessonsCompleted: [0, 1, 2, 3],
//   },
// ];

// function register(
//   name,
//   email,
//   password,
//   subscription,
//   discordId,
//   lessonsCompleted
// ) {
//   let user = {
//     username: name,
//     email: email,
//     password: password,
//     subscription: subscription,
//     discordId: discordId,
//     lessonsCompleted: lessonsCompleted,
//   };
//   users.push(user);
// }

// register({
//   username: "meg",
//   email: "meg@email.com",
//   password: "meg123",
//   subscription: "VIP",
//   discordId: "megladon",
//   lessonsCompleted: [0, 1],
// });

// console.log(users);

// let users = [
//        {
//          username: "David",
//          email: "davidemail@gmail.com",
//          password: "test123",
//          subscription: "VIP",
//          discordId: "Parkourkid2000",
//          lessonsCompleted: [0, 1],
//        },
//        {
//          username: "Mitri",
//          email: "Mitriemail@gmail.com",
//         password: "mitri123",
//         subscription: "VIP",
//         discordId: "Parkourkid2000",
//         lessonsCompleted: [0, 1, 2, 3],
//       },
//      ];

//      function register(user) {
//        users.push(user);
//      }
//      register({
//        username: "meg",
//        email: "meg@email.com",
//        password: "meg123",
//        subscription: "VIP",
//        discordId: "megladon",
//        lessonsCompleted: [0, 1],
//      });

//      console.log(users);

// //First way of accessing an element
// console.log(document.querySelector('#title'));

// //Second way of accessing an element
// console.log (document.getElementById('title'));

// //Change HTML
// document.querySelector('#title').innerHTML += ' Frontend Simplified'

// //change CSS
// document.querySelector('#title').style.fontSize = '40px'

// function changeTitleToRed () {
//     document.querySelector('#title').style.color = 'red'

//     console.log('clicked');
// }

// function toggleDarkMode() {
// document.querySelector('body').classList.toggle("dark-theme")
// }

// PROMISES

// (fetch ("https://jsonplaceholder.typicode.com/users/1"))
// const emailRef = document.querySelector('.email');
// console.log(emailRef);

// // Then
// (fetch ("https://jsonplaceholder.typicode.com/users/1")).then(response => {
//     response.json().then(data => {
//         console.log(data)
//         emailRef.innerHTML = data.email;
//     })
// })

// const emailRef = document.querySelector(".email");
// // console.log(emailRef);
// // // Then
// // fetch("https://jsonplaceholder.typicode.com/users/1")
// //   .then((response) => {
// //     return response.json();
// //   })
// //   .then((data) => {
// //     console.log(data);
// //     emailRef.innerHTML = data.email
// //   });

// //Async/Await
// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     console.log(data)
//     emailRef.innerHTML = data.email
// }

// main()

// const statusRef = document.querySelector('.status')
// const videoRef = document.querySelector('.video')
// function getSubscriptionStatus() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(undefined)
//         }, 2000)
//     })
// }

// //Then
// // getSubscriptionStatus().then(response => console.log(response))

// //Async/Await
// async function main() {
//  const status = await getSubscriptionStatus();
// statusRef.innerHTML = status;
// }

// main();

// function getVideo(subscriptionStatus) {
//     return new Promise((resolve, reject) => {
//         if (subscriptionStatus === 'VIP') {
//             resolve('show video')
//         }
//         else if  (subscriptionStatus === 'FREE') {
//             resolve('show trailer')
//         }
//         else {
//             reject('no video')
//         }
//     })
// }

// async function main() {
//     const status = await getSubscriptionStatus();
//     statusRef.innerHTML = status;
//     try {
//      console.log(await getVideo(status))
//     }
//     catch (e) {
//         console.log(e)
//         videoRef.innerHTML = e;
//     }
// }

// main();

// function addition(num1, num2) {
//   return num1 + num2;
// }

// console.log(addition(-3, -5));

// function hoursIntoSeconds(hour) {
//   return hour * 60 * 60;
// }

// console.log(hoursIntoSeconds(4));

// function calcPerimeter(length, width) {
//   return length * 2 + width * 2;
// }

// console.log(calcPerimeter(10, 20));

// function calcTriangleArea(base, height) {
//   return base * height * 0.5;
// }

// console.log(calcTriangleArea(20, 20));

// function extendString(string) {
//   return string + "Frontend";
// }

// console.log(extendString("pretty"));

// function sumGreaterThan100(num1, num2) {
//   //works the same as using an if/else statement because return already returns a boolean aka true or false
//   return num1 + num2 > 100;
// }

// console.log(sumGreaterThan100(20, 100));

// function lessThanOrEqualToZero(number) {
//     return number <= 0;
// }

// console.log( lessThanOrEqualToZero (3))

// function oppositeBoolean(boolean) {
//     return !boolean
// }

// console.log(oppositeBoolean (false));

// function isNotZero (element) {
//     return   element !== 0
// }

// console.log (isNotZero (0));

// function calcRemainder(num1, num2) {
//     return num1 % num2;
// }

// console.log(calcRemainder (10, 8));

// function isOdd(num1) {
//     return num1 % 2 !== 0;
// }

// console.log(isOdd (3));

// function booleanInterger(num1) {
//     return num1 % 2 === 0 ? 1: -1
// }

// console.log(booleanInterger(4));

// function isLoggedInAndSubscribed(string1, string2) {
//    return string1 === 'LOGGED_IN' && string2 === "SUBSCRIBED"

// }

// console.log(isLoggedInAndSubscribed ('LOGGED_IN', 'SUBSCRIBED'))

// function isLoggedInORSubscribed(string1, string2) {
//     return string1 === 'LOGGED_IN' || string2 === "SUBSCRIBED"

//  }

//  console.log(isLoggedInORSubscribed ('LOGGED_IN', 'SUBSCRIBED'));

//  function filterOutFalsy (value1, value2) {
//     return !value1 ? value1 : value2
//  }

//  console.log (filterOutFalsy ( 0, 'dog'));

//  function arrLength (arr) {
//      return arr[arr.length -1];
//     }

//     console.log (arrLength ([6, 2, 3, 4, 5, 656]));

//     function arrSum (arr) {
//         let sum = 0;
//         for (let i = 0; i < arr.length; ++i) {
//             //how to loop through every element in an array
//             //console.log (arr[i]);
//             sum = sum + arr[i];
//         }
//         return sum;
//     }

// console.log (arrSum ([2, 3, 1, 4, 5, 3, 7, 9, 66]));

// function progressiveSum (num) {
//     let sum = 0;
//     for (let i = 1; i <= num; ++i) {
//         sum = sum + i;
//     }
//     return sum
// }

// console.log(progressiveSum(600));

// function calcTime (seconds) {
//     let timerMinutes = Math.floor(seconds / 60);
//     let timerSeconds = seconds % 60;

//     if (timerMinutes.toString().length === 1) {
//         timerMinutes = '0' + timerMinutes;
//     }

//     if (timerSeconds.toString().length === 1) {
//         timerSeconds = '0' + timerSeconds;
//     }
//     return timerMinutes + ':' + timerSeconds;
// }

// console.log (calcTime(900));

// function getMax (arr) {
//     let max = arr[0];
// for (let i = 1; i < arr.length; ++i) {
//    if (arr[i] > max) {
//     max = arr[i];
//    }
// }
// return max;

// }

// console.log (getMax([7, 5, 8, 12, 21, 4]));

// function reverseString (string) {
//     let reversedString = '';
//     for (let i = string.length -1; i >= 0; --i) {
//         reversedString += string[i];
//     }
//     return reversedString;
// }

// console.log (reverseString('Tesla'));

// function reverseString (string) {
//     return string.split('').reverse().join('');
// }

// console.log (reverseString('Tesla'));

// function reverseString (string) {
//     let reversedString = '';
//     for (let i = 0; i < string.length; ++i) {
//         reversedString = string[i] + reversedString;
//     }
//     return reversedString;
// }

// console.log (reverseString('Tesla'));

/* ARRAY MAP LONG VERSION*/
// let arr = [1, 4, 9, 16]

// let newArray = arr.map((element) => {
//     console.log(element)
//     return element + 1;
// })

// console.log(newArray)

/* ARRAY MAP SHORT VERSION */

// let arr = [1, 4, 9, 16]

// let newArray = arr.map(element => element + 1)

// console.log(newArray)

// let arr = [2, 3, 4, 5, 2, 2, 4, 5];

// let newArray = arr.map(element => element * 0);

// console.log(newArray);

// function convertToZeros(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; ++i) {
//         newArr[i] = 0
//     }
//     return newArr
// }

// console.log(convertToZeros([2, 3, 4, 1, 5, 7]));

// function convertToZeros(arr) {
//     return new Array(arr.length).fill(0);
// }

// console.log(convertToZeros([1, 2, 3, 4, 5, 4, 67]));

// function convertToZeros (arr) {
//     return arr.map(elem => 0)
// }

// console.log(convertToZeros([2, 4, 3, 1]));

// function removeApples (arr) {
//     let noApples = []
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] !== 'Apple') {
//            noApples.push(arr[i])
//         }
//     }
//     return noApples

// }
// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']));

// function removeApples(arr) {
//     return arr.filter((element) => { return element !== 'Apple'})
//     // SAME AS: return arr.filter(element => element !== 'Apple')
// }

// console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']));

// function filterOutFalsy(arr) {
//     return arr.filter(element => !!element === true)
// }

// console.log(filterOutFalsy(['', 0, 'Orange', 'Apple']));

// function filterOutFalsy(arr) {
//     let nofalsy = [];
//     for (let i = 0; i < arr.length; ++i) {
//         if (!!arr[i] === true) {
//           nofalsy.push(arr[i])
//         }
//     }
//     return nofalsy
// }

// console.log(filterOutFalsy(['', 0, 'Orange', 'Apple']));

// function convertToBoolean(arr) {
//     let trueOrFalse = []
// for (let i = 0; i < arr.length; ++i) {
//     if (!!arr[i] === true) {
//         trueOrFalse.push(!!arr[i])
//     }
//     if (!!arr[i] === false) {
//         trueOrFalse.push(!!arr[i])
//     }

// }
// return trueOrFalse
// }

// console.log(convertToBoolean([500, 0, 'David', '', true]));

// function convertToBoolean(arr) {
// return arr.map(elem => !!elem)
// }

// console.log(convertToBoolean([500, 0, 'David', '', true]));

// function convertToBoolean(arr) {
//     let trueOrFalse = []
// for (let i = 0; i < arr.length; ++i) {
//     return !!arr[i] === true ? trueOrFalse.push(!!arr[i]):trueOrFalse.push(!!arr[i])

// }
// return trueOrFalse
// }

// console.log(convertToBoolean([500, 0, 'David', '', true]));

//SOLUTION

// function showRating(rating) {
//     let ratings = "";
// for (let i =0; i < Math.floor(rating); ++i) {
//     ratings += "*"
//     if (i !== Math.floor(rating) -1) {
//         ratings += " "
//     }
// }
// if (!Number.isInteger(rating)) {
//     ratings += " .";
// }
// return ratings;
// }

// console.log(showRating(4.5));

//PROBLEM

// function showRating(rating) {
//   //initialize an empty string
//   //Loop through the rounded down rating
//   //add a star for every iteration
//   //if its not the last iteration add a space
//   //if the number is not an interger
//   //add a full stop
//   //return it
// }

// console.log(showRating(3.5));

// function sortLowToHigh(numbers) {
//     return numbers.sort((a, b) => a - b);

// }

// console.log(sortLowToHigh([1, 5, 0, 10, 4]));

// function sortHighToLow(numbers){
// return numbers.sort((a, b) => b.price - a.price);
// }

// console.log(
//     sortHighToLow([
//     {id: 1, price: 50 },
//     {id: 2, price: 0},
//     {id: 3, price: 500},
// ]));

// async function postsByUser(userId) {
//   const promise = await fetch("https://jsonplaceholder.typicode.com/posts");

//     const result = await promise.json();

//     const posts = result.filter(element => (element.userId === userId))

//     console.log(posts)
//   }

// postsByUser(4);

//THEN
// fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
//     console.log(response.json())
// })
// response.json().then(data => {
//     console.log(data)
// })

//ASYNC AWAIT

// async.function.main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts)
//         const data = await response.json()
//         console.log(data)}
//         main();

// async function firstSixIncomplete(completedStatus) {
//     for (let i = 0; i < 6; ++i) {

//     }
//     const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

//       const result = await promise.json();

//       const incompletedTasks = result.filter(element => !element.completed).slice(0, 6)

//       console.log(incompletedTasks)
//     }

//   firstSixIncomplete(false);

// let num = 50;

// function FizzBuzz() {
//   for (let i = 1; i <= num; ++i) {
//     if (i % 5 == 0 && i % 3 == 0) {
//       console.log('FizzBuzz')
//     }
//     else if (i % 5 == 0) {
//       console.log('Buzz')
//     }
//     else if (i % 3 == 0) {
//       console.log('Fizz')
//     }
//     else console.log(i)
    
//   }
// }

// FizzBuzz()


// function isPalindrome(string) {
//   string = string.toLowerCase();
//   string = string.replace(/[^a-z0-9]/g, '');
//   const reversed = string.split('').reverse().join('');

//   console.log(string === reversed)
// }

// isPalindrome('racecar');

