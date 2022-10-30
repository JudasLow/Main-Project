/* ======================================================================
  FOR STAFF & STUDENT PAGE
====================================================================== */

//get references for text input and button fields
id = document.getElementById("rid")
roomname = document.getElementById("roomname")
capacity = document.getElementById("capacity")
price = document.getElementById("price")
jsonBtn = document.getElementById("jsonbtn")
jsonText = document.getElementById("jsontext")

display = document.getElementById("Display Item")

//add click event listener, to get data when data is entered
jsonBtn.addEventListener
("click", function(test)
  {
    //store data in JavaScript object
      var room = 
      {
          "rid":id.value,
          "roomname":roomname.value,
          "capacity":capacity.value,
          "price":price.value
      }

      //convert JavaScript object to JSON
      jsonText.innerText = JSON.stringify(room)
      
      localStorage.setItem(id.value,jsonText.innerText)

      var test = jsonText.innerText;

      return test;
  }                     
)

      


//Currently working on this 30/10/2022
$(document).ready(function () {
  var json =  JSON.parse(localStorage.getItem(id.value,jsonText.innerText));  //[{"User_Name":"John Doe","score":"10","team":"1"}, {"User_Name":"Jane Smith","score":"15","team":"2"},{"User_Name":"Chuck Berry","score":"12","team":"2"}];
  

  
    var tr;


  for (var i = 0; i < json.length; i++) {
          tr = $('<tr/>');
          tr.append("<td>" + json[i].User_Name + "</td>");
          tr.append("<td>" + json[i].roomname + "</td>");
          tr.append("<td>" + json[i].capacity + "</td>");
          $('table').append(tr);
      }
});





//localStorage.clear()




// For the Logout Button
function logout() 
{
			window.location = "index.html";
}







///////TESTING

/*

// Create an HTML table using the JSON data.
function createTableFromJSON(room) {
    var arrBirds = [];
    arrBirds = JSON.parse(room); // Convert JSON to array.
  
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