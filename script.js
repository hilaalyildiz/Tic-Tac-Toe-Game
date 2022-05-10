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
let playerSign ="X"; // suppose player will be X

// user clicked function
function clickedBox(element){
    if(players.classList.contains("player")){ // if players element has contains .player
        playerSign = "O";// if player will be O then we'll change the sign
        element.innerHTML=`<i class="${playerOIcon}"></i>`; // adding circle icon tag inside user clicked element
        players.classList.add("active");

        // iff player select O then we'll change the playerSign value to O
        playerSign="O";
        element.setAttribute("id",playerSign);

    } else {
        element.innerHTML=`<i class="${playerXIcon}"></i>`; // adding cross icon tag inside user clicked element
        players.classList.add("active");
        element.setAttribute("id",playerSign);
    }

    element.style.pointerEvents="none"; // once user select any box then that box can't be selected again
    let randomDelayTime = ((Math.random()*1000)+200).toFixed(); // generating random time delay so bot will delay randomly to select box
    setTimeout(()=>{
        bot(); // calling bot function
    },randomDelayTime); //passing random delay time
}

// bot click function
function bot(){
    // first change the playerSign .. so if user has X value in id then bot will have O
    playerSign="O";
    let array = []; // creating empty array.. we'll store unselected box index in this array
    for (let i = 0; i < allBox.length; i++) {
        if(allBox[i].childElementCount==0){ // if span has no any child element
            array.push(i); // inserting unclicked or unselected boxes inside array means that span has no children 
            console.log(i + " "+" has no children");
        }
        
    }

    let randomBox = array[Math.floor(Math.random()* array.length)]; 
    // getting random ,ndex from array so bot will will select random unselected box 

    if(array.length>0){
        if(players.classList.contains("player")){ // if players element has contains .player
            allBox[randomBox].innerHTML=`<i class="${playerXIcon}"></i>`; // adding cross icon tag inside user clicked element
            players.classList.remove("active");
            playerSign = "X";
            allBox[randomBox].setAttribute("id",playerSign);
        } else {
            allBox[randomBox].innerHTML=`<i class="${playerOIcon}"></i>`; // adding circle icon tag inside user clicked element
            players.classList.remove("active");
            allBox[randomBox].setAttribute("id",playerSign);
        }
    
    } 

    allBox[randomBox].style.pointerEvents="none"; // once bot select any box then user can't select or click on that box

}