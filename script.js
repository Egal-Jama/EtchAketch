function area
let board = document.querySelector(".board");
let cube = board.querySelectorAll("div")
squares.forEach((div) => div.remove());
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

for(let i = 0; i< 256; i++) {
    let cube = document.createElement("div");
    cube.style.backgroundColor = "Green";
    board.insertAdjacentElement("beforeend", cube);
}
    
