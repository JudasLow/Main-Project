/* ======================================================================
  FOR LOGIN PAGE
====================================================================== */
// Loop through Array of Objects
var objPeople = [
	{ // Object @ 0 index
		username: "STAFF",
		password: "STAFF"
	},
	{ // Object @ 1 index
		username: "STUDENT",
		password: "STUDENT"
	},
]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	console.log("getInfo is called before for loop")

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[0].username && password == objPeople[0].password) 
		{	
			console.log(username+ " is logged in!!!")
			window.location = "staff.html";
			return
		}
		else if (username == objPeople[1].username && password == objPeople[1].password)
		{
			console.log(username + " is logged in!!!")
			window.location = "student.html"
			return
		}

		else
		{
			console.log("incorrect username or password")
		}
	}
}