"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    throw error("fail");
}
function infiniteLoop() {
    while (true) { }
}
let a = "hello";
if (typeof a !== "string") {
    a; // never (type guard)
}
if (typeof b !== "number") {
    b; // string (type guard)
}
// const b: Indexable<{}> = "";
