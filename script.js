// selecting all reuired elements
const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll("section span");


window.onload = () => { // once window load

    for (let i = 0; i < allBox.length; i++) { // add onclick attribute in all avaiable section's spans
        allBox[i].setAttribute("onclick","clickedBox(this)");
    }

    selectXBtn.onclick = () => {
        selectBox.classList.add("hide"); // hide the select-box on playerX button clicked
        playBoard.classList.add("show"); // show the playboard section on playerX button clicked
    }

    selectOBtn.onclick = () => {
        selectBox.classList.add("hide"); // hide the select-box on playerO button clicked
        playBoard.classList.add("show"); // show the playboard section on playerX button clicked
    }
}
