let defaultGrid= 16;
const generateBoard = rSize => {
    let container = document.querySelector("#board");
    for(let x = 0; x < rSize; x++){
        let boardRow = document.createElement("div");
        boardRow.classList.add("boardRow");
        for(let i = 0; i < rSize; i++){
            let boardItem = document.createElement("div");
            boardItem.classList.add("boardItem");
            boardItem.onmouseover = e => e.target.style.backgroundColor = "yellow";
            boardRow.appendChild(boardItem);
        }
        
        container.appendChild(boardRow);
    }
};
window.onload = () => {
    generateBoard(defaultGrid);
};