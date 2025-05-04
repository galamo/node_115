"use strict";
function wrapInArray(value) {
    return [value];
}
function getItemWithId(value, a, b) {
    if (!a)
        return;
    return { key1: value, key2: b };
}
const t1 = document.querySelector("aaa");
const t2 = document.querySelectorAll("ccc");
const data = Array.from(t2);
const header = document.querySelector("HTMLaaa");
function myQuerySelector(v) { } // implement the following function using document.querySelector support Generic
