let slider = document.getElementById("rangebar");
let rangevalue = document.getElementById("rangevalue");

rangevalue.innerHTML = slider.value + "%";

slider.oninput = function(){
    rangevalue.innerHTML = this.value + "%";
}