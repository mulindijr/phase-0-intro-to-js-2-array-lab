//const common = require("mocha/lib/interfaces/common");

const cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(name){
    cats.push(name);
}
destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name){
    cats.unshift(name);
}
destructivelyPrependCat("Bob")

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const updatedCats = [...cats, name];
    return updatedCats;
}
appendCat("Broom");

function prependCat(name){
    const updatedCats = [name, ...cats];
    return updatedCats;
}
prependCat("Arnold");

function removeLastCat(){
    const modifiedArray = cats.slice(0, -1);
    return modifiedArray;
}

function removeFirstCat(){
    const modifiedArray = cats.slice(1);
    return modifiedArray;
}













