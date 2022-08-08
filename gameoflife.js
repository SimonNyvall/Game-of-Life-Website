var row = [];
var board = [];

var rows = 40;
var colums = 60;

let isAlive = make2DArray(colums, rows);
let isAlineNextGen = make2DArray(colums, rows);

for (let i = 0; i < colums; i++){
    for (let j = 0; j < rows; j++){
        isAlive[i][j] = false;
    }
}

window.onload = function(){
    startGame();
}

function startGame(){
    document.getElementById("start-button").addEventListener("click", playOutTheGen);

    for (let r = 0; r < rows; r++){
        let row = [];
        for (let c = 0; c < colums; c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.addEventListener("click", clickTile);
            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    }
    console.log(board);
}

function make2DArray(cols, rows){
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++){
        arr[i] = new Array(rows);
    }
    return arr;
}


function clickTile(){
    let tile = this;

    let coords = tile.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (isAlive[c][r] == false){
        tile.style.backgroundColor = "green";
        isAlive[c][r] = true;
    } else{
        tile.style.backgroundColor = "lightgray";
        isAlive[c][r] = false;
    }

    console.log(r);
    console.log(c);

    // Update the bool list with the coords of r and c
}

function playOutTheGen(){
while (true){
    for (let i = 0; i < colums; i++){
        for (let j = 0; j < rows; j++){

            // Edges
            if (i == 0 || i == colums - 1 || j == 0 || j == rows - 1){
                isAlineNextGen[i][j] = isAlive[i][j];
            }else{

            // Count live neighbors
            let neighbors = countNeighbors(i ,j);
            
            let state = isAlive[i][j];

            // Game of life rules
            if (state == false && neighbors == 3){
                isAlineNextGen[i][j] = true;
            } else if (state == true && (neighbors < 2 || neighbors > 3)){
                isAlineNextGen[i][j] = false;
            } else{
                isAlineNextGen[i][j] = isAlive[i][j];
            }
        }
        }
    }

    // Update the board
    for (let i = 0; i < colums; i++){
        for (let j = 0; j < rows; j++){
            let tile = board[i][j];
            if (isAlineNextGen[i][j] == true){
                tile.style.backgroundColor = "green";
            }
            else{
                tile.style.backgroundColor = "lightgray";
            }
        }
    }

    isAlive = isAlineNextGen;

    // Reset of isAlineNextGen
    for (let i = 0; i < colums; i++){
        for (let j = 0; j < rows; j++){
            isAlineNextGen[i][j] = false;
        }
    }

    // sleep function
}
}

function countNeighbors(x, y){
    let sum = 0;
    for (let i = -1; i < 2; i++){
        for (let j = -1; j < 2; j++){
            if (isAlive[x + i][y + j] == true){
                sum++;
            }
        }
    }

    if (isAlive[x][y] == true){
        sum--;
    }

    return sum;
}