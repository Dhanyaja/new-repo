let result = document.querySelector(".result-btn");
result.addEventListener("click", decimal);
function decimal(){
    let decimal = document.getElementById("number").value;
    let tempDecimal;
    let rem = 0;
    let binary = 0;
    let place = 1;

    tempDecimal = decimal;

    while(tempDecimal > 0){
        rem = tempDecimal % 2;
            console.log("rem: " + rem);
        binary = binary + (rem * place); 
            console.log("binary: " + binary);
        tempDecimal = parseInt(tempDecimal / 2);
            console.log("tempDecimal: " + tempDecimal);
        place = place * 10;
            console.log("place: " + place);
            console.log("--------------------------------")
    }

    const h1 = document.createElement("h1");
    h1.innerHTML = `${binary}`;

    const container = document.querySelector(".results-container");
    container.append(h1);
}