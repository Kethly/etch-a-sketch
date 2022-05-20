let defaultGrid= 18;
let currentGrid = defaultGrid;
let randomColors = false;
const iterateRandom = val => val === true ? false : true;
const clearBoard = () =>{
    let container = document.querySelector("#board");
    Array.from(container.children).forEach(child => container.removeChild(child));
}
const generateBoard = (rSize, randomColors = false) => {
    if(!(+rSize >= 0)  || !(+rSize <= 100)){
        alert("That's not valid!  It can only be between 0 to 100")
        return;
    }
    clearBoard();
    let container = document.querySelector("#board");
    for(let x = 0; x < rSize; x++){
        let boardRow = document.createElement("div");
        boardRow.classList.add("boardRow");
        for(let i = 0; i < rSize; i++){
            let boardItem = document.createElement("div");
            boardItem.classList.add("boardItem");
            if(randomColors === true){
                let randomHex = "#" + parseInt(Math.random() * 16777215).toString(16);
                boardItem.onmouseover = e => e.target.style.backgroundColor = randomHex;
            } else {
                boardItem.onmouseover = e => e.target.style.backgroundColor = "yellow";
            }
            boardRow.appendChild(boardItem);
        }
        
        container.appendChild(boardRow);
    }
    currentGrid = rSize;
};
window.onload = () => {
    generateBoard(defaultGrid);
};