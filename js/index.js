

//if signed in, remove option to sign up on homepage (firebase authentication)

//handle logic to display logout button when logged in, otherwise show signup/login 
$(document).ready(function()
{

	firebase.auth().onAuthStateChanged(function(user) {

		//if user is signed in
		if(user)
		{

			$('.sign-up-btn').css("display","none");
			$('.login-btn').css("display","none");

			$('.logout-btn').css("display","block");

		}
		else
		{
			//if no user is signed in
			$('.sign-up-btn').css("display","block");
			$('.login-btn').css("display","block");			
		}

	});

});

// function to handle signing out
$('.logout-btn').on("click", function() {

	firebase.auth().signOut().then(function() {

		//signed out successfully
		$('.logout-btn').css("display","none");

		$('.sign-up-btn').css("display","block");
		$('.login-btn').css("display","block");

	});

});