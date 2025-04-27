"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persons = void 0;
exports.logPerson = logPerson;
const u1 = getUser(23435);
function getUser(id) {
    return { id: 111, name: "eyal", email: "eyallevi@gmail.com", age: 28, dbId: "aa" };
}
const eyalIsAdmin = { id: 111, name: "eyal", email: "eyallevi@gmail.com", age: 28, permissions: "admin" };
function addUser(u) {
    console.log(u);
}
const myCardIntersection = { header: "new card", color: "black", height: 1, width: 2, src: "source" };
const myCardUnion = { header: "eader", color: "aaa" };
exports.persons = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep",
    },
    {
        name: "Jane Doe",
        age: 32,
        role: "Administrator",
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut",
    },
    {
        name: "Bruce Willis",
        age: 64,
        role: "World saver",
    },
];
function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
exports.persons.forEach(logPerson);
