let changeColor = document.getElementById("changeColor");


chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });
  

  // The body of this function will be executed as a content script inside the
  // current page
  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
    
      class RowItem {
        constructor(title){
            this.title = title;
            this.permissions = [];
        }
    
        addPermission(item) {
            this.permissions.push(item);
        }
        
    }
    // queryAll(private-multicolumn__group): returns nodeList of all groups
    var rows = document.querySelectorAll("div.private-multicolumn__group");
    var iterativeList = [];

    
    

    // look for checkboxes
    

    //      for each result from queryAll
        for(var i = 0; i<rows.length; i++){
            // split the checkboxes apart

    //      place the name and values into an array of the values in that group
            input = rows.item(i).outerText.replace("\t", "").split("\n");
            let newRowItem = new RowItem(input[0]);
            
            console.log(newRowItem.title);
            for(var t = 1;  t<input.length; t++){
              
            checkboxes = document.querySelectorAll('input.private-checkbox__input');
            checkboxIt = Array.from(checkboxes);
            if(checkboxIt){
            checkboxIt.map((item)=>{
              if(item.ariaLabel == "delete" || item.ariaLabel == "write" || item.ariaLabel == "read"){
                console.log(item.checked);
              }
            });
          }
              

                if(input[t].length < 15 && input[t] !== ''){
                    if(input[t+1] == "Unassigned"){
                        newRowItem.addPermission(input[t]+" "+input[t+1]);
                        console.log(input[t]+" "+input[t+1]);
                        t++;
                    }
                    else{
                        newRowItem.addPermission(input[t]);
                        console.log(input[t]);
                    }
                } 
            }
        }
        
      });
    // {placing all info into a google sheet}
  }
