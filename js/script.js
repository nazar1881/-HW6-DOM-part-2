let choose = document.querySelector('.selec-fig');
let opt1 = document.querySelector('.opt-1');
let opt2 = document.querySelector('.opt-2');
let opt3 = document.querySelector('.opt-3');

let elem = document.getElementById("figur");

let select = document.getElementById("my-select");

select.addEventListener("click", function(){
    if (opt1.value === choose.value){
        elem.classList.add("figure1-square");
        elem.classList.remove("figure2-rectangle");
        elem.classList.remove("figure3-circle");
    } else if (opt2.value === choose.value){
        elem.classList.add("figure2-rectangle")
        elem.classList.remove("figure1-square");
        elem.classList.remove("figure3-circle");
    } else if (opt3.value === choose.value){
        elem.classList.add("figure3-circle")
        elem.classList.remove("figure1-square");
        elem.classList.remove("figure2-rectangle");
    }
});

let color = document.getElementById("inputColor");
let btn = document.getElementById("my-btn");

btn.addEventListener("click", function(){
    if (!color.value) {
        elem.style.backgroundColor = "black";
    } else
    elem.style.backgroundColor = color.value;
});

