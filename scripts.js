const grid = document.querySelector(".grid");
const gridSize = 60;

let gridArr = gridArray(gridSize);
let drawWith = "mouse";

let brush = false;
document.addEventListener("keydown", function () {
    if (brush == false) {
        brush = true;
    } else if (brush == true) {
        brush = false;
    };
});

let eraser = false;
document.querySelector(".eraser").addEventListener("click", function () {
    if (eraser == false) {
        eraser = true;
    } else if (eraser == true) {
        eraser = false;
    }
});

let color = "black";
document.querySelector(".random").addEventListener("click", function () {
    color = `rgb(${Math.floor((Math.random() * (255 - 1)))}, ${Math.floor((Math.random() * (255 - 1)))}, ${Math.floor((Math.random() * (255 - 1)))})`;
    console.log(color);
})

createGrid();
console.log(gridArr[4][20]);


function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        let gridCol = document.createElement("col");
        gridCol.classList.add("col");

        for (let j = 0; j < gridSize; j++) {
            let gridCell = document.createElement("div");
            gridCell.classList.add("cell");
            gridCell.classList.add(`${i+1}-${j+1}`);
            gridArr[i][j] = `${i+1}-${j+1}`;
            gridCol.appendChild(gridCell);

            gridCell.addEventListener("mouseenter", function () {
                if (brush == true) {
                    if (eraser == false) {
                        gridCell.style.border = `1px solid ${color}`
                        gridCell.style.backgroundColor = `${color}`;
                    } else if (eraser == true) {
                        gridCell.style.border = "1px solid rgb(198, 198, 198)";
                        gridCell.style.backgroundColor = "white";
                    }
                }
            });
        }
        grid.appendChild(gridCol);
    }
}

function gridArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array[i] = [];
        for (let j = 0; j < size; j++) {
            array[i][j] = null;
        }
    }
    return array;
}
