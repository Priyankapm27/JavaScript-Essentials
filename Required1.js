console.log("Jay Jagannath")

//Arrow Function

const myFunction0 = () => {
    return 10;
}
console.log(myFunction0())

const myFunction1 = (a) => {
    return a;
}
console.log(myFunction1(100))

let myFunction2 = (a, b) => {
    let c = a * b;
    console.log(c);
    c = c * a;
    console.log(c);
    c = c / b;

    return c;
}
console.log(myFunction2(20, 10))


// Ternary Operators

let x = 10
let y = 20

let z = 30;

z = x != y ? x : y;
console.log(z)

// Objects and Spread Operator
let name;
let id;
let age;
const Student = {
    name: "Yashpal",
    id: 21,
    age: 21
}
console.log(Student.name)

const Teacher = { ...Student, name: "Raj" }
console.log(Teacher.name)

const array1 = [11, 12, 13, 14, 15]
const array2 = [...array1, 16]

console.log(array1, array2)

//Map, Filter, Reduce

const arr1 = ["Yash", "Yashu", "Pinka", "Yashpal", "Yashpal", "Priyanka", "Pinka"]
const arr2 = arr1.map((name) => {
    return name + "#"
});
console.log(arr2)

const arr3 = arr1.filter((name) => {
    return name !== "Pinka" && name !== "Yashpal";
});
console.log(arr3)


const button = document.getElementById('bt1').addEventListener('mouseover', () => {
    var head1 = document.getElementById('head1');
    var head2 = document.getElementById("head2");

    head1.textContent = "Updated Header 1";
    head2.textContent = "Updated Header 2";

    const div1 = document.getElementById('div1')
    const div2 = document.getElementById('div2')

    div1.style.backgroundColor = 'pink';
    div2.style.backgroundColor = 'yellow';

    div1.innerHTML = '<p>you: </p>'
    div2.innerHTML = '<p>reply : typing.......</p>'
})
