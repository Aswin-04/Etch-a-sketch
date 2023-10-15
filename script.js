const container = document.body.querySelector(".container");
const slider = document.body.querySelector(".slider");
const span = slider.nextElementSibling;

let isDrawing = false;

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
            
            box.addEventListener("mouseover", changeColor);
            box.addEventListener("mousedown", changeColor);
            row.append(box);
        }

        container.append(row);

    }
}

function changeColor(e) {
    if (isDrawing && e.buttons === 1) {
        e.target.style.backgroundColor = "black";
    } 
}

createGrid(slider.value); 
