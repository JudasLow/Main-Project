//get references for text input and button fields
id = document.getElementById("selectNumber")
roomname = document.getElementById("roomname")
capacity = document.getElementById("capacity")
jsonBtn = document.getElementById("jsonbtn")
jsonText = document.getElementById("jsontext")


display = document.getElementById("Display Item")

//add click event listener, to get data when data is entered
jsonBtn.addEventListener("click", function(){
    //store data in JavaScript object
   var room = {
        "selectNumber":id.value,
        "roomname":roomname.value,
        "capacity":capacity.value
    }

    //convert JavaScript object to JSON
    jsonText.innerText = JSON.stringify(room)
    
    localStorage.setItem(id.value, JSON.stringify(room));

})

//localStorage.clear()








/*


// Create an HTML table using the JSON data.
function createTableFromJSON(jsonData) {
    var arrBirds = [];
    arrBirds = JSON.parse(jsonData); // Convert JSON to array.
  
    var col = [];
    for (var key in arrBirds) {
      if (col.indexOf(key) === -1) {
        col.push(key);
      }
    }
  
    // Create a dynamic table.
    var table = document.createElement("table") // Create table header.
    var tr = table.insertRow(-1); // Table row. (last position)
  
    for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th"); // Table header.
      th.innerHTML = col[i];
      tr.appendChild(th);
    }
  
    tr = table.insertRow(-1); // add new row for the names
    // Add JSON to the table rows.
    for (var i = 0; i < arrBirds.length; i++) {
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = arrBirds[i].Name;
    }
  
    // Finally, add the dynamic table to a container.
    var divContainer = document.getElementById("showTable");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
  };



*/