const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";
const DEFAULT_MODE = "blackSketch";


const container = document.body.querySelector(".container");
const slider = document.body.querySelector(".slider");
const gridSizeLabel = slider.nextElementSibling;
const clearBtn = document.querySelector(".clear-btn");
const blackSketchBtn = document.querySelector(".black-sketch-btn");
const eraseBtn = document.querySelector(".erase-btn");
const rainbowBtn = document.querySelector(".rainbow-btn"); 

let isDrawing = false;
let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentGridSize = DEFAULT_SIZE;

createGrid(currentGridSize); 

slider.addEventListener("input", () => {
    currentGridSize = slider.value;
    gridSizeLabel.textContent = `${currentGridSize} x ${currentGridSize}`;
    createGrid(currentGridSize);
});

document.body.addEventListener("mousedown", () => isDrawing = true);
document.body.addEventListener("mouseup", () => isDrawing = false);

createEventListener(eraseBtn, "eraser");
createEventListener(blackSketchBtn, DEFAULT_MODE);
createEventListener(rainbowBtn,"rainbow")

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
        
        if (currentMode === DEFAULT_MODE) {
            color = DEFAULT_COLOR;
            
        } else if (currentMode === "eraser") {
            color = "#edf1f4";
            
        } else if (currentMode === "rainbow") {
            
            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);
            
            color = `rgb(${randomR}, ${randomG}, ${randomB})`;
        }
        event.target.style.backgroundColor = color;
    } 
}

function createEventListener(element, mode) {
    if (mode === "clear") {
        element.addEventListener("click", () => {
            createGrid(currentGridSize);
        });
        
    } else {
        element.addEventListener("click", () => {
            setCurrentMode(mode)           
        })
    }
}

function setCurrentMode(newMode) {   
    activateButton(newMode);
    currentMode = newMode;    
}

function activateButton(newMode) {
    
    if (currentMode === "rainbow") {
        rainbowBtn.classList.remove("active")
    } else if (currentMode === "eraser") {
        eraseBtn.classList.remove("active")
    } else {
        blackSketchBtn.classList.remove("active")
    }
    
    if (newMode === "rainbow") {
        rainbowBtn.classList.add("active")
    } else if (newMode === "eraser") {
        eraseBtn.classList.add("active")
    } else {
        blackSketchBtn.classList.add("active")
    }   
}




createEventListener(clearBtn, "clear")