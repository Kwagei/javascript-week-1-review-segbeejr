
// Write a function that takes an array of numbers and returns the sum of the array.
    // Answer:
function sumArray(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}


// Write a function that takes an array of strings and returns the longest string in the array.
    // Answer:
function longestString(strings){
    longestStr = "";
    for(let i = 0; i < strings.length; i++){
        if(strings[i].length > longestStr.length){
            longestStr = strings[i];
        }
    }
    return longestStr;
}


// Write a function that takes an array of numbers and returns an array of the even numbers in the array.
    // Answer:
function evenNumbers(numbers){
    let newNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            newNumbers[newNumbers.length] = numbers[i];
        }
    }
    return newNumbers;
}



// Write a function that takes an array of numbers and returns an array of the numbers in reverse order.
    // Answer:
function reverseOrder(numOfArr){
    let reverseArr = [];
    for(let i = numOfArr.length -1; i >= 0; i--){
        reverseArr[reverseArr.length] = numOfArr[i];
    }
    return reverseArr;
}


// A word is given write a punction to tell if the word is a Palindrome.
    // Answer:
function palindrome(word){
    let smallLetters = word.toLowerCase();
    let length = smallLetters.length;

    for(let i = 0; i < length / 2; i++){
        if(smallLetters[i] !== smallLetters[length - 1 - i]){
            return "Not a Palindrome";
        }
    }
    return smallLetters "is a Palindrome";
}



// create a person object and create a method on the person object to update the name on the person object.
    // Answer:
let person = {
    name: "Johnson",
    age: 28,
    height: "5ft"
}

person.name = "Johnson Peawon";



// Create an array of objects representing books. Each book should have properties for title and author. 
// Write a function that takes the array of books and returns an array of book titles.
    // Answer:
let books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' }
];

function bookTitles(books){
    let titles = [];
    for(let i = 0; i < books.length; i++){
        
        titles[titles.length] = books[i].title;
    }
    return titles;
}





// Create an array of objects representing students. Each student should have properties for name and grade. 
// Write a function that takes the array of students and returns an array of student names who have a grade higher than 90.
    // Answer:
const students = [
    { name: 'James', grade: 85 },
    { name: 'Ben', grade: 95 },
    { name: 'Carlos', grade: 90 },
    { name: 'Nushon', grade: 92 },
    { name: 'Tangaye', grade: 80 },
];

function studentArr(students){
    let topStudents = [];
    for(let i = 0; i < students.length; i++){
        if(students[i].grade > 90){
            topStudents[topStudents.length] = students[i];
        }
    }
    return topStudents;
}



// Given an array of numbers, write a function that returns a new array with the numbers sorted in decending 
// order using array functions and a loop.
    // Answer:
function decendingOrder(numbers){
    let arrangedArr = numbers.slice();

    for(let i = 0; i < arrangedArr.length; i++){
        for(let nate = 0; nate < arrangedArr.length - 1 - i; nate++){
            if(arrangedArr[nate] < arrangedArr[nate + 1]){
                let shortTime = arrangedArr[nate];
                arrangedArr[nate] = arrangedArr[nate + 1];
                arrangedArr[nate + 1] = shortTime;
            }
        }

    }
    return arrangedArr;
}



// Create an object called "circle" with properties for radius and circumference. Create a on the object using a 
// loop that calculates the circumference of the circle based on its radius.
    // Answer:
let circle = {
    radius: 8,
    circumference: 0
}

for(let i = 0; i < circle.radius; i++){
    circle.circumference += 2 * Math.PI * circle.radius;
}

console.log(circle.circumference);



