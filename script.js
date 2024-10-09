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

function toggleDarkMode() {
document.querySelector('body').classList.toggle("dark-theme")
}
