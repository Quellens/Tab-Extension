console.log("Extension is working")

chrome.tabs.query(
  { active : true},
   function(tabArray){
       console.log(tabArray)
  chrome.extension.onMessage.addListener(function(message, sender){
    let tabID = tabArray[0].id;
      if(tabArray[0].index < 0){
         if(message.left){
        console.log("LEFT")
        //chrome.tabs.warmup(tabID)
           }

         if(message.right){
        console.log("RIGHT")
          }   
   }
  
}) 
  }
);


/*chrome.tabs.getSelected(null, function(tab) {

    
});
*/

