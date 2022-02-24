let inputWidth = document.querySelector(".input_width");
let inputHeight = document.querySelector(".input_height");
let inputColor = document.querySelector(".input_color");

let btnCreate = document.querySelector(".btn_create");

let btnUp = document.querySelector(".arrow_up");
let btnDown = document.querySelector(".arrow_down");
let btnLeft = document.querySelector(".arrow_left");
let btnRight = document.querySelector(".arrow_right");

let newDiv;
let mTop = 0;
let mLeft = 0;
let iwValue;
let ihValue;
let isDiv = false;

btnCreate.addEventListener('click', createDiv);


function createDiv() {
    if (!isDiv) {
        iwValue = inputWidth.value;
        ihValue = inputHeight.value;
        icValue = inputColor.value;
    
        if (iwValue >= 50 && ihValue >= 50 && iwValue <= 500 && ihValue <= 500) {
            
            newDiv = document.createElement('div');
            newDiv.style.width = iwValue + 'px';
            newDiv.style.height = ihValue + 'px';
            newDiv.style.backgroundColor = icValue; 
        }

        document.querySelector('.container').prepend(newDiv);
        inputHeight.setAttribute("readonly", 1);
        inputWidth.setAttribute("readonly", 1);

        isDiv = true;
    }
}


btnUp.addEventListener('click', blockUp);
btnDown.addEventListener('click', blockDown);
btnLeft.addEventListener('click', blockLeft);
btnRight.addEventListener('click', blockRight);


function blockUp() {
    if (mTop-10 >= 0) {
        mTop -= 10;
        newDiv.style.marginTop = mTop + 'px';
    }
}

function blockDown() {
    if (500-(Number(mTop)+Number(ihValue)+10) >=0) {
        mTop += 10;
        newDiv.style.marginTop = mTop + 'px';
    }
}

function blockLeft() {
    if (mLeft-10 >= 0) {
        mLeft -= 10;
        newDiv.style.marginTop = mTop + 'px';
    }    
}

function blockRight() {
    if (500-(Number(ihValue)+Number(mTop)+10) >=0) {
        mTop += 10;
        newDiv.style.marginTop = mTop + 'px';
    }    
}