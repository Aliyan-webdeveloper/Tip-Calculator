let rangevalue = document.getElementById("rangevalue");

//input
let a = document.getElementById('amount-in')
let b = document.getElementById('rangebar')
let c = document.getElementById('splitbar')

//TODO
rangevalue.innerHTML = b.value + "%";
splitvalue.innerHTML = c.value;

a.oninput = tipsCalculate
b.oninput = tipsCalculate
c.oninput = tipsCalculate

function tipsCalculate() {
    // console.log('this:',this)
    let amount = document.getElementById('amount-in').value;
    let tipPercentage = document.getElementById('rangebar').value;
    let person = document.getElementById('splitbar').value;
    let tipper;
    let totalBill;
    let aoumntPerPerson;
    let tipPerPerson;
    //Formula
    tipper = Math.floor(amount * (tipPercentage / 100));
    totalBill = +tipper + +amount;
    aoumntPerPerson = Math.floor(totalBill / person);
    tipPerPerson =Math.floor(tipper /  person);


    console.log('tipper',tipper)

    //Apppend in document
    document.getElementById("tipvalue").innerHTML = tipper;
    document.getElementById("total1").innerHTML = totalBill;
    document.getElementById("ap-person1").innerHTML = aoumntPerPerson;
    document.getElementById("tp-person1").innerHTML = tipPerPerson;


    rangevalue.innerHTML = tipPercentage + "%";
    splitvalue.innerHTML = person;
}