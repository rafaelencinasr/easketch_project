let div;
let div2;
let gridSize = 16;
const outsideContainer = document.querySelector('#outsideContainer');

// Creates a grid of ixj divs 

function createGrid(gridSize){

for(let i = 0 ; i<gridSize ; i++){
    div = document.createElement('div');
    div.classList.add('innerContainer');
    outsideContainer.appendChild(div);
    for(let j = 0 ; j < gridSize ; j++){
        div2 = document.createElement('div');
        div2.classList.add('pixel');
        div2.setAttribute('name', 'pixelName');
        div.appendChild(div2);
    }
}
}
createGrid(gridSize);

// Gets all the elements inside the outsideContainer that has the "pixelName" name
// this is a live element, so it should update with each DOM change.

let pixelNodeList = document.getElementsByName('pixelName');
//console.log(pixelNodeList)


let selectedColor = 'black';  // Default color to black
let randomColorSelector= false;
pixelNodeList.forEach(div=>div.addEventListener('mouseover', ()=>{
    //console.log("hello");
    if(randomColorSelector){
        selectedColor = randomColorGen();
    }
    div.setAttribute('style',`background: ${selectedColor};`);
    //div.style.color = 'black';
}));

// Canvas clearing button, changes background color for all divs to white
const clearCanvas = document.querySelector('.clearCanvas');
clearCanvas.addEventListener('click', ()=>{

    // For each div => change background color to white
    pixelNodeList.forEach(div => div.setAttribute('style',`background: white;`));
    
})

const currentSizeGrid = document.querySelector('.currentSize');

function changeGridSizeText(gridSize){
currentSizeGrid.textContent= `Current grid size: ${gridSize}x${gridSize}`
}

// Change grid size
const changeGridSize = document.querySelector('#changeGridSize');
changeGridSize.addEventListener('click', ()=>{
    let prevGridSize = gridSize;
    gridSize = prompt("Please enter the number of squares you would like for both sides (Max value: 100): ");
    if(gridSize>100){
        alert(`${gridSize}? That's too big, let's go with 100x100.`)
        gridSize=100;
    }
    else if(gridSize<1){
        alert(`${gridSize}? That's too small, let's go with 1x1.`)
        gridSize=1;
    }
    else if(isNaN(gridSize)){
        alert(`"${gridSize}"? That's not a number, try again.`)
        gridSize = prevGridSize;
    }
    for(let l = 0; l < prevGridSize ; l++){
        let ripDivs = document.querySelector('.innerContainer');
        outsideContainer.removeChild(ripDivs);
    }
    createGrid(gridSize);
    //console.log(pixelNodeList);
    // Adds the event listeners to the new divs
    pixelNodeList.forEach(div=>div.addEventListener('mouseover', ()=>{
        //console.log("hello");
        if(randomColorSelector){
            selectedColor = randomColorGen();
        }
        div.setAttribute('style',`background: ${selectedColor};`);
        //div.style.color = 'black';
    }));
    changeGridSizeText(gridSize);
});

// Random color generator

function randomColorGen(){
    let randomDecimal = Math.floor(Math.random()*16777215);
    let decToHex = randomDecimal.toString(16);
    let randomColor = "#" + decToHex;
    return randomColor;     // returns a random color in hex
}


const changeToBlackColor = document.querySelector('#changeToBlackColor');
const changeToRandomColor = document.querySelector('#changeToRandomColor');

// Set color to black
changeToBlackColor.addEventListener('click', ()=>{
    randomColorSelector = false;
    //console.log('changing to black');
    selectedColor = 'black';
});

// Set color to random by setting the flag "randomColorSelector" as true
changeToRandomColor.addEventListener('click', ()=>{
    randomColorSelector = true;
});
