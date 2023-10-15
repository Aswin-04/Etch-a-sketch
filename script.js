 let slider = document.body.querySelector(".slider");
 let span = slider.nextElementSibling;
 let mousedown = false;

 slider.addEventListener("mousedown", () =>{
    mousedown = true;
 })

 slider.addEventListener("mouseup", () => {
    mousedown = false;
 })

 slider.addEventListener("mousemove", () => {
    if (mousedown) {

        let spanValue = slider.value;
        span.textContent = `${spanValue} x ${spanValue}`;
        createGrid(slider.value);
    }
 });


function createGrid (gridSize) {

    let container = document.body.querySelector(".container");
    container.innerHTML = "";
    
    for (let i=1; i <= gridSize; i++) {
        eachRow = document.createElement("div");
        addAttributeToEachRow(eachRow, gridSize); 
        container.append(eachRow);
    
        for (let j=1; j <= gridSize; j++) {
            let eachBox = document.createElement("div");
            addAttributeToEachBox(eachBox, gridSize);
            eachRow.append(eachBox);
        }
    }
}

function addAttributeToEachRow(eachRow, gridSize) {

    eachRow.setAttribute(
        "style",`
        max-height : ${640/gridSize}px;
        display : flex;
        `);
}

function addAttributeToEachBox(eachBox, gridSize) {
    eachBox.setAttribute(
        "style", `
        height : ${640/gridSize}px;
        width : ${640/gridSize}px;
        box-sizing : border-box;
        border : 1px solid black;
        `);
    eachBox.className = "eachBox";
}

createGrid(slider.value); 
