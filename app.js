function returnEmployee(){
    const name = "Kelvin";
    const age = 22;
    const position = "Developer";

    // console.log(`His name is ${name}, he is ${age} years old and he works as ${position}`)
}

returnEmployee();


const user = {
    name: 'Francis',
    age: 21,
    position: 'Manager'
}

// console.log(`My name is ${user.name}, I am ${user.age}, i work as ${user.position}`);

var list = document.querySelector('.user_list');

function addUser(name,lastname) {
    
    var template = `
        <div class="user">
            <div>${name}</div>
            <div>${lastname}</div>
        </div>
    `;

    list.insertAdjacentHTML("beforeend",template)
}

addUser('Francis','Jones');
addUser('Jane','Doe');
