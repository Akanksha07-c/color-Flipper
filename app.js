let container1=document.querySelector(".container");
let boxes=document.querySelectorAll(".box");

const genColor=()=>{
const r=Math.floor(Math.random()*256);
const g=Math.floor(Math.random()*256);
const b=Math.floor(Math.random()*256);
return `rgb(${r},${g},${b})`;
}

boxes.forEach((box)=>{
     box.addEventListener("click",(e)=>{
        e.stopPropagation();
        const randcolor=genColor();
        box.style.backgroundColor=randcolor;
     
     });
});

container1.addEventListener("click",()=>{
    const randcolor=genColor();
    container1.style.backgroundColor=randcolor;
    
});

    
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       const randcolor=genColor();
       box.style.color=randcolor;
    
    });
});


