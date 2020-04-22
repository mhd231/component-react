var nameVar = 'Andrew';
var nameVar = 'Mike';

let nameLet = 'Jon';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

const petName = getPetName();
getPetName();

var fullName = "Jon mead";
let firstName;

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);