let boxes = document.querySelectorAll(".btn")
let reset_btn = document.querySelector(".reset")
let gameButton = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-passed")
let message = document.querySelector("#msg")

let initial = true;

const winChances = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    let initial = true
    btn_enable()
    msgContainer.classList.add("hide")
    
    
}

boxes.forEach((btn) => {
    btn.addEventListener("click",()=>{
        console.log("box was clicked")
        btn.innerText="box"
        if(initial){
            btn.innerText = "0"
            initial = false
        }
        else{
            btn.innerText = "X"
            initial = true
        }
        btn.disabled = true
        checkWinner()


    })
    
})

const btn_disble =() =>{
    for(let box of boxes){
        box.disabled = true

    }
}
const btn_enable =() =>{
    for(let box of boxes){
        box.disabled = false
        box.innerText = ""

    }
}



const showWinner = (winner) =>{
    message.innerText = `Congratulations, Winner is ${winner}`
    btn_disble()
    msgContainer.classList.remove("hide")
    

}

const checkWinner = () =>{
    for(let pattern of winChances){
        // console.log(pattern[0],pattern[1],pattern[2]);
        let val1 = boxes[pattern[0]].innerText 
        let val2 = boxes[pattern[1]].innerText
        let val3 = boxes[pattern[2]].innerText


        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){
                console.log("winner",val1);
                
                showWinner(val1)
            }
        }
    }
}


gameButton.addEventListener("click",resetGame)
reset_btn.addEventListener("click",resetGame)

