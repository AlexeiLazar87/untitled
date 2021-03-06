// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

let str1 = ['a', 'b', 'c'];
for (let i = 1; i <= 3; i++) {
    str1.push(i);
}
console.log(str1);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let str2 = [1, 2, 3];
let reverseStr2 = str2.reverse();
console.log(reverseStr2);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

let str3 = [1, 2, 3];
str3.push(4, 5, 6);
console.log(str3);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

let str4 = [1, 2, 3];
str4.unshift(4, 5, 6);
console.log(str4);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

let str5 = ['js', 'css', 'jq'];
console.log(str5);
let str5First = str5.shift();
console.log('first element', str5First);
console.log(str5);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

let str6 = ['js', 'css', 'jq'];
console.log(str6);
let str6Last = str6.pop();
console.log('last element', str6Last);
console.log(str6);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

let str7 = [1, 2, 3, 4, 5];
console.log(str7.slice(3));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

let str8 = [1, 2, 3, 4, 5];
console.log(str8.slice(0, 2));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

let str9 = [1, 2, 3, 4, 5];
str9.splice(1, 2);
console.log(str9);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let str10 = [1, 2, 3, 4, 5];
str10.splice(3, 0, 'a', 'b', 'c');
console.log(str10);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив
// [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let str11 = [1, 2, 3, 4, 5];
str11.splice(1, 0, 'a', 'b');
str11.splice(6, 0, 'c');
str11.splice(8, 0, 'e');
console.log(str11);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let str12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < str12.length; i++) {
    if (str12[i] % 2 === 0) {
        console.log(str12[i]);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push ()
// скопіювати значення одного масиву в інший

let str13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let str13New = [];

for (let i = 0; i < str13.length; i++) {
    str13New.push(str13[i]);
}
console.log(str13New);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати
// значення одного масиву в інший.

let str14 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let str14New = [];

for (let i = 0; i < str14.length; i++) {
    str14New[i] = (str14[i]);
}
console.log(str14New);


// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// перебрати його циклом while

let str15 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = 0;
while (i < str15.length) {
    console.log(str15[i]);
    i++;
}

//перебрати його циклом for

let str16 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let j = 0; j < str16.length; j++) {
    console.log(str16[j]);
}


//перебрати циклом for та вивести  числа тільки з непарним індексом

let str17 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = 0; i < str12.length; i++) {
    if (str17[i] % 2 === 1) {
        console.log(str17[i]);
    }
}

//перебрати циклом for та вивести  числа тільки парні  значення

let str18 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let i = 0; i < str12.length; i++) {
    if (str18[i] % 2 === 0) {
        console.log(str18[i]);
    }
}

// замінити кожне число кратне 3 на слово "okten"

let str19 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(str19);
for (let j = 0; j < str19.length; j++) {
    if (str19[j] % 3 === 0) {
        str19[j] = 'okten';
    }
}
console.log(str19);

// створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

let str20 = [];
let str21 = [];

for (let j = 0; j < 100; j++) {
    str20[j] = j * 2;
    str21[j] = j * 2 + 1;
}
console.log(str20);
console.log(str21);

// 1
// створити пустий масив та :
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

let str22 = [];
for (let i = 0; i < 10; i++) {
    str22[i] = Math.floor((Math.random() * 738 - 8) + 8)
}

console.log(str22);

// 2. вывести на консоль  каждый третий елемент
for (let i = 2; i < str22.length; i += 3) {
    console.log(str22[i]);
}

// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.

for (let i = 2; i < str22.length; i += 3) {
    if (str22[i] % 2 === 0) {
        console.log(str22[i]);
    }
}

// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.

let str22New = [];
for (let i = 2; i < str22.length; i += 3) {
    if (str22[i] % 2 === 0) {
       str22New.push(str22[i]);
    }
}
console.log(str22New);

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный

for (let i = 0; i < str22.length; i++) {
    if (str22[i+1] % 2 === 0) {
        console.log(str22[i]);
    }
}