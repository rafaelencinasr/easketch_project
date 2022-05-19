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

// Gets all the elements inside the outsideContainer that has the "pixel" class
// this is a live element, so it should update with each DOM change.

let pixelNodeList = document.getElementsByName('pixelName');
console.log(pixelNodeList)


// Coloring each pixel when a mouse passes over it
function coloringPixels(){
    this.classList.add('.colorPixel');
}

pixelNodeList.forEach(div=>div.addEventListener('mouseover', ()=>{
    console.log("hello");
    div.classList.add('colorPixel');
}));

// Canvas clearing button, removes the colorPixel class and reverts it
// to a white background.

const clearCanvas = document.querySelector('.clearCanvas');
clearCanvas.addEventListener('click', ()=>{

    // For each div => remove the colorPixel class
    pixelNodeList.forEach(div => div.classList.remove('colorPixel'));
    
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
    for(let l = 0; l < prevGridSize ; l++){
        let ripDivs = document.querySelector('.innerContainer');
        outsideContainer.removeChild(ripDivs);
    }
    createGrid(gridSize);
    console.log(pixelNodeList);
    pixelNodeList.forEach(div=>div.addEventListener('mouseover', ()=>{
        console.log("hello");
        div.classList.add('colorPixel');
    }));
    changeGridSizeText(gridSize);
});

