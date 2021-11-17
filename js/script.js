let elem = document.getElementById("figur");
let select = document.getElementById("my-select");

select.addEventListener("change", function(){
    elem.classList = select.value;   
});

let color = document.getElementById("inputColor");
let btn = document.getElementById("my-btn");

btn.addEventListener("click", function(){
    if (!color.value) {
        elem.style.backgroundColor = "black";
    } else
    elem.style.backgroundColor = color.value;
});

