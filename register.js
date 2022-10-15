function validate(){
	var name = document.form.name.value;
	var uname = document.form.uname.value;
	var email = document.form.email.value;
	var pass = document.form.pass.value;
	var rpass = document.form.rpass.value;
	
	if(name ==  "" || name == null ){
		alert("Please enter your name");
		return false;
		}
		
	if(uname ==  "" || uname == null ){
		alert("Please enter your user name");
		return false;
		}
	if(email ==  "" || email == null ){
		alert("Please enter your email");
		return false;
		}
	if(pass ==  "" || pass == null ){
		alert("Please enter your password");
		return false;
		}
	
	if(pass.length<6){
		alert("password must be 6 letters long.");
		return false;
	}

	if(rpass ==  "" || rpass == null ){
		alert("Please re-enter your password");
		return false
		}
	
	if(rpass.length<6){
		alert("password must be 6 letters long.");
		return false;
	}
	if(pass != rpass){
		alert("please password should be match");
	}
	
}/* register js closed*/

/*var username=document.getElementById("username");
var passw=document.getElementById("passw");*/



function login(){
	var username=document.getElementById("username").value;
	var passw=document.getElementById("passw").value;
	
	if(username==uname && passw==pass){
		alert("Successfully login");
	}else{
		alert("Unsuccessfully login");
	}
	
	
}