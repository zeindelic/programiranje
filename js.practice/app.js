// sum = 0
// x = +prompt('unesite do cega brojim')
//     for(i = 0; i < x; i++) {
//         if(i % 2 === 0){
//             sum = sum + i;
//            if(sum > x){
//             break;
//            }
//     }
//     console.log(sum)
//     }

// let city = 'Novi Pazar';
//          //   0123456789

// city[0] = 'M';

// for(let i = 0; i < city.length; i++) {
//     console.log(city[i]);
//

// function

// function kvadratOdPet() {
// return 5*5;

// }

// const rezultat = kvadratOdPet();

// console.log(rezultat);

// function kvadratBroj(n, x) {
//     const result = n*n;
//     return result;

// }

// const rezultat = kvadratBroj(125);

// console.log(rezultat);
// const name = 'zein';
// const city = 'Novi Pazar';
// const age = '18';
// const country = 'srbija';

// console.log(`moje ime je ${name}, zivim u ${city}, `);

// arrays - nizovi

// const fruits = ['apple','mango','banana','kiwi'];

// const lastRemoved = fruits.pop();

// console.log(fruits);
// console.log(lastRemoved);

// fruits.unshift('peach');
// fruits.unshift('pear');
// fruits.unshift('ananas');
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// function getarraymedian(arr) {

//     if(arr.length % 2 === 1){
//        const median = Math.floor(arr.length / 2);
//        console.log(arr[median]);
//     }
//     else if(arr.length % 2 === 0){
//         console.log('unesite neparan broj elemenata u nizu');

//     }

// }
// rezultat = getarraymedian(fruits);

// fruits.reverse();

// const colors = ['red', 'blue', 'green', 'yellow'];

// const spojenNiz = fruits.concat(colors);

// console.log('zbir', spojenNiz);

// console.log('colors',colors);

// console.log('fruits',fruits);

// const fruits = ['apple','mango','banana','kiwi','strawberry'];

// for(let i = 0;i < fruits.length; i++){
//     fruits[i] = fruits[i] + 'a';
// }
// const newArrayt
// fruits.forEach(function (item, index) {

// });
// const people = ['pera', 'mika', 'zika','tito','janko','branko','john','micheal']
// const novo = []
// people.forEach(function(person, index){

// if(index % 2 == 0){
// novo.push(person);
// console.log(novo);
// }
// }
// )

// const num = [2,3,4,5,6,7,8,9,543,75,436,4636,544];

// const names = ['faris', 'demir', 'esma', 'aisa', 'zein', 'demir', 'osman', 'aisa', 'aisa', 'aisa', 'aisa']

// const evennum = num.filter(function(el, index) {

// if (el % 2 === 0) {
//     return el;
// }

// })
// console.log(evennum);

// const shortNames = names.filter(function (name, i) {
//     if(name.length < 5){
//         return name;
//     }

// })
// console.log(names);
// console.log(shortNames);

// const capitalA = names.filter(function(name){
//     if(name.charAt(0).toLowerCase() === 'a'){
//         return name;
//     }
// })

// const firstCapital = capitalA.map(function(name) {
//     if (name.charAt(0).toUpperCase() === 'A') return name;
// });

// console.log(firstCapital);
//     console.log(capitalA);

// const lastLetterT = names.filter(function (name) {
//     if(name.charAt(name.length - 1).toLowerCase() === 'r') return name;
// })

// console.log(lastLetterT);

// const animals = ['ant', 'monkey', 'elephant', 'camel', 'duck']

// console.log(animals.slice(1, 4));
// names = ['zein zein','zein zein','zein zein','zein zein','zein zein','zein zein','zein zein',]

// const initials = names.map(function (name, i) {
//     const splitted =name.split(' ');
//     const nameInitial = splitted[0].charAt(0);
//     const lastNameInitial = splitted[1].charAt(0);

//     return nameInitial + lastNameInitial

// })
// const srednja = niz.reduce(
// function (previous,present) {
// x = (previous + present)
//     return x;

// },0) / niz.length

// console.log(srednja);
// console.log(initials);

// const niz = [100,100,200,300,500,1000]

// const mappedandfiltered = niz.reduce(function (prev, curr) {
// const squared = curr * curr;

// // if (squared % 2 === 0) {
// //     prev.push(squared);
// // }
// return prev;
//   }, []);

// console.log(mappedandfiltered);

// arrow

// const sum = (a,b) => {
//     return a+b;
// }

// // ili

// const sumaP = (a,b) => {
//     a+b;}

// // ili

// const suma = (a,b) => a+b;

// const velikoIme = ime => ime.toUpperCase();

// console.log(velikoIme('zein'));

// const numbers = [2, 4, 6, 8, 10]

// // arrow as callback
// const squared = numbers.map((num, i) => num * num + i);

// console.log(squared);

// // standard
// numbers.map(function (num, i) {

//     return num*num + i;

// })

// const reversedText = (text) => text.split('').reverse().join('');

// console.log(reversedText('zein'));

// const numbers = [1,2,3,4,5,6,7,8,9]

// filterednum = numbers.filter(num => num % 2 == 0);
// console.log(filterednum);

// const price = +prompt('unesite cenu artikla');

// const discount = price > 1000 ? 0.2 : 0.1;
// // uslov ? ispunjen : neispunjen

// console.log(discount);

// const words = ['zein','delic','display','memory','dancing','socket']

// const newWords = words.map(el => 'new' + el);

// console.log(newWords)

// const ofAge = ([
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ])

// const filterOfAge = ofAge.filter((el) => {if (el.age > 18) {
//     console.log(el)
// }
// })

// const voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// const whoVoted = voters.reduce((prev,curr) => {
//     if(curr.voted === true){
//         prev.unshift(curr);
//     }
//     return prev;
// }, [])
// console.log(whoVoted);

// const person = {
//      name: 'jovan',
//     age: '20',
//     'lastName': 'jovanovic',
//     wives: ['one', 'two', 'three', 'four'],
//     occupation: 'kupio nis od gazproma',
// }

// person.height = 190;

// const person2 = person;
// person2.name = 'abdulah';

// console.log(person2);

// const produzeniAbdi = {
//     ...person,
//     weight: 90,
//     balance: 'infinte',
// };

// console.log(person);
// console.log(produzeniAbdi);

// const niz = [1,2,3,4,5,6,7,8]

// const noviNiz = [...niz, 'bruh', 'jieoijf']

// console.log(niz);
// console.log(noviNiz);

// const students = [
//     {
//       name: "zein",
//       prezime: "godic",
//       predmeti: ["srpski", "nemacki", "matematika", "japanski", "motorika"],
//       ocene: [3, 5, 4, 1, 2],
//       predmetStudija: 'geo',
//     },
//     {
//       name: "davud",
//       prezime: "volic",
//       predmeti: ["srpski", "nemacki", "matematika", "japanski", "motorika"],
//       ocene: [3, 5, 4, 3, 4],
//       predmetStudija: 'jap',
//     },
//     {
//       name: "musama",
//       prezime: "zemzem",
//       predmeti: ["srpski", "nemacki", "matematika", "japanski", "motorika"],
//       ocene: [3, 5, 4, 1, 1],
//       predmetStudija: 'nem',
//     },
//     {
//       name: "miyamoto",
//       prezime: "dodan",
//       predmeti: ["srpski", "nemacki", "matematika", "japanski", "motorika"],
//       ocene: [5, 5, 4, 5, 3],
//       predmetStudija: 'informatika',
//     },
//     {
//       name: "baki",
//       prezime: "pejic",
//       predmeti: ["srpski", "nemacki", "matematika", "japanski", "motorika"],
//       ocene: [5, 5, 4, 5, 5],
//       predmetStudija: 'mehanika',
//     },
//     {
//       name: "semso",
//       prezime: "mostic",
//       predmeti: ["srpski", "nemacki", "matematika", "japanski", "motorika"],
//       ocene: [5, 5, 4, 2, 2],
//       predmetStudija: 'casologija',
//     },
//     {
//       name: "nole",
//       prezime: "volan",
//       predmeti: ["srpski", "nemacki", "matematika", "japanski", "motorika"],
//       ocene: [2, 5, 1, 1, 1],
//       predmetStudija: 'sociologija',
//     },
//     {
//       name: "marko",
//       prezime: "skenderovic",
//       predmeti: ["srpski", "nemacki", "matematika", "japanski", "motorika"],
//       ocene: [3, 1, 4, 1, 2],
//       predmetStudija: 'astronmija',
//     },
//     {
//       name: "elma",
//       prezime: "takovic",
//       predmeti: ["srpski", "nemacki", "matematika", "japanski", "motorika"],
//       ocene: [3, 5, 2, 2, 2],
//       predmetStudija: 'gazivodija',
//     },
//   {
//       name: "hajro",
//       prezime: "medic",
//       predmeti: ["srpski", "nemacki", "matematika", "japanski", "motorika"],
//       ocene: [1, 5, 1, 5, 2],
//       predmetStudija: 'albanologija',
//     },
//   ];
//   const honorStudents = []
//   studentAverages = students.map(el => {

//    return el.averages= el.ocene.reduce((prev,curr) => prev + curr) / el.ocene.length

//   });

//   goodGuys = students.filter(el => {
//       if (el.averages >= 3) {
//           honorStudents.push(el)

//       }
//   })

//   console.log(honorStudents)

// const person = {
//     name: 'john',
//     lastName:'doe',
//     getFullName: function () {
//     return `${this.name} ${this.lastName}` ;
// },
// age: 20,
// address:{
//     city:'manchester',
//     street:'ulica neka',
//     Number: '99',
//     getFullAddress: function () {
//         return `${person.name} zivi u ulici ${this.street} ${this.number} u gradu ${this.city}`

//     },
// },
// }

// // console.log(person.address.getFullAddress());

// // const zein = {
// //     name:'zein',
// //     lastName:'delic',
// //     getNickname: function () {
// //         return `${this.name.split('').splice(0, 2).join('')}${this.lastName.split('').splice(0, 2).join('')}`

// //     },
// // }

// // console.log(zein.getNickname());

// //call

// //apply
// // let obj = {
// //     add: function (a,b,c) {
// //         return a+b+c;

// //     },

// // }

// // function SumItUp(a,b,c) {
// //     console.log(this);
// //     return this.add(a,b,c);

// // }

// // console.log(SumItUp.apply(obj, [5,5,5]));

// // let rectangle = {
// //     getArea: function (a,b) {
// //         return a*b;
// //     },
// // }

// // function calcArea(a,b) {
// //     return this.getArea(a,b);

// // }

// // const bindedFunction = calcArea.bind(rectangle);

// // console.log(bindedFunction(50,20));

// //bind

// // let rectangle = {
// //         getArea: function (a,b) {
// //             return a*b;
// //         },
// //     }

// //     function calcArea(a,b) {
// //         return this.getArea(a,b);

// //     }

//     // const bindedFunction = calcArea.bind(rectangle);

//     // console.log(bindedFunction(50,20));
// const objCall = {
//     food: 'burger',
//     drink: 'cola',
//     side: 'fries',
//     priceFunction: [50,40,60],
// }

// function allTogetherCall() {
//     console.log(`the ${this.food} is ${this.priceFunction[0]} cents the ${this.drink} is ${this.priceFunction[1]} and the ${this.side} are ${this.priceFunction[2]}` );

// }

// allTogether.call(objCall);

// const objApply = {
//     food: 'chicken',
//     drink: 'sprite',
//     side: 'krankenhaus',
//     priceFunction: [6050,220,603],
// }

// function allTogetherApply() {
//     console.log(`the ${this.food} is ${this.priceFunction[0]} cents the ${this.drink} is ${this.priceFunction[1]} and the ${this.side} are ${this.priceFunction[2]}` );

// }

// allTogether.apply(objApply);

// const obj = {
//     food: 'tortilla',
//     drink: 'fanta',
//     side: 'shalots',
//     priceFunction: [100,20,600],
// }

// function allTogether() {
//     console.log(`the ${this.food} is ${this.priceFunction[0]} cents the ${this.drink} is ${this.priceFunction[1]} and the ${this.side} are ${this.priceFunction[2]}` );

// }

// allTogetherBind = allTogether.bind(obj);

// allTogetherBind()

// const person = {
//     firstname: 'bob',
//     lastname: 'smith' ,
//     getName: function() {
//         let fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// const pozdrav = function() {
//     console.log(' djesi '     + this.getName());
// };

// pozdravBind = pozdrav.bind(person);

// pozdravBind()

// const personCall = {
//     firstname: 'semso',
//     lastname: 'fatmirovic' ,
//     getName: function() {
//         let fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// const pozdravCall = function() {
//     console.log(' djesi '     + this.getName());
// };

// const logPersonCall = pozdravCall.call(personCall);

// const personApply = {
//     firstname: 'davud',
//     lastname: 'skenda' ,
//     getName: function() {
//         let fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// const pozdravApply = function() {
//     console.log(' djesi '     + this.getName());
// };

// pozdravApply.apply(personApply);

// surfaceOfCircleCall = {
//     formula: function (a,b) {
//         return a*(b*b);
//     }
// }

// function calcCall(a,b) {
//    return console.log(this.formula(3.14,34));

// }

//  calcCall.call(surfaceOfCircleCall);

//  surfaceOfCircle = {
//     formula: function (a,b) {
//         return a*(b*b);
//     }
// }

// function calc(a,b) {
//    return console.log(this.formula(3.14,12));

// }

// calcBind =  calc.bind(surfaceOfCircle);

// calcBind()

// surfaceOfCircleApply = {
//     formula: function (a,b) {
//         return a*(b*b);
//     }
// }

// function calcApply(a,b) {
//    return console.log(this.formula(3.14,3));

// }

//  calcApply.apply(surfaceOfCircleApply);

// object assign
// const obj = {
//     name: 'john',
//     age: 20,
//     occupation: 'engineer',
// }

// console.log(Object.entries(obj)[0][1]);

// const numbers = [1,2,3,4,5,6,7,8,9,0,3,4,5,6,2,3,4,3,3,3,1,2,3,5,4,3,4,3]

// const withoutDups = [...new Set(numbers)];

// console.log(withoutDups);

// class car {
// constructor(make, model, maxSpeed){
//     this.make = make,
//     this.model = model,
//     this.maxSpeed = maxSpeed;
//     this.engine = 'off'
//     this.currentSpeed = 0
//     this.isMoving = this.currentSpeed > 0 ? true : false;

// }

// accelarate() {
//     this.engine = 'on'
//      if(this.engine === 'off'){
//         console.error('ne mozes da ubrzas kad je ugasen auto');
//     }
//     this.currentSpeed += 20;
//     this.isMoving = true
//     if (this.currentSpeed > this.maxSpeed) {
//         console.error('ne mozes ubrzas brze od maxSpeed')

//     }

// }

// engineStart() {
//   if(this.engine === 'off'){
//     this.engine = 'on'
//   }
//    else{
//     this.engine = 'off'
//    }
// }

// brake() {
//     if(this.currentSpeed === 0){
//       console.error(' ne mozes da smanjis manje od nule');
//     } else {
//     this.currentSpeed -= 20;
//     }
//     if(this.engine === 'off'){
//         console.error('ne mozes da kocis kad je ugasen auto');
//     }
// };
// }

// const audi = new car('audi','a3', 220);
// const bmw = new car('bmw','540', 260);

// audi.brake()

// console.log('audi : ', audi);
// console.log('bmw : ', bmw);

// class person {
// constructor(skinColor,height,weight){
//     this.skinColor = skinColor,
//     this.height = height,
//     this.weight = weight;
// }

// weighing = () => console.log(`im a person and i weigh ${this.weight}`);
// }

// class worker extends person {
//     constructor(skinColor,height,weight,hourlyWage){
//         super(skinColor,height,weight)
//         this.hourlyWage = hourlyWage;

//     }
// talkingAboutPay = () => console.log(`i get paid ${this.hourlyWage} per hour!`);
// }

// class proffersor extends worker {
//     constructor(skinColor,height,weight,hourlyWage,numberOfStudents){
//         super(skinColor,height,weight,hourlyWage)
//         this.numberOfStudents = numberOfStudents;
//     }
//     sayingNumberOfStudents = () => console.log(`i have a total of ${this.numberOfStudents} students`);
// }

// const bob = new proffersor('black',190,100,25,10)

// bob.sayingNumberOfStudents()

// bob.talkingAboutPay()

// bob.weighing()

// class person {
// constructor(name,lastName,age){
// this.name = name,
// this.lastName = lastName,
// this.age = age;
// }

// move = () => console.log('start to move..');

// }

// class employee extends person{
//     constructor(job, position, hourlyRate,name,lastName,age){
//         super(name,lastName,age),
//         this.job = job,
//         this.position = position;
//         this.hourlyRate = hourlyRate;
//     }
// introduction = () => console.log(`my name is ${this.name} ${this.lastName}`);

// hourlyRate = () => this.hourlyRate *  8 *  5  *  4;

// }

// class engineer extends person{
//     #favCollege

//     constructor (favCollege,degree,langs,job, position, hourlyRate,name,lastName,age) {
//         super(job, position, hourlyRate,name,lastName,age)
//         this.#favCollege = favCollege;
//         this.degree = degree;
//         this.langs = langs;
//     }

//  programming = () => console.log('i am programming');

//  learnNewLanguage = (lang) => {
//     console.log('start learning', lang);
//     for (let i = 0; i < 2; i++) {

//     }

//     console.log(`finished learning language`);
//     console.log(this.langs);
//     this.langs.push(lang)
//  }
// getFavCollege = () => this.#favCollege;

// setFavCollege = (college) => (this.#favCollege =  college)
// }

// const e1 = new engineer('koleginica','deeestbreljudi',['java','script'],'atleticar', 'druga', 20, 'boban', 'skender', 56)
// e1.learnNewLanguage('pythonscript')

// const introDiv = document.querySelector('#pocetak');
// const id = document.getElementById('pocetak');

// const klasa = document.querySelectorAll('.neka-klasa')

// console.log(id);

// introDiv.style.background = 'red';

// introDiv.style.height = '20vh';

// introDiv.textContent = 'ovo je promena iz .js fajla';

// introDiv.innerHTML = `<p>ja sam text</p>`;

// console.log(klasa);

// const button = document.querySelector('.clickable')
// const main = document.querySelector('.main')
// const body = document.querySelector('body')
// const text = document.querySelector('.text')
// const input = document.querySelector('.input')
// const ispis = document.querySelector('.ispis');

// button.addEventListener('click', arrayFunction)

// function arrayFunction(el) {

//   main.style.background = 'red';

// }

// main.addEventListener('mouseover', () => {
//     main.style.background = 'red';
// })

// main.addEventListener('mouseout', () => {
//     main.style.background = 'transparent';
// })

// body.addEventListener('keydown', (e) => {
//     console.log(e);
//     text.textContent += `kod ${e.code}`;
//     // if(e.code === 'KeyR') location.reload()
// })

// const usersContainer = document.querySelector(".users");
// const submitBtn = document.querySelector("#submit");

// let users = [];

// const userFactory = (name, lastName, occupation) => {
//   return { name, lastName, occupation,
//   id: Math.random()
//   .toString(36)
//   .substring(2, 10 + 2)
//   };
// };

// const deleteUser = (userId) => {
//   const newUsers = users.filter((user) => user.id !== userId);
//   users = [...newUsers];
//   renderUsers()
//   console.log(users);
// }

// submitBtn.onclick = () => {
//   let userName = document.querySelector("#name").value;
//   let userLastName = document.querySelector("#lastName").value;
//   let occupation = document.querySelector("#occupation").value;
//   console.log(userFactory(userName, userLastName, occupation));
//   const user = userFactory(userName, userLastName, occupation);
//   let noValUserName = document.querySelector("#name");
//   let noValOccupation = document.querySelector("#occupation");
//   let noValUserLastName = document.querySelector("#lastName");
//   noValOccupation.value = "";
//   noValUserLastName.value = "";
//   noValUserName.value = "";

//   if (users.length === 0) {
//     users.push(user);
//   }

//   renderUsers();
// };
// const renderUsers = () => {
//   users.forEach((user) => {
//     let userContainer = document.createElement("div");
//     userContainer.id = "userContainer";

//     let biggerContainer = document.createElement("div");
//     biggerContainer.id = "biggerContainer";

//     let smallerContainer = document.createElement("div");
//     smallerContainer.id = "smallerContainer";

//     let userNameSpan = document.createElement("span");
//     userNameSpan.id = "spanName";
//     let lastNameSpan = document.createElement("span");
//     lastNameSpan.id = "spanName";
//     let occupationSpan = document.createElement("span");
//     occupationSpan.id = "spanOccupation";
//     let vaseZanimanje = document.createTextNode("vase zanimanje je:");
//     vaseZanimanje.id = "zanimanje";
//     let deletor = document.createElement("div");
//     deletor.id = 'deletor';

//     deletor.addEventListener('click', () => deleteUser(user.id))

//     userNameSpan.textContent = user.name;
//     lastNameSpan.textContent = user.lastName;
//     occupationSpan.textContent = user.occupation;

//     userContainer.appendChild(deletor);
//     userContainer.appendChild(smallerContainer);
//     userContainer.appendChild(biggerContainer);
//     smallerContainer.appendChild(userNameSpan);
//     smallerContainer.appendChild(lastNameSpan);
//     biggerContainer.appendChild(vaseZanimanje);
//     biggerContainer.appendChild(occupationSpan);
//     console.log(userNameSpan);

//     if (user.occupation != "") {
//       usersContainer.appendChild(userContainer);
//     }
//   });
// };
////////////////1 zadatak////////////////
//  const data2 = ['a','b','c','d','e']
//  const data1 = [2,26,38,75,11,29]

// newFull = data2.concat(data1)
// console.log(newFull);

// const evenFiltered = newFull.filter(el => {
//   if (el % 2 === 0) {
//     return el;

//   }
// });

// evenFiltered.unshift(10, 20)

// console.log(evenFiltered);

//////////////2 zadatak//////////////

// const data1 = [2,26,38,75,11,29]

// squared = data1.map(el => {
// x = el*el;

//   return x;
// })

// console.log(squared);

/////////////3 zadatak//////////////
// const data1 = [2,26,38,75,11,29]

// squareRooted = data1.map(el => {
//   x = Math.sqrt(el)
// return x

//   })

//   console.log(squareRooted);
/////////////////4 zadatak/////////////////
// const data1 = [2,5,10,3,4,8]

// atIndex = data1.map((el, i, ) =>{
// if (i === 0 || i === 3 || i === 5) {
// return el*el;

// }

// return el;

// })
// console.log(atIndex);

//////////////////// 5 zadatak/////////////////////////
// const data1 = [2,26,38,75,11,29]

// uslovi = data1.map((el) => {
//     if(el > 2 && el < 8){
//     return (el*4)/2;

//   }
//   if (el > 2) {
//     return el * 7;

//   }

//   return el;
// })

// filteredUslovi = uslovi.filter(el => {
//   if(el<10){return el;}
// });
// console.log(filteredUslovi);
////////////////////6 zadatak////////////////
// const data1 = [2,26,38,75,11,29]

// const evenFiltered = data1.filter(el => el % 2 === 0)

// console.log(evenFiltered);
/////////////////7 zadatak///////////////////////////////
// const words = ['televizor','daljinski',true,false,true,true,false,false,'telefon','voda','ranac','stolica']

// wordse = words.filter(el => el[1] === 'e')

// console.log(wordse);
/////////////////////8 zadatak////////////////////////
// const filteredLength = words.filter(el => {
//   if(el.length <= 6){
//     return el;
//   }
// })

// console.log(filteredLength);

////////////////////////////////9 zadatak//////////////////////
// const wordBoolean = ['televizor','daljinski',true,false,true,true,false,false,'telefon','voda','ranac','stolica']

// console.log(wordBoolean);
// const filteredBoolean = wordBoolean.reduce((prev,curr) => {
//   if(typeof(curr) === "boolean"){
//     return[...prev, curr]
//   }
// return prev;

// }, [])

// console.log(filteredBoolean);
//////////////////////////////////10 zadatak////////////////////

// const data1 = [2,26,38,75,11,29,67]

// const lowerThan50 = data1.filter(el => {
//   if (el % 2 === 0) {
//     if (el <= 50) {
//       return el;

//     }

//   }
// })
// console.log(lowerThan50);
//////////////////11 zadatak///////////////////
// const data1 = [2,26,38,75,11,29]

// const medianBirthday = data1.reduce((prev, curr) => {
//   prev + curr
//   return (prev + curr)
// }, 0)/data1.length

// console.log(medianBirthday);

////////////////////12 zadatak//////////////////////

// const dataMiles = [10,15,34,54,2,5,87]

// const dataKilometers = dataMiles.map(el => {
//   return el*1.6
// })

// const sumDistance = dataKilometers.reduce((prev,curr) => {
//   return prev+curr
// })
// console.log(sumDistance);
/////////////////13 zadatak///////////////////

// const data1 = [2, 4, 8, 16, 32, 26, 38, 75, 11, 29, 67];

// const doubleEven = data1.filter((el) => {
//   if (el % 2 === 0) {
//     return el;
//   }
// });
// const devidedEven = doubleEven.map((el) => {
//   return el / 2;
// });
// const doubleDoubleEven = devidedEven.filter((el) => {
//   if (el % 2 === 0) {
//     return el;
//   }
// });

// const sumDoubleEven = doubleDoubleEven.reduce((prev, curr) => {
//   return prev + curr;
// });

// console.log(sumDoubleEven);
///////////////////14 zadatak////////////////////hbb

// const data1 = [2, 4, 8, 16, 32, 26, 38, 75, 11, 29];

// const sumEven = data1.reduce((prev, curr) => {
// if (curr % 2 === 0) {
// x = prev + curr

// }
// return x;
// });
// console.log(sumEven);

//     resolve('pesma izdata');
//     reject('greska se desila');
// })
// {
//     state:'pending',
//     result:undefined,
// }
// {
//     state:'fullfiled',
//     result: value,
// }

// {
//     state: "rejected"
//     result: error
// }

// let dababy = new promise(function(resolve, reject){
//     setTimeout(() => reject('done!'), 1000)
// })
// dababy.then((res) => alert(res))
// .catch((e) =>{
//     console.error(e);
// }).finally('zavrseno');

// function delay(ms) {

//         return new Promise(resolve => setTimeout(() => resolve('done'), ms))

// }
// delay(3000).then((res) => alert(res));

// async function foo() {}

// users = []
// posts = []
// const getUsers = async () => {
//     try {
//         const userResponse = await fetch("https://jsonplaceholder.typicode.com/users");
//         let userData = await userResponse.json();
//       const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
//       let postsData = await postsResponse.json();
//         users = userData
//         posts = postsData
//     const renderUsers = () => {
//       users.forEach((user) => {
//         let main = document.querySelector("#main");
//         const userContainer = document.createElement("div");
//         userContainer.id = "userContainer";
//         const userInfo = document.createElement("div");
//         userInfo.id = "userInfo";
//         const userNameCompany = document.createElement("div");
//         userNameCompany.id = "userNameCompany";

//         const userCompany = document.createElement('p');
//         userCompany.id = 'userCompany'
//         const userName = document.createElement("p");
//         userName.id = "userName";
//         const userEmail = document.createElement("p");
//         userEmail.id = "userEmail";
//         const userPhone = document.createElement("p");
//         userPhone.id = "Userphone";
//         const userWebsite = document.createElement("p");
//         userWebsite.id = "userWebsite";
//         const  userAddress = document.createElement("p");
//         userAddress.id = "userAddress";
//         const userCatchPhrase = document.createElement('p');
//         userCatchPhrase.id = 'userCatchPhrase'

//         userCatchPhrase.innerHTML = `${user.company.catchPhrase}!`
//         userPhone.innerHTML = `${user.phone}`
//         userWebsite.innerHTML = user.website
//         userAddress.innerHTML = `${user.address.city}      ${user.address.street}${user.address.suite}`
//         userCompany.innerHTML = `${user.company.name}'s`
//         userName.innerHTML = user.name;
//         userEmail.innerHTML = user.email;

//         document.querySelector("#main").appendChild(userContainer);
//         userContainer.appendChild(userNameCompany)
//            userContainer.appendChild(userCatchPhrase)
//         userContainer.appendChild(userInfo)

//         userNameCompany.appendChild(userCompany)
//         userNameCompany.appendChild(userName);

//        userInfo.appendChild(userWebsite);
//        userInfo.appendChild(userPhone);
//       userInfo.appendChild(userAddress);
//         userInfo.appendChild(userEmail);

//         userContainer.onclick = () => {
//           main.style.flexWrap = 'nowrap';
//           main.style.flexDirection = 'column';
//           console.log(user.id);
//           main.innerHTML = ''
//           const renderPosts = () => {
//             posts.forEach((post) => {
//               if (post.userId === user.id) {
//                 console.log(post);
//                 const postContainer = document.createElement('div')
//                 postContainer.id = 'postContainer'
//                 const postTitle = document.createElement('p')
//                 postTitle.id = 'postTitle'
//                 const postBody = document.createElement('p')
//                 postBody.id = 'postBody'

//                 postBody.textContent = post.body
//                 postTitle.textContent = post.title
//                 main.appendChild(postContainer)
//                 postContainer.appendChild(postTitle)
//                 postContainer.appendChild(postBody)

//               }

//             })
//           }
//           renderPosts()

//         }
//       });
//     };
//     renderUsers();
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log("gotovo");
//   }
// };
// getUsers();

//domaci: svih 6 user kartica koristeci podatke sa reqres i trebaju da se pokazu na ekran

// // GET, POST, PUT, DELETE

// //GET
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => response.json())
//     .then((data) => console.log(data));

//     //FETCH POST
//     const data = {
//       title: 'nova obaveza',
//       completed: false,
//     }

// fetch('https://jsonplaceholder.typicode.com/todos/', {
//   method: 'POST',
//   body: JSON.stringify(data),
//   headers:{
//     'Content-Type': 'application/json',

//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//   //FETCH PUT

//   const dataPUT = {
//     id: 1,
//     title: 'izmenjena obaveza',
//   }

//   fetch('https://jsonplaceholder.typicode.com/todos/1', {
//   method: 'PUT',
//   body: JSON.stringify(dataPUT),
//   headers:{
//     'Content-Type': 'application/json',
//   },
// })
// .then((response) => response.json())
// .then((response) => {
//   console.log(response.status);
// })
// .then((data) => console.log(data));

// //fetch DELETE

// fetch('https://jsonplaceholder.typicode.com/todos/1', {
// method: 'DELETE',

// }).then((response) => console.log('odgovor sa statusom:', respose.status));

let countries = [];
let countryContainerTemp = 0;
const getCountries = async () => {
  try {
    const main = document.querySelector("#main");
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    console.log(data);
    countries = data;

    countries.forEach((country) => {
      let countryContainer = document.createElement("div");
      countryContainer.id = "countryContainer";
      const countryImg = document.createElement("img");
      const countryInfo = document.createElement("div");
      countryInfo.id = "countryInfo";
      const countryName = document.createElement("p");
      countryName.id = "countryName";
      const countryRegion = document.createElement("p");
      countryRegion.id = "countryRegion";
      const countryCapital = document.createElement("p");
      countryCapital.id = "countryCapital";

      const buttonEurope = document.querySelector("#europe");
      const buttonAsia = document.querySelector("#asia");
      const buttonAmericas = document.querySelector("#americas");
      const buttonOceania = document.querySelector("#oceania");
      const buttonAfrica = document.querySelector("#africa");

      buttonEurope.onclick = () => {
        let europeCountries = countries.filter((el) => el.region == "Europe");

        location.href = `http://127.0.0.1:5500/js.practice/regions.html`;
      };
      buttonAsia.onclick = () => {
        let asiaCountries = countries.filter((el) => el.region == "Asia");

        location.href = `http://127.0.0.1:5500/js.practice/regionscopy.html`;
      };
      buttonAmericas.onclick = () => {
        let americaCountries = countries.filter((el) => el.region == "America");

        location.href = `http://127.0.0.1:5500/js.practice/regionscopy2.html`;
      };
      buttonOceania.onclick = () => {
        let oceaniaCountries = countries.filter((el) => el.region == "Oceania");

        location.href = `http://127.0.0.1:5500/js.practice/regionscopy3.html`;
      };
      buttonAfrica.onclick = () => {
        let africaCountries = countries.filter((el) => el.region == "Africa");

        location.href = `http://127.0.0.1:5500/js.practice/regionscopy4.html`;
      };

      countryContainerTemp = countryContainer;

      countryCapital.textContent = country.capital;
      countryName.textContent = country.name.common;
      countryRegion.textContent = country.region;
      countryImg.id = "countryImg";
      countryImg.src = country.flags.png;

      main.appendChild(countryContainer);

      countryInfo.appendChild(countryName);
      countryInfo.appendChild(countryCapital);
      countryInfo.appendChild(countryRegion);
      countryContainer.appendChild(countryImg);
      countryContainer.appendChild(countryInfo);

      countryContainer.onclick = () => {
        main.style.flexWrap = "nowrap";
        main.style.flexDirection = "column";
        console.log(country.name.common);
        main.innerHTML = "";
        const renderCountryFacts = () => {
          countryName.style.fontSize = "40px";
          (countryName.style.fontFamily = "Franklin Gothic Medium"),
            "Arial Narrow";

          countryImg.style.width = "50%";
          countryImg.style.marginTop = "20px";
          const countryFactsContainer = document.createElement("div");
          countryFactsContainer.id = "countryFactsContainer";
          const countryLanguage = document.createElement("p");
          const countryLanguagesArray = Object.values(country.languages);
          const countryPopulation = document.createElement("p");
          const countrySubRegion = document.createElement("p");
          const countryCurrency = document.createElement("p");
          const refreshButton = document.createElement("button");
          refreshButton.id = "refreshButton";
          const countryCurrencyArray = Object.values(country.currencies);

          countrySubRegion.textContent = `Sub-Region : ${country.subregion}`;
          countryPopulation.textContent = `Population : ${country.population}`;
          countryLanguage.textContent = ` Languages : ${countryLanguagesArray[0]}`;
          countryCapital.textContent = `Capital: ${country.capital[0]}`;
          countryRegion.textContent = `Region: ${country.region}`;
          countryCurrency.textContent = `Currency : ${countryCurrencyArray[0].name}`;
          refreshButton.textContent = `Back to Main Page`;
          refreshButton.onclick = () => {
            window.location.reload();
          };

          main.appendChild(countryName);
          main.appendChild(countryImg);
          countryImg.style.width = "30%";
          main.appendChild(countryFactsContainer);
          countryFactsContainer.appendChild(countryName);
          countryFactsContainer.appendChild(countryLanguage);
          countryFactsContainer.appendChild(countryCapital);
          countryFactsContainer.appendChild(countryCurrency);
          countryFactsContainer.appendChild(countryRegion);
          countryFactsContainer.appendChild(countrySubRegion);
          countryFactsContainer.appendChild(countryPopulation);
          main.appendChild(refreshButton);
        };
        renderCountryFacts();
      };
    });
  } catch (e) {
    console.log(e);
  } finally {
    console.log("gotovo");
  }
};
getCountries();
// window.onkeyup = keyup;
//       let inputKey;
//  function keyup(e) {
//         inputKey = e.target.value;
//         console.log(inputKey);
//         if (e.keyCode == 13){

//           for (let i = 0; i < countries.length; i++) {

//        if (inputKey != countries[i].name.common) {
//           countryContainerTemp.innerHTML = ''
//           }
//           else{
//             console.log(countries[i]);
//           }
//     }

//         }
//       }
