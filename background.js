let currentTab;
getCurrentTab();

chrome.commands.onCommand.addListener( async function(command){
     chrome.tabs.query({currentWindow: true},async function(tabArray){  
         
     currentTab = tabArray.filter(ob=>ob.active)[0];
         
     if(command == "toggle-left"){
     
       let indexL = await (currentTab.index > 0 && currentTab.index <= tabArray.length-1) ? currentTab.index - 1: tabArray.length-1;   
       let page = await tabArray.filter(ob => ob.index == indexL)[0];
       chrome.tabs.update(page.id, {active:true, highlighted: true});
       getCurrentTab();
       
     }
    
     if(command == "toggle-right"){
         
        let indexR = await (currentTab.index >= 0 && currentTab.index < tabArray.length-1) ? currentTab.index + 1: 0;   
        let page = await tabArray.filter(ob => ob.index == indexR)[0];  
        chrome.tabs.update(page.id, {active:true, highlighted: true});
        getCurrentTab(); 
         
     }                                                                                  
})});

function getCurrentTab(){
chrome.tabs.onActivated.addListener((info) => {
    chrome.tabs.get(info.tabId, function(data){
    currentTab = data;
    })
});  
};
