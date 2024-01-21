let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");


const gencompchoice=()=>{
    const option=["Rock","Paper", "Scissor"];
    const randomindex=Math.floor(Math.random()*3);
    return option[randomindex];
}
// Math.random() to generate a random number between 0 and 1
// Math.random()*3 to generate random number between 0 and 2
// Math.floor(Math.random()*3) to make number integer between 0  and 2

const drawgame=()=>{
    console.log("The game is draw");
    msg.innerText="Game is draw, Play again!!";
    msg.style.backgroundColor="#51BBFE";
}

const showwinner=(userwin,userchoice, compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You win!!  Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green"; 
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You lose!! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="#e94528";
    }
}

const playgame=(userchoice)=>{
    // console.log(userchoice);
    //generate computer choice
    const compchoice=gencompchoice();
    if(userchoice=== compchoice){
        //draw game
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="Rock"){
            userwin=compchoice==="Paper"?false:true;
        }
        else if(userchoice==="Paper"){
            userwin=compchoice==="Scissor"?false:true;
        }
        else{
            userwin=compchoice==="Rock"?false:true;
        }
        showwinner(userwin,userchoice, compchoice);
    }
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});

