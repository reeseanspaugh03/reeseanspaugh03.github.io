console.log("theMessage");

let theData;
let theColor;
let theString;
let theTxt = document.querySelector("p")

let theMoreData;
let theNeighborhood;
let theZip;
let theMoreTxt = document.querySelector("div.neighborhood")
let theTxt2 = document.querySelector("div.zip")



document.querySelector("body").addEventListener('click',whatIsThis);

function preload(){
    theData = loadJSON('crayola.json')
    theMoreData = loadJSON('nyc_neighborhood_zips.json')
}

function setup(){
    noLoop();
    noCanvas();
    console.log(theData.colors)
}

function whatIsThis(){
    let theRandom = random(theData.colors)
    console.log(theRandom.hex)
    console.log("you clicked!")
    theColor = theRandom.hex;
    document.body.style.backgroundColor = theColor;
    theTxt.textContent = theString;
    theString = theRandom.color;
    let theMoreRandom = random(theMoreData.neighborhoods)
    theMoreTxt.textContent = theNeighborhood;
    theNeighborhood = theMoreRandom.neighborhood;
    theTxt2.textContent = theZip;
    theZip = theMoreRandom.zips;
    
}