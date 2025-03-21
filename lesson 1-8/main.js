"use strict";
// #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.
console.log('---lesson 1-----------------------------------------------------------------------');
let word1 = 'hello';
let word2 = 'owu';
let word3 = 'com';
let word4 = 'ua';
let number1 = 1;
let number2 = 10;
let number3 = -999;
let number4 = 123;
let number5 = 3.14;
let number6 = 2.7;
let number7 = 16;
let boolean1 = true;
let boolean2 = false;
console.log(word1);
console.log(word2);
console.log(word3);
console.log(word4);
console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);
console.log(number5);
console.log(number6);
console.log(number7);
console.log(boolean1);
console.log(boolean2);
console.log('--------------------------------------------------');
// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
//     З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Illia';
let middleName = 'Zagunailo';
let lastName = 'Olegovich';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);
// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a1 = 100;
let b2 = '100';
let c3 = true;
console.log(typeof a1);
console.log(typeof b2);
console.log(typeof c3);
console.log('------lesson2--------------------------------------------------------- ');
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
console.log('----#67kfznmiMl-----');
let arrElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrElements[0]);
console.log(arrElements[1]);
console.log(arrElements[2]);
console.log(arrElements[3]);
console.log(arrElements[4]);
console.log(arrElements[5]);
console.log(arrElements[6]);
console.log(arrElements[7]);
console.log(arrElements[8]);
console.log(arrElements[9]);
let book1 = {
    title: 'Deep blue see', pageCount: 200, genre: 'documental'
};
let book2 = {
    title: 'Deep red see', pageCount: 300, genre: 'documental'
};
let book3 = {
    title: 'Deep green see', pageCount: 400, genre: 'fantastic'
};
let book4 = {
    title: 'Deep blue see', pageCount: 200, genre: 'documental', authors: [{
            name: 'vasa', age: 32
        }]
};
let book5 = {
    title: 'Deep red see', pageCount: 300, genre: 'documental', authors: [{
            name: 'peta', age: 32
        }, {
            name: 'lili', age: 30
        }]
};
let book6 = {
    title: 'Deep green see', pageCount: 400, genre: 'fantastic', authors: [{
            name: 'vova', age: 32
        }]
};
// #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.'
// ' Вивести в консоль пароль кожного користувача
console.log('--------jCHFnEbdmFd-------');
let usersjCHFnEbdmFd = [{ name: 'vasa', username: 'vasilovich', password: 1111 }, {
        name: 'lili', username: 'vasilovich', password: 1112
    }, { name: 'pipi', username: 'vasilovich', password: 1113 }, {
        name: 'did', username: 'vasilovich', password: 1114
    }, { name: 'bab', username: 'vasilovich', password: 1115 }, {
        name: 'kiki', username: 'vasilovich', password: 1116
    }, { name: 'vova', username: 'vasilovich', password: 1117 }, {
        name: 'vika', username: 'vasilovich', password: 1118
    }, { name: 'ola', username: 'vasilovich', password: 1119 }, { name: 'lola', username: 'vasilovich', password: 1110 },];
console.log(usersjCHFnEbdmFd[0].password);
console.log(usersjCHFnEbdmFd[1].password);
console.log(usersjCHFnEbdmFd[2].password);
console.log(usersjCHFnEbdmFd[3].password);
console.log(usersjCHFnEbdmFd[4].password);
console.log(usersjCHFnEbdmFd[5].password);
console.log(usersjCHFnEbdmFd[6].password);
console.log(usersjCHFnEbdmFd[7].password);
console.log(usersjCHFnEbdmFd[8].password);
console.log(usersjCHFnEbdmFd[9].password);
let temperatures = [{
        sunday: [{ morning: 18, day: 26, night: 15 }]
    }, {
        monday: [{ morning: 18, day: 26, night: 15 }]
    }, {
        tuesday: [{ morning: 18, day: 26, night: 15 }]
    }, {
        wednesday: [{ morning: 18, day: 26, night: 15 }]
    }, {
        thursday: [{ morning: 18, day: 26, night: 15 }]
    }, {
        friday: [{ morning: 18, day: 26, night: 15 }]
    }, {
        saturday: [{ morning: 18, day: 26, night: 15 }]
    }];
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
console.log('--------#bAUsaq6LI------');
let x = -1;
if (x !== 0) {
    console.log('вірно');
}
let a = 1;
if (a !== 0) {
    console.log('вірно');
}
a = 0;
if (a !== 0) {
    console.log('вірно');
}
a = -3;
if (a !== 0) {
    console.log('вірно');
}
// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
//     до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
console.log('---#3ckURgvs----');
let time = 61;
if (time >= 0 && time < 16) {
    console.log('перша чверть');
}
else if (time >= 16 && time < 31) {
    console.log('друга чверть');
}
else if (time >= 31 && time < 46) {
    console.log('третя чверть');
}
else if (time >= 46 && time < 61) {
    console.log('четверта чверть');
}
else {
    console.log('введіть реальні дані');
}
// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).
console.log('-----------#UMoNq4biWGe-----');
let day = 32;
if (day >= 1 && day < 11) {
    console.log('перша');
}
else if (day >= 11 && day < 21) {
    console.log('друга');
}
else if (day >= 21 && day < 32) {
    console.log('третя');
}
else {
    console.log('введіть реальну дату день');
}
// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch.
//     Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
console.log('-------#KzrtqyQ------');
let today = 8;
switch (today) {
    case 1:
        console.log('понеділок');
        break;
    case 2:
        console.log('вівторок');
        break;
    case 3:
        console.log('середа');
        break;
    case 4:
        console.log('четвер');
        break;
    case 5:
        console.log('пятниця');
        break;
    case 6:
        console.log('субота');
        break;
    case 7:
        console.log('неділя');
        break;
    default:
        console.log('помилка - ведіть день від 1 до 7');
}
// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
console.log('----------#uwsz1RnTQJ1------');
let number11 = 132;
let number12 = 132;
if (number11 > number12) {
    console.log(number11);
}
else if (number12 > number11) {
    console.log(number2);
}
else if (number11 === number12) {
    console.log('рівно');
}
// #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті,які приводиться до false, а це 0 null undefined і тд).
let c = '';
if (!c) {
    console.log('default');
}
let coursesAndDurationArray = [{ title: 'JavaScript Complex', monthDuration: 5 }, {
        title: 'Java Complex', monthDuration: 6
    }, { title: 'Python Complex', monthDuration: 6 }, { title: 'QA Complex', monthDuration: 4 }, {
        title: 'FullStack', monthDuration: 7
    }, { title: 'Frontend', monthDuration: 4 }];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('супер');
}
console.log('--------------lesson3-------------');
// #y7crMeFwHcS
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div> hello </div>`);
}
// #TYj7ncx
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div> hello ${i} </div>`);
}
// #uzkt71dp
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let t = 0;
while (t < 20) {
    document.write(`<h1>Okten</h1>`);
    t++;
}
// #OeT7t3uUMFi
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let e = 0;
while (e < 20) {
    document.write(`<h1>octen ${e + 1}</h1>`);
    e++;
}
// #vLSZKMlO
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (const listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`);
}
document.write(`</ul>`);
let productsHdjws7E = [{
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    }, {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    }, {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    }, {
        title: 'tea',
        price: 15,
        image: 'https://cdn.test.de/file/image/84/a1/80dc6ca5-04a0-4705-a34c-cf45c53311ed-web/5796159_schwarzer-tee-teebeutel.jpg;w1200;a1-1;e.webp'
    },];
for (const product of productsHdjws7E) {
    document.write(`<div>
 <h3 className="product-title">${product.title}. Price - ${product.price}</h3>
    <img src="${product.image}" alt="" className="product-image"/>
</div>`);
}
// #4WrHwFTEop0
// є масив
console.log('----------#4WrHwFTEop0-----------');
let users4WrHwFTEop0 = [{ name: 'vasya', age: 31, status: false }, {
        name: 'petya', age: 30, status: true
    }, { name: 'kolya', age: 29, status: true }, { name: 'olya', age: 28, status: false }, {
        name: 'max', age: 30, status: true
    }, { name: 'anya', age: 31, status: false }, { name: 'oleg', age: 28, status: false }, {
        name: 'andrey', age: 29, status: true
    }, { name: 'masha', age: 30, status: true }, { name: 'olya', age: 31, status: false }, {
        name: 'max', age: 31, status: true
    }];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
for (const user of users4WrHwFTEop0) {
    if (user.status) {
        console.log(user);
    }
}
console.log('--------------------------------------------');
for (const user of users4WrHwFTEop0) {
    if (!user.status) {
        console.log(user);
    }
}
console.log('--------------------------------------------');
for (const user of users4WrHwFTEop0) {
    if (user.age > 30) {
        console.log(user);
    }
}
console.log('/////////////lesson4///////////////////////');
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function f(x, y) {
    return x * y;
}
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// S = πr2, де π = 3,14, r – радіус круга.
function sCircle(r) {
    return Math.PI * r * 2;
}
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// Площа повної поверхні циліндра:
//S = 2 π R (R + h) = 2π·12·(12 + 12) = 576π ≈ 1809.556992
function sCilindre(radius, height) {
    return 2 * Math.PI * radius * (radius + height);
}
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
console.log('---------#SIdMd0hQ-----------');
let usersSIdMd0hQ = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
function userIterator(arr) {
    for (const element of arr) {
        console.log(element);
    }
}
userIterator(usersSIdMd0hQ);
// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент
function pp(text) {
    document.write(`
    <p>${text}</p>
    `);
}
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
//     Текст li задати через аргумент всім однаковий
function listProject(msg) {
    document.write(`
    <ul>
    <li>${msg}</li>
    <li>${msg}</li>
    <li>${msg}</li>
    </ul>
    `);
} // #0Kxco1edSN
// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та
// виводить його через document.write
function list2Project(text, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write
let arr11 = ['asdad', 121, 2112, 'asdasd', true];
function elementsIter(arr) {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}
elementsIter(arr11);
let usersbovDJDTIjt = [{ id: 1, name: 'asd', age: 12 }, { id: 2, name: 'asd', age: 12 }, {
        id: 3, name: 'asd', age: 12
    }, { id: 4, name: 'asd', age: 12 }];
function objectsIter(arr) {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`);
    }
}
objectsIter(usersbovDJDTIjt);
// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
let numbers111 = [-10000, 10, 20, 30, 1, 15, -1, -100, -55, -112,];
function min(arr) {
    let mini = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] === 'number')
            if (arr[i] < mini)
                mini = arr[i];
    }
    console.log(mini);
}
min(numbers111);
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел,
//     сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
console.log('--------------#EKRNVPM----------------------');
let numbers221 = [10, 20, 30, 40, -11111];
function f1(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let number2 = arr[i];
        sum = sum + arr[i];
    }
    console.log(sum);
}
f1(numbers221);
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
console.log('-------------#kpsbSQCt2Lf-------------------');
let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function swap(arr) {
    let indexOne = arr[0];
    let indexTwo = [arr[1]];
    indexTwo.push(indexOne);
    for (let i = 2; i < arr.length; i++) {
        indexTwo.push(arr[i]);
    }
    return indexTwo;
}
console.log(swap(numbers4));
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
console.log('---------#mkGDenYnNjn------------------');
let grn = 10000;
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            if (typeof item === "object") {
                return sumUAH / item.value;
            }
        }
    }
}
console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));
console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));
console.log('//////////lesson 6 ////////////////////');
// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let string1 = 'hello world';
let string2 = 'lorem ipsum';
let string3 = 'javascript is cool';
console.log(string1.length);
console.log(string2.length);
console.log(string3.length);
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('--------------------------8lld9HMxXWB----------------');
console.log(string1.toUpperCase());
console.log(string2.toUpperCase());
console.log(string3.toUpperCase());
// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let string1 = 'HELLO WORLD';
// let string2 = 'LOREM IPSUM';
// let string3 = 'JAVASCRIPT IS COOL';
console.log('--------------------------ClDsAm7xba7----------------');
console.log(string1.toLowerCase());
console.log(string2.toLowerCase());
console.log(string3.toLowerCase());
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strDirty = ' dirty string   ';
console.log(strDirty.trim());
// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log('----------bfoJuse4ZzP-------');
let str = 'Ревуть воли як ясла повні';
function fromStrToArr(str) {
    return str.split(' ');
}
console.log(fromStrToArr(str));
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
console.log('----------Rbr5kEQ---------');
let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let castNumForStr = nums.map((value) => value + '');
console.log(castNumForStr);
// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
console.log('----------5hqyKTfmc---------');
let nums1 = [11, 21, 3];
function sortNums(nums, direction) {
    if (direction === 'up')
        return nums.sort((a, b) => a - b);
    if (direction === 'low')
        return nums.sort((a, b) => a + b);
}
console.log(sortNums(nums1, 'up'));
let coursesAndDurationArray_yo06d74c1C = [{
        title: 'JavaScript Complex', monthDuration: 5
    }, { title: 'Java Complex', monthDuration: 6 }, { title: 'Python Complex', monthDuration: 6 }, {
        title: 'QA Complex', monthDuration: 4
    }, { title: 'FullStack', monthDuration: 7 }, { title: 'Frontend', monthDuration: 4 }];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log('----------yo06d74c1C---------');
console.log(coursesAndDurationArray_yo06d74c1C.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
}));
let filter = coursesAndDurationArray_yo06d74c1C.filter((value) => value.monthDuration > 5);
console.log(filter);
const maped = coursesAndDurationArray_yo06d74c1C.map(function (value, index) {
    return Object.assign(Object.assign({}, value), { id: index + 1 });
});
console.log(maped);
// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
console.log('----------bolvdlhP---------');
const cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
const value = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const color = ['red', 'black'];
let cardsSuitValue = [];
// console.log(cardsSuitValue)
for (const string of value) {
    for (const cardSuitElement of cardSuit) {
        cardsSuitValue.push({ cardSuit: cardSuitElement, cardValue: string });
    }
}
const cardsAll = [];
for (const card of cardsSuitValue) {
    if (card.cardSuit === 'diamond' || card.cardSuit === 'heart') {
        cardsAll.push(Object.assign(Object.assign({}, card), { color: color[0] }));
    }
    else if (card.cardSuit === 'spade' || card.cardSuit === 'clubs') {
        cardsAll.push(Object.assign(Object.assign({}, card), { color: color[1] }));
    }
}
let tys = cardsAll.find((value) => {
    return value.cardValue === 'ace' && value.cardSuit === 'spade';
});
console.log(tys); // - знайти піковий туз
let six = cardsAll.filter((value) => value.cardValue === '6');
console.log(six); // - всі шістки
let reds = cardsAll.filter((value) => value.color === 'red');
console.log(reds); // - всі червоні карти
let diamond = cardsAll.filter((value) => value.cardSuit === 'diamond');
console.log(diamond); // - всі буби
let clubs = cardsAll.filter((value) => value.cardSuit === 'clubs' && value.cardValue !== '6' && value.cardValue !== '7' && value.cardValue !== '8');
console.log(clubs); // - всі трефи від 9 та більше
// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log('----------EP5I1UUzAX---------');
let reduse = cardsAll.reduce((acc, card) => {
    if (card.cardSuit === 'spade') {
        acc.spades.push(card);
    }
    else if (card.cardSuit === "diamond") {
        acc.diamonds.push(card);
    }
    else if (card.cardSuit === 'heart') {
        acc.hearts.push(card);
    }
    else if (card.cardSuit === 'clubs') {
        acc.clubs.push(card);
    }
    return acc;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });
console.log(reduse);
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
console.log('----------4LJn7zBx---------');
let coursesArray = [{
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    }, {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    }, {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    }, {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    }, {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    }, {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }];
let filterSass = coursesArray.filter((value) => value.modules.includes('sass'));
console.log(filterSass);
let filterDocker = coursesArray.filter((value) => value.modules.includes('docker'));
console.log(filterDocker);
console.log('////////////lesson 7/////////////////');
// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
console.log('---------#XjJuucOMR0-------');
class UsersObjects_XjJuucOMR0 {
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
let usersObjects_XjJuucOMR0 = [
    new UsersObjects_XjJuucOMR0(1, 'Lili', 'dodido', 'lili@gmail.com', 44444),
    new UsersObjects_XjJuucOMR0(2, 'didi', 'dodido', 'lili@gmail.com', 44444),
    new UsersObjects_XjJuucOMR0(3, 'Lili', 'dodido', 'lili@gmail.com', 44444),
    new UsersObjects_XjJuucOMR0(4, 'Lili', 'dodido', 'lili@gmail.com', 44444),
    new UsersObjects_XjJuucOMR0(5, 'Lili', 'dodido', 'lili@gmail.com', 44444),
    new UsersObjects_XjJuucOMR0(6, 'Lili', 'dodido', 'lili@gmail.com', 44444),
    new UsersObjects_XjJuucOMR0(7, 'Lili', 'dodido', 'lili@gmail.com', 44444),
    new UsersObjects_XjJuucOMR0(8, 'Lili', 'dodido', 'lili@gmail.com', 44444),
    new UsersObjects_XjJuucOMR0(9, 'Lili', 'dodido', 'lili@gmail.com', 44444),
    new UsersObjects_XjJuucOMR0(10, 'Lili', 'dodido', 'lili@gmail.com', 44444)
];
console.log(usersObjects_XjJuucOMR0);
// #2ikXsE2WiKZ
console.log('-----------------2ikXsE2WiKZ------------');
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
let filterUsersId = usersObjects_XjJuucOMR0.filter((value) => value.id % 2 === 0);
console.log(filterUsersId);
// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log('------pOeHKct---------');
let userSortId = usersObjects_XjJuucOMR0.sort((userId1, userId2) => {
    return userId1.id - userId2.id;
});
console.log(userSortId);
// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
class Order {
    constructor(product, prise) {
        this.product = product;
        this.prise = prise;
    }
}
let clients = [
    new Client(1, 'Lili', 'petrovna', 'lili@gmail.com', '+380978161247', [
        new Order('apple', 12000),
        new Order('samsung', 15000),
        new Order('samsung', 15000)
    ]),
    new Client(2, 'Ola', 'Zagunailo', 'ola@gmail.com', '+380978161237', [
        new Order('samsung', 15000)
    ]),
    new Client(3, 'Ola', 'Zagunailo', 'ola@gmail.com', '+380978161237', [
        new Order('samsung', 15000)
    ]),
    new Client(4, 'Ola', 'Zagunailo', 'ola@gmail.com', '+380978161237', [
        new Order('apple', 12000),
        new Order('samsung', 15000)
    ]),
    new Client(5, 'Ola', 'Zagunailo', 'ola@gmail.com', '+380978161237', [
        new Order('apple', 12000)
    ]),
    new Client(6, 'Ola', 'Zagunailo', 'ola@gmail.com', '+380978161237', [
        new Order('apple', 12000),
        new Order('samsung', 15000),
        new Order('samsung', 15000)
    ]),
    new Client(7, 'Lili', 'petrovna', 'lili@gmail.com', '+380978161247', [
        new Order('apple', 12000),
        new Order('samsung', 15000),
        new Order('samsung', 15000)
    ]),
    new Client(8, 'Lili', 'petrovna', 'lili@gmail.com', '+380978161247', [
        new Order('apple', 12000),
        new Order('samsung', 15000),
        new Order('samsung', 15000),
        new Order('samsung', 15000),
        new Order('samsung', 15000),
        new Order('samsung', 15000),
        new Order('samsung', 15000),
        new Order('samsung', 15000)
    ]),
    new Client(9, 'Lili', 'petrovna', 'lili@gmail.com', '+380978161247', [
        new Order('apple', 12000),
        new Order('samsung', 15000),
        new Order('samsung', 15000),
        new Order('samsung', 15000),
        new Order('samsung', 15000),
        new Order('samsung', 15000),
        new Order('samsung', 15000)
    ]),
    new Client(10, 'Lili', 'petrovna', 'lili@gmail.com', '+380978161247', [
        new Order('apple', 12000),
        new Order('samsung', 15000),
        new Order('samsung', 15000),
        new Order('toyota', 15000),
        new Order('samsung', 15000)
    ]),
];
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати
// його по кількості товарів в полі order по зростанню. (sort)
console.log('--------8abtVjRv------');
let sortClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortClients);
// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log('----vV9a6584I5----');
class Driver {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
class Car1 {
    info() {
        for (const argumentsKey in this) {
            if (typeof this[argumentsKey] !== "function") {
                console.log(this[argumentsKey], argumentsKey);
            }
        }
    }
    ;
    addDrive(driver) {
        this.driver = driver;
    }
    ;
    increaseMaxSpeed(newSpeed) {
        console.log(newSpeed = this.maxSpeed + 50);
    }
    ;
    changeYear(newValue) {
        console.log(newValue = this.made = '2020');
    }
    ;
    constructor(model, made, releaseDate, maxSpeed, engineVolume) {
        this.model = model;
        this.made = made;
        this.releaseDate = releaseDate;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
}
let reno = new Car1('reno', 'China', 2000, 200, 3);
reno.info();
reno.addDrive(new Driver('vasa', 'lolovich'));
reno.increaseMaxSpeed();
reno.changeYear();
console.log(reno);
// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log('----zg6Fifnqig---');
class Pelyshka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
class Prince {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let girls = [
    new Pelyshka("Lili", 39, 41),
    new Pelyshka("Dodo", 29, 37),
    new Pelyshka("Koko", 19, 38),
    new Pelyshka("Didi", 18, 36),
    new Pelyshka("Momo", 14, 33),
    new Pelyshka("Mimi", 40, 39),
    new Pelyshka("Viki", 29, 37),
    new Pelyshka("Mike", 13, 36),
    new Pelyshka("Nini", 14, 35),
    new Pelyshka("Soso", 15, 34),
];
let prince = new Prince('sasa', 30, 35);
for (const girl of girls) {
    if (girl.size === prince.size) {
        // console.log(girl)
        prince.wife = girl;
    }
}
let wife = girls.find((value) => value.size === prince.size);
console.log(wife);
console.log(prince);
console.log('//////////lesson 8/////////');
// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
// я не знаю як це типізувати покищо
// #iz6emEsP2BA
// - є масив
console.log('------------#iz6emEsP2BA----------');
let coursesAndDurationArray_iz6emEsP2BA = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
let maped1 = coursesAndDurationArray_iz6emEsP2BA.map((value, index) => {
    return { id: index + 1, title: value.title, monthDuration: value.monthDuration };
});
console.log(maped1);
