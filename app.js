let boxes = document.querySelectorAll(".box");
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let turn = true;
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn){
            box.innerText = "O";
            turn = false;
        }else{
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    }) 
})
const disableBoxes = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    
}

const checkWinner = ()=>{
    for(pattern of winPatterns){
        pos1Val = boxes[pattern[0]].innerText;
        pos2Val = boxes[pattern[1]].innerText;
        pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner");
                disableBoxes();
                msgWindow(pos1Val);
            }
        }
    }
}
const msgWindow = (winner)=>{
    let msg = document.createElement("div");
    let main = document.querySelector("#container");
    main.prepend(msg);
    msg.className = "msg";
    msg.style.display = "block";
    msg.style.width = "200px";
    msg.style.height = "50px";
    msg.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
    msg.style.marginBottom = "5rem";
    msg.style.marginTop = "0.1rem";
    msg.innerText = `Congratulations ${winner} Won!`;
    msg.style.color = "grey";
    msg.style.display = "flex";
    msg.style.justifyContent = "center";
    msg.style.alignItems = "center";
}
let resetbtn = document.querySelector("#reset");
let footer = document.querySelector("#footer");
const resetGame = ()=>{
    enableBoxes();
    turn = true;
    let = msg = document.querySelector(".msg");
    msg.style.display = "none";
}
 resetbtn.addEventListener("click", resetGame);
