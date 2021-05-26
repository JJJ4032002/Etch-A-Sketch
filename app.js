const btns = document.body.querySelectorAll(".btn");
const Abtn =  Array.from(btns);
const gridCon = document.body.querySelector(".grid");
let divToCol;
let div;
let styleEle;
let heighty ;
styleEle = getComputedStyle(gridCon);
    heighty = styleEle.height;
    newHeighty = heighty.replace("px","");
    console.log(newHeighty);
    numHeighty = parseInt(newHeighty)
    
window.addEventListener("load",()=>{
    makeGrid(16);
     
})


Abtn[0].addEventListener("click",function(e){
    let size = parseInt(prompt("Please enter the size between 1 and 64"));
    if(Number.isNaN(size)){
        return;
    }
    else{
   gridCon.innerHTML = ""
    
    while(size > 64){
        size = parseInt(prompt("Please enter the number smaller than 64"))
    }
    makeGrid(size);
}
})

let dim = 0;
 
  
function makeGrid(num){
    gridCon.style.display = "grid"
    gridCon.style.justifyContent = "center"
    dim = numHeighty/(num);
    gridCon.style.gridTemplateColumns = `repeat(${num},${dim}px)`
     gridCon.style.gridTemplateRows = `repeat(${num},${dim}px)`
 
      for(let i =0 ; i < num * num;i++){
       div =  document.createElement("div");
       
        
      div.style.height = `${dim}px`;
      div.style.width = `${dim}px`
      div.classList.add("box");
       gridCon.appendChild(div);

    }
      divToCol = document.body.querySelectorAll(".box");
     divToCol.forEach(function(e){
         e.addEventListener("mouseenter",(ele)=>{
             ele.target.style.backgroundColor = "red"
         })
     })

}

  Abtn[1].addEventListener("click",(e)=>{
      divToCol.forEach(function(e){
         e.addEventListener("mouseenter",(ele)=>{
             ele.target.style.backgroundColor = ""
         })
     })
  })

   Abtn[2].addEventListener("click",(e)=>{
      divToCol.forEach(function(e){
         e.addEventListener("mouseenter",(ele)=>{
             let r1 =
             Math.floor(Math.random()*255);
              let r2 =
             Math.floor(Math.random()*255);
              let r3 =
             Math.floor(Math.random()*255);

             ele.target.style.backgroundColor =  `rgb(${r1},${r2},${r3})`;
         })
     })
  })

  Abtn[3].addEventListener('click',()=>{
       gridCon.innerHTML = ""
       makeGrid(16);
  })



 
