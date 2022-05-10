// selecting all reuired elements
const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll("section span"),
players = document.querySelector("players");


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
        players.setAttribute("class","players avtive player"); // adding three class names in player element
    }
}


let playerXIcon = "fas fa-times"; // class name of fontawesome cross icon
let playerOIcon = "far fa-circle"; // class name of fontawesome circle icon

// user clicked function
function clickedBox(element){
    if(players.classList.contains("player")){ // if players element has contains .player
        element.innerHTML=`<i class="${playerOIcon}"></i>`; // adding cross icon tag inside user clicked element
        players.classList.add("active");
    } else {
        element.innerHTML=`<i class="${playerXIcon}"></i>`; // adding circle icon tag inside user clicked element
        players.classList.add("active");
    }

    element.style.pointerEvents="none"; // once user select any boc then that box can't be selected again
}