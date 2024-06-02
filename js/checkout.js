
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName").value;
	var fEmail = document.getElementById("fEmail").value;
	var fPhone = document.getElementById('fPhone').value;
	var fLastN = document.getElementById('fLastN').value;
	var fPassword = document.getElementById('fPassword').value;
	var fAddress = document.getElementById('fAddress').value;


	
	


	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorPhone = document.getElementById('errorPhone');
	var errorLastN = document.getElementById('errorLastN');
	var errorPassword = document.getElementById('errorPassword');
	var errorAddress = document.getElementById('errorAddress')

	
	// Validate fields entered by the user: name, phone, password, and email

//name
	if(fName == "" || fName.length < 3 ||  !/^[a-zA-Z]+$/.test(fName)){
		errorName.innerHTML = "This field is required and must have, at least, 3 characters"
		error++;
	}


//lastname
	if(fLastN == "" || fLastN.length < 3 ||  !/^[a-zA-Z]+$/.test(fLastN)){
		errorLastN.innerHTML = "This field is required and must have, at least, 3 characters"
		error++;
	}

//email
let emailwrong = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	if(fEmail == "" || fEmail.length < 3 || !emailwrong.test(fEmail) ){ 
		errorEmail.innerHTML = 'This field is required and must contain an @ and have, at least, 3 characters'
		error++;
	}
	

//phone	
if (fPhone == '' || fPhone.length < 9 || !/^[0-9]{7,15}$/.test(fPhone)){
	errorPhone.innerHTML = 'Invalid phone number!! Must be 9 digits with no letters'
	error++;
}

//password
if(fPassword === '' || fPassword.length < 4 || fPassword.length > 8){
	errorPassword.innerHTML = 'Enter a correct password'
}

//address

if(fAddress === '' || fAddress.length < 3 || !/^[a-zA-Z]+$/.test(fAddress) ){
	errorAddress.innerHTML = "This field is required and must have, at least, 3 characters"
	error++;
}



	if(error>0){
		alert("Error");
		return false; 
	}else{
		alert("OK");
		return true; 
	}

}
