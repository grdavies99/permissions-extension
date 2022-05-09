
class RowItem{
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
    //      for each result from queryAll
        for(var i = 1; i<rows.length; i++){
    //      place the name and values into an array of the values in that group
            input = rows.item(i).outerText.replace("\t", "").split("\n");
            newRowItem = new RowItem(input[0]);
            for(var t = 1;  t<input.length; t++){
                if(input[t].length < 15 || input[t].length !==''){
                    if(input[t+1] == "Unassigned"){
                        newRowItem.addPermission(input[t]+" "+input[t+1]);
                        t++;
                        console.log(input[t]+" "+input[t+1]);
                    }
                    else{
                        newRowItem.addPermission(input[t]);
                        console.log(input[t]);
                    }
                } 
                // check for radio buttons or "all accesible accounts"
            }
        }

// {placing all info into a google sheet}
var rows = document.querySelectorAll("div.private-multicolumn__group");
for(var i = 1; i<rows.length; i++){
    console.log(rows.item(i).outerText.replace("\t", "").split("\n"));
}
