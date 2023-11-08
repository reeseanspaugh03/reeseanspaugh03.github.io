console.log("theMessage");

const theButton = document.querySelector("button");
const theInput = document.querySelector("input")
let theDivider = document.querySelector("div.me")

let theUserWords;
let theItem;
let theTxt;

theButton.addEventListener('click', makeList)

function makeList() {
    console.log("click!");
    theUserWords = theInput.value;
    // console.log(theUserWords)
    theItem = document.createElement('li')
    const theSpan = document.createElement('span');
    theTxt = document.createTextNode(theUserWords);
    // document.body.appendChild(theItem);
    theDivider.appendChild(theItem);
    theItem.appendChild(theTxt);
}

document.querySelector("p.erase").addEventListener('click', eraseList)

function eraseList(){
    console.log("erase!");
    document.querySelector("div.me").remove(theItem)
}

document.querySelector("p.first").addEventListener('click', eraseFirst)

function eraseFirst(){
    console.log("oops!")
    document.querySelector('li').remove(theTxt)
}

document.querySelector("p.last").addEventListener('click', eraseLast)

function eraseLast(){
    console.log("yay!")
    //document.querySelector("div.me").remove(theTxt[(length(theTxt))-1])
   //need to find the length but idk how to do that when connected to html and not just js
}