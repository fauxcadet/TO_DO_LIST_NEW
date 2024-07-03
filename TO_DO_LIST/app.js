let btn =document.querySelector("button");
let inp = document.querySelector("input");
let ul=document.querySelector("ul")
btn.addEventListener("click",function(){
    let item = document.createElement("li");
    let delb = document.createElement("button");
    delb.innerText="DELETE";
    delb.classList.add("delete")
    item.innerText=inp.value;
    item.appendChild(delb);
    ul.appendChild(item);

    console.log(inp.value);
    inp.value="";
});

ul.addEventListener("click",function(event){
   if(event.target.nodeName=="BUTTON"){
    let listitem=event.target.parentElement;
    listitem.remove();
   }
})
// let delbtns=document.querySelectorAll(".delete")
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par=delbtns.parentElement;
//         console.log(par);
//         par.remove();
        

//     })
// }

