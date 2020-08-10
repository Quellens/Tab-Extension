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

     if(command == "toggle-two-right"){
         
        let indexR = await twoRight(currentTab.index,tabArray);
        let page = await tabArray.filter(ob => ob.index == indexR)[0];  
        chrome.tabs.update(page.id, {active:true, highlighted: true});
        getCurrentTab(); 
         
     }
         
     if(command == "toggle-two-left"){
         
        let indexL = await twoLeft(currentTab.index,tabArray)
        let page = await tabArray.filter(ob => ob.index == indexL)[0];  
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

//Get the right index
function twoRight(i,tabArray){
  if(i >= 0 && i < tabArray.length-2) return i + 2;
  if(i == tabArray.length - 1) return 1;
  if(i == tabArray.length -2) return 0;
}

//Get the right or rather left index :D
function twoLeft(i,tabArray){
  if(i >= 2 && i < tabArray.length) return i - 2;
  if(i == 0) return tabArray.length - 2;
  if(i == 1) return tabArray.length - 1;
}
