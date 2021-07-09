const Targets = document.getElementsByClassName("target");
console.log(Targets);
console.log(Targets.length);

document.body.onclick = ()=>{
    Sound.shot();
}
for(let target of Targets){
    console.log(Targets);
    target.onclick = function(){
        target.className = "target hide";
    }
}

