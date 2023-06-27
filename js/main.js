//variables
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const puzzlePieceDiv = document.querySelector(".puzzle-pieces");
const dropZones = document.querySelectorAll(".drop-zone");
//console.log(theButtons);
//console.log(puzzleBoard);
let draggedPiece;

function changeBGImage(){
    //here i am calling this ID background
    const backgroundID = this.id;
    puzzleBoard.style.backgroundImage = `url(images/backGround${backgroundID}.jpg)`;
  
    // this is to reset puzzle by removing dropped pieces from the drop zones
    dropZones.forEach((zone) => {
      if (zone.firstChild) {
        const piece = zone.firstChild;
        puzzlePieceDiv.appendChild(piece);
        piece.classList.remove("dropped");
      }
    });
  
    for (let i = 0; i < puzzlePieces.length; i++) {
      const piece = puzzlePieces[i];
      const originalPieceImage = piece.getAttribute('src');
      const newPieceImage = originalPieceImage.replace(/\d/g, this.id);
      piece.src = newPieceImage;
    }
}

function handleStartDrag() {
    console.log("Started dragging this piece:", this)
    draggedPiece = this;
}

function handleDragOver(e) {
    e.preventDefault();
    //this will prevent the default dragover behaviour
    //e is short for event, could be e, evt a well
    console.log("dragged over me");
}

function handleDrop(e) {
    e.preventDefault();
    console.log("dropped something on me");
    //this line moves the dragged piece from the left side of the board
    //into whatever dropzone we choose
    //bugFix 1 will go here
    if (this.children.length >=1) {
        return;
    }
    this.appendChild(draggedPiece);
    // could also check if there are no children then if so appennd
}

    //this is where i start the function to reset the puzzle
function resetPuzzle() {
    puzzlePieces.forEach((piece) => {
        piece.classList.remove("dropped");
    //this is to make sure the placed piece is remove when new puzzle is selected
        piece.parentNode.removeChild(piece);
        puzzlePieceDiv.appendChild(piece);
    });
}
       
//event Listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage)); 

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

// event listener for the reset button 
const resetButton = document.getElementById("resetBut");
resetButton.addEventListener("click", resetPuzzle);