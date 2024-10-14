
const boxes = document.querySelectorAll(".box");
const resetBtn = document.getElementById("reset-btn");
const newGameBtn = document.getElementById("new-btn");
const message = document.getElementById("msg");
const msgContainer = document.querySelector(".msg-container");

let trunX = true;

const winningPattern = [
    // Rows
    [0,1,2],[3,4,5],[6,7,8],

    // Column
    [0,3,6],[1,4,7],[2,5,8],

    // Diagonal
    [0,4,8],[2,4,6]
]


const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const resetGame = ()=>{
        trunX = true;
        enableBoxes();
        message.classList.add("hidden");

}
const showWinner = (name)=>{
    message.textContent = `Congratulations, Winner is ${name}`;
    message.classList.remove("hidden");
    disableBoxes();
}
const checkWinner = ()=>{

    for( let pattern of winningPattern){
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        
        if(p1!="" && p2!="" && p3!=""){

            if(p1==p2 && p2==p3){
                showWinner(p1);
            }
        }
        
    }
}
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(trunX){
            box.textContent = "X";
            trunX = false;
        }
        else{
            box.textContent = "O";
            trunX = true;
        }

        // After one move that box should not midified
        box.disabled= true;

        // Check Winner after every move
        checkWinner();
    })
})


resetBtn.addEventListener('click',resetGame);
newGameBtn.addEventListener('click',resetGame);


