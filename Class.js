// Contoh pembuatan kelas "Person"
class Person {
    // Konstruktor untuk kelas Person
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    // Metode untuk mengakses properti name
    getName() {
        return this.name;
    }


    // Metode untuk mengubah properti name
    setName(name) {
        this.name = name;
    }


    // Metode untuk mengakses properti age
    getAge() {
        return this.age;
    }


    // Metode untuk mengubah properti age
    setAge(age) {
        this.age = age;
    }


    // Metode lain dalam kelas Person
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// Membuat objek dari kelas Person
let person = new Person("Alice", 30);

// Mengakses properti dan memanggil metode
console.log("Name:", person1.getName());
console.log("Age:", person1.getAge());
person1.greet();

// Mengubah properti
person1.setAge(35);
person1.greet();

function Person(firstName, lastName){

    // properti

    this.firstName = firstName;

    this.lastName = lastName;

 

    // method

    this.fullName = function(){

        return `${this.firstName} ${this.lastName}`

    }

    this.showName = function(){

        console.log(this.fullName());

    }

}

 

var person1 = new Person("Muhar", "Dian");

var person2 = new Person("Petani", "Kode");

 

person1.showName();

person2.showName();