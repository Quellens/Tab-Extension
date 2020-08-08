chrome.tabs.query(
  {currentWindow: true},
   function(tabArray){
    let active = tabArray.filter(ob => ob.active )[0];
    chrome.commands.onCommand.addListener(function(command) {
     if(command == "toggle-left"){
        console.log("left");
     }
     
     if(command == "toggle-right"){
        console.log("right");  
     }
});
});
