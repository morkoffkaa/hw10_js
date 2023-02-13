// Вивести на сторінку в один рядок через кому числа від 10 до 20.;
for (let i = 10; i <= 20; i++) {
    document.write(i+", ");
};
// Вивести квадрати чисел від 10 до 20.;
for (let i = 10; i <= 20; i++) {
    console.log(i ** 2);
};

// Вивести таблицю множення на 7.;
for (let i = 1; i <= 10; i++) {
    console.log(i * 7);
};

// "Знайти суму всіх цілих чисел від 1 до 15.");

function calculateTotal(number) {
    let sum = 0;

    for (let i = 1; i <= 15; i++) {
        sum += i;
    }
    return sum;
}

console.log(calculateTotal(15));

// "Знайти добуток всіх цілих чисел від 1 до 15.");
function multTotal(number) {
    let mult = 1;

    for (let i = 15; i <= 35; i++) {
        mult *= i;
    }
    return mult;
}
console.log(multTotal(15));

// console.log("Знайти середнє арифметичне всіх цілих чисел від 1 до 500.")
function calculateAverage(number) {
    let sum = 0;

    for (let i = 1; i <= 500; i++) {
        sum += i;
    }
    return sum / 500;
}

console.log(calculateAverage(500));

// Вивести суму лише парних чисел в діапазоні від 30 до 80.

let sum = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 == 0) sum += i;
}
document.write(sum);


// Вивести всі числа в діапазоні від 100 до 200 кратні 3.

for (let i = 100; i <= 200; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}
// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

const a = +prompt("Enter a number a");

for (let i = 1; i <= a; i++) {
    if (a % i == 0) 
        console.log(i);
    }

// Знайти суму його парних дільників.
// Визначити кількість його парних дільників.

let a = +prompt("Enter a number a");
let sum = 0;
let count = 0;

for (let i = 1; i <= a; i++) {
    if (a % i == 0) {
        sum += i;
        count = count+1;
    }
    console.log(sum);
}


// Надрукувати повну таблицю множення від 1 до 10.

var oneRow = '';
function multiply() {
	for (var i = 1; i < 11; i++) {
		for (var j = 1; j < 11; j++) {
			oneRow  += (j*i) + " ";       
		}
    console.log(i + " x");
    console.log(oneRow);
		oneRow = '';
	} 

}

multiply(); 