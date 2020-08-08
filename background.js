let currentTab;

chrome.tabs.query(
  {currentWindow: true},
   function(tabArray){
    currentTab = tabArray.filter(ob=>ob.active)[0];
    chrome.commands.onCommand.addListener(function(command) {
                
     if(command == "toggle-left"){

       let indexL = (currentTab.index !=0) ? currentTab.index - 1: tabArray.length-1;   
       let page = tabArray.filter(ob => ob.index == indexL)[0];
       chrome.tabs.update(page.id, {active:true, highlighted: true});
       chrome.tabs.onActivated.addListener(getCurrentTab);  
     }
    
     if(command == "toggle-right"){

        let indexR = (currentTab.index !=tabArray.length-1) ? currentTab.index + 1: 0;   
        let page = tabArray.filter(ob => ob.index == indexR)[0];  
        chrome.tabs.update(page.id, {active:true, highlighted: true});
        chrome.tabs.onActivated.addListener(getCurrentTab);  
     }
});
});

function getCurrentTab(info){
    chrome.tabs.get(info.tabId, function(data){
       currentTab = data;
    })
}

chrome.tabs.onActivated.addListener(getCurrentTab);  
