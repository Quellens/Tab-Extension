let leftpressed = false, rightpessed = false;

let listener = (e)=>{
    if(e.ctrlKey){
        if( e.keyCode == 37){
         leftpressed = true;
         rightpessed = false;
         chrome.extension.sendMessage({
             left: leftpressed,
             right: rightpessed
         }, ()=>{});
        } else if(e.keyCode == 39){
         leftpressed = false;
         rightpessed = true;
         chrome.extension.sendMessage({
             left: leftpressed,
             right: rightpessed
         }, ()=>{});
        }       
    }
}

document.addEventListener("keydown",listener);

document.addEventListener("keyup",()=>{
    rightpessed = false;
    leftpressed = false; 
});

/*
setInterval(function(){
    console.log(leftpressed, rightpessed)
}, 100)
*/