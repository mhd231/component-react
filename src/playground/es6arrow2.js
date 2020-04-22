const add = (a, b) => {
    return a + b;
}

console.log(add(22, 21));

const user = {
    name: "Mahmud",
    cities: ['Pekalongan', 'Jawa Tengah', 'Indonesia'],
    printPLacesLived() {
        return this.cities.map((city) => this.name + 'has lived' + city);
    }
}
console.log(user.printPLacesLived());

const multiplier = {
    number: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.number.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());