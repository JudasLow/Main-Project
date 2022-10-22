/* ======================================================================
  Author Custom JavaScript
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

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
            location.replace("https://www.w3schools.com")
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect username or password")
}