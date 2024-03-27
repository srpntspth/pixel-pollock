const grid = document.querySelector(".grid");
const gridSize = 60;

let gridArr = gridArray(gridSize);

let brush = false;
let brushBtn = document.querySelector(".brush");
brushBtn.addEventListener("click", function () {
    if (brush == false) {
        brush = true;
        eraser = false;
        eyedropper = false;
        btnStyle(eraser, eraserBtn, "default");
        btnStyle(eyedropper, eyedropperBtn, "default");
    } else if (brush == true) {
        brush = false;
        eyedropper = false;
    }
});
brushBtn.addEventListener("mouseenter", function () {
    btnStyle(brush, brushBtn, "mouseenter");
});
brushBtn.addEventListener("mouseleave", function () {
    btnStyle(brush, brushBtn, "mouseleave");
});

let eraser = false;
let eraserBtn = document.querySelector(".eraser");
eraserBtn.addEventListener("click", function () {
    if (eraser == false) {
        eraser = true;
        brush = false;
        eyedropper = false;
        btnStyle(brush, brushBtn, "default");
        btnStyle(eyedropper, eyedropperBtn, "default");
    } else if (eraser == true) {
        eraser = false;
        brush = true;
        eyedropper = false;
    }
});
eraserBtn.addEventListener("mouseenter", function () {
    btnStyle(eraser, eraserBtn, "mouseenter");
});
eraserBtn.addEventListener("mouseleave", function () {
    btnStyle(eraser, eraserBtn, "mouseleave");
});


let eyedropper = false;
let eyedropperBtn = document.querySelector(".eyedropper");
eyedropperBtn.addEventListener("click", function () {
    if (eyedropper == false) {
        eyedropper = true;
        brush = false;
        eraser = false;
        btnStyle(brush, brushBtn, "default");
        btnStyle(eraser, eraserBtn, "default");
    } else if (eyedropper == true) {
        eyedropper = false;
    }
});
eyedropperBtn.addEventListener("mouseenter", function () {
    btnStyle(eyedropper, eyedropperBtn, "mouseenter");
});
eyedropperBtn.addEventListener("mouseleave", function () {
    btnStyle(eyedropper, eyedropperBtn, "mouseleave");
});

let color;
document.querySelector(".random").addEventListener("click", function () {
    setColor(Math.floor((Math.random() * (255 - 1))), 
             Math.floor((Math.random() * (255 - 1))), 
             Math.floor((Math.random() * (255 - 1))));
});

let r = document.querySelector("#r");
let g = document.querySelector("#g");
let b = document.querySelector("#b");
r.addEventListener("change", function () {
    setColor(r.value, g.value, b.value);
});
g.addEventListener("change", function () {
    setColor(r.value, g.value, b.value);
});
b.addEventListener("change", function () {
    setColor(r.value, g.value, b.value);
});

function setColor(rV, gV, bV) {
    r.value = rV;
    g.value = gV;
    b.value = bV;
    color = `rgb(${rV}, ${gV}, ${bV})`;
    document.querySelector(".colorBox").style.backgroundColor = color;
    console.log(color);
}

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        let gridCol = document.createElement("div");
        gridCol.classList.add("col");

        for (let j = 0; j < gridSize; j++) {
            let gridCell = document.createElement("div");
            gridCell.classList.add("cell");
            gridCell.classList.add(`${i+1}-${j+1}`);
            gridArr[i][j] = `${i+1}-${j+1}`;
            gridCol.appendChild(gridCell);

            gridCell.addEventListener("mouseenter", function () {
                if (brush == true) {
                    gridCell.style.border = `0.5px solid ${color}`;
                    gridCell.style.backgroundColor = `${color}`;
                }
                if (eraser == true) {
                    gridCell.style.border = "0.5px solid rgb(255, 255, 255)";
                    gridCell.style.backgroundColor = "white";
                }
                if (eyedropper == true) {
                    gridCell.addEventListener("click", function () {  
                        let colorID = gridCell.style.backgroundColor.slice(4, 17).split(", ");
                        console.log(colorID);
                        setColor(parseInt(colorID[0]), parseInt(colorID[1]), parseInt(colorID[2]));
                    })
                }
            })
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

function btnStyle(toggle, btn, state) {
    if (state == "mouseenter") {
        if (toggle == false) {
            btn.style.backgroundColor = "#508f59";
        } else if (toggle == true) {
            btn.style.backgroundColor = "#854c67";
        }
    }
    if (state == "mouseleave") {
        if (toggle == false) {
            btn.style.backgroundColor = "#7fd496";
        } else if (toggle == true) {
            btn.style.backgroundColor = "#ad6386";
        }
    }
    if (state == "default") {
        if (toggle == false) {
            btn.style.backgroundColor = "#7fd496";
        } else if (toggle == true) {
            btn.style.backgroundColor = "#ad6386";
        }
    }
}

createGrid();