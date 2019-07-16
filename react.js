// var winner = true;

// function user() {
//     var winner = false;

//     console.log(winner)
// }

// user();


// const value = 10;

// let winner = true;

// if(value == 10){
//     let winner = false;
// }

// console.log(winner)


const everyStudents = [
    {name:"Francis", grade:4},
	{name:"Martin", grade:7},
    {name:"Martha", grade:7},
]

 //every method.
let EveryStudentsPassedTheCourse = everyStudents.every(function(student){
		return student.grade >=6
})

// console.log(EveryStudentsPassedTheCourse);


const someStudents = [
    {name:"Francis", grade:4},
	{name:"Martin", grade:6},
    {name:"Martha", grade:4},
]
 //some method.
let SomeStudentsPassedTheCourse = someStudents.some(function(student){
		return student.grade >=6
})

// console.log(SomeStudentsPassedTheCourse);


const previous = 200;
const current = [
    {expense:'Guitar', amount:200},
    {expense:'Mic', amount:100},
    {expense:'Starp', amount:100},
]

const results = current.reduce(function(sum,expense){
        return sum + expense.amount;
},previous)

//600
// console.log(results)


const users = [
    {name:"Francis",lastname:'Norton', age:25},
	{name:"Martha", lastname:'Norton', age:25},
    {name:"Rob", lastname:'Norton', age:25},
]

const name = users.reduce(function(start, user){
    start.push(user.name)

    return start;
},[])
// return name
console.log(name)