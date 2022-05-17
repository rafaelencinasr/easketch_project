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
