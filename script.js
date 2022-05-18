let div;
let div2;

const outsideContainer = document.querySelector('#outsideContainer');

for(let i = 0 ; i<=15 ; i++){
    div = document.createElement('div');
    div.classList.add('innerContainer');
    outsideContainer.appendChild(div);
    for(let j = 0 ; j <= 15 ; j++){
        div2 = document.createElement('div');
        div2.classList.add('pixel');
        div.appendChild(div2);
    }
}

const pixels = document.querySelectorAll('div');

    function colorPixel(e){
        let className = this.classList.value;
        if(className==='pixel'){
            this.classList.add('colorPixel');
        }
        //e.stopPropagation();

    }

pixels.forEach(div => div.addEventListener('mouseover', colorPixel));

const clearCanvas = document.querySelector('.clearCanvas');
clearCanvas.addEventListener('click', ()=>{
    pixels.forEach(div => div.classList.remove('colorPixel'));
})