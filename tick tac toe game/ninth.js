let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgamebutton=document.querySelector("#newgame");
let messagecontainer=document.querySelector(".message");
let msg=document.querySelector("#msg");

let turn0 = true;
const win = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];
let clickk=0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        // box.innerText = "ABCD";
        if(turn0){
            box.innerText="O";
            turn0=false;
            clickk++;
        }
        else{
            box.innerText="X";
            turn0=true;
            clickk++;
        }
        box.disabled=true
        checkwinner();
    });
});

const showwinner=(winner)=>{
    boxdisable();
    msg.innerText=`Congratulations\nThe Winner is ${winner}`;
    messagecontainer.classList.remove("hide");
}
const nowinner=()=>{
    msg.innerText=`DRAW`;
    messagecontainer.classList.remove("hide");
clickk=0;

}

const checkwinner=()=>{
    for(pattern of win){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]
        // );
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );
            
           let p1= boxes[pattern[0]].innerText;
           let p2= boxes[pattern[1]].innerText;
           let p3= boxes[pattern[2]].innerText;
           console.log(p1);
           if(p1!="" && p2!="" &&p3!=""){
            if(p1===p2 && p2==p3 ){
                console.log("WINNER IS", p1);
                clickk=0;
                showwinner(p1);
            }
            
           }
           if(clickk===9){
            clickk=0;
            nowinner();
           }
    }
}

const boxdisable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        messagecontainer.classList.add("hide");
    }
}
const resetgame=()=>{
    clickk=0;
    turn0=true;
    enableboxes();
}

newgamebutton.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame)