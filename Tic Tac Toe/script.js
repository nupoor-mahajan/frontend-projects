const boxes = document.querySelectorAll(".shadow");
let turnO = true;
let winner = document.querySelector("p");
let btn = document.querySelector(".btn");
let win = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
boxes.forEach((box)=>{
   box.addEventListener("click", () =>{
     if(turnO){
        box.innerHTML = "O";
        turnO = false;
     } else {
        box.innerHTML = "X";
        turnO = true;
     }
      box.disabled = true;
      check();
   }
);
});
const check= () => {
    for(let pos of win){
        let a = boxes[pos[0]].innerText;
        let b = boxes[pos[1]].innerText;
        let c = boxes[pos[2]].innerText;
        if(a!="" && b!="" && c!="" ){
            if(a==b && b==c){
                console.log("winner", a);
                winner.innerHTML = `Player ${a} wins!`;
                boxes.forEach((box) => box.disabled = true);
            }
    }
}
};

btn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    winner.innerText = "";
});
