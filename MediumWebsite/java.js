

var theBoxThing = document.querySelector("#boxthing");
var box = document.querySelector("#box");

const dynamicText = document.querySelector("h2 span");
const words = ["Shhhh", "Be Quiet", "Promise Not to Tell", "SHHHHHH"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

// container.addEventListener("click", function(event) {
// 	var xPosition = event.clientX - box.getBoundingClientRect().left - (theBoxThing.clientWidth / 2);
// 	var yPosition = event.clientY - box.getBoundingClientRect().top - (theBoxThing.clientHeight / 2);
// 	// in case of a wide border, the boarder-width needs to be considered in the formula above
// 	theBoxThing.style.left = xPosition + "px";
// 	theBoxThing.style.top = yPosition + "px";
// 	}


const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if(!isDeleting && charIndex < currentWord.length){
        charIndex ++;
        setTimeout(typeEffect, 200);
    }else if(isDeleting && charIndex>0){
        charIndex--;
        setTimeout(typeEffect, 100);
    }else{
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex+1)% words.length: wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect()