//1.	Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.
let firstArray = [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7];
let max = firstArray[0];
console.log(`Array: ${firstArray}`);
for (let i = 1; i < firstArray.length; i++) {
    if (firstArray[i] > max) {
        max = firstArray[i];
    }
}
console.log(`The max element of array is ${max} .`);

// 2.	Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”]. 
// Створити новий масив де будуть тільки Стрінгові значення.
let secondArray = ['test', 12, undefined, null, -5, 'javascript', '1', false, true, 0 , '!'];
let changedSecondArray = secondArray.filter( e => typeof e === 'string');
console.log(secondArray);
console.log(changedSecondArray);

// 3.	Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, 
//{name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, 
//{name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}] 
//– Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking. 
// Додати можливість додати нове поле для всіх юзерів – job (true/false);
let users = [
    {name: "Yura", 
     age: 55, 
     hobby: ["football", "ski", "hiking"], 
     type: "Admin"}, 
    {name: "Yulian", 
     age: 28, 
     hobby: ["films", "games", "hiking"], 
     type: "user"}, 
    {name: "Taras", 
     age: 38, 
     hobby: ["hunting", "TV", "javascript"], 
     type: "user"}
];
console.log('Users are: ');
 for (let k = 0; k < users.length; k++){
    if (users[k].type === 'user') {
     console.log(users[k].name);
    }
}
console.log('Hobby is hiking have: ');
for (let l = 0; l < users.length; l++){
    for (let m = 0; m < users.length; m++) {
        if (users[l].hobby[m] === 'hiking') {
            console.log(users[l].name);
        }
    }
}
let newName;
let  question = confirm(`Бажаєте додати роботу?`);
if (question) {
    newName = prompt ('Введіть своє імя');
    console.log(newName);
    for (let n = 0; n < users.length; n++) {
        if (users[n].name == newName) {
            users[n].job = true;
        }
        users[n].job = false;
    } 
}
console.log(users);

//4.	Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з 
// сторінки(додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.
let text = document.getElementById('text');
document.addEventListener('copy', function() {
    alert('Інтелектуальна власність');
})