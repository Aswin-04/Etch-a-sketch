const container = document.body.querySelector(".container");
const slider = document.body.querySelector(".slider");
const span = slider.nextElementSibling;

let isDrawing = false;
let defaultColor = "black";
let color = defaultColor;

slider.addEventListener("input", () => {
    const gridSize = slider.value;
    span.textContent = `${gridSize} x ${gridSize}`;
    createGrid(gridSize);
});

document.body.addEventListener("mousedown", () => isDrawing = true);
document.body.addEventListener("mouseup", () => isDrawing = false);

function createGrid(gridSize) {
    container.innerHTML = "";

    for (let i = 1; i <= gridSize; i++) {
        const row = document.createElement("div");
        row.style.cssText = `max-height : ${640/gridSize}px;
                             display : flex;`
        
        for (let j=1; j <= gridSize; j++) {
            const box = document.createElement("div");
            box.style.cssText = `height : ${640/gridSize}px; 
                                 width : ${640/gridSize}px;
                                 box-sizing : border-box;
                                 border : 1px solid black; `;

            box.classList = "eachBox";
            
            box.addEventListener("mouseover", (event) => changeColor(event, color));
            box.addEventListener("mousedown", (event) => changeColor(event, color));
            row.append(box);
        }

        container.append(row);

    }
}

function changeColor(event, color) {
    if (isDrawing && event.buttons === 1) {
        event.target.style.backgroundColor = color;
    } 
}

createGrid(slider.value); 

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => createGrid(slider.value));

const eraseButton = document.querySelector(".eraser");
eraseButton.addEventListener("click", () => {
    color = "#edf1f4";
});

const blackSketch = document.querySelector(".black-sketch");
blackSketch.addEventListener("click", () => {
    color = defaultColor;
})

