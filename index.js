// Write your solution here!
const cats = ["Milo","Otis","Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
const copyOfCats = [...cats, name]
return copyOfCats
}
function prependCat(name){
    const copyOfCats = [name, ...cats]
return copyOfCats
}
function removeLastCat(){
    const newCats = cats.slice(0, cats.length - 1)
    return newCats
} 
function removeFirstCat(){
    const newCats = cats.slice(1)
    return newCats
}