let baseUrl = "http://localhost:3000/";

let toDoId = null;

$('#register-form').hide()

function checkAuthentication() {
  console.log(localStorage.access_token);
  if (localStorage.access_token) {
    console.log("yeaah");
    loggedIn()
  } else {
    console.log('no')
    loggedOut()

  }
}

function loggedIn(){
    readToDo()
    $("#login-form").hide()
    $('#logout-button').show()
    $('#register-form').hide()
    $('#add-todo').show()
    $('#add-form').hide()
    $('#main-weather').show()

}


function loggedOut(){
$("#login-form").show()
$('#logout-button').hide()
$('#register-form').hide()
$('#add-todo').hide()
$('#main-weather').hide()

localStorage.clear()
}


$(document).ready(function () {

    console.log('page di reload')

    checkAuthentication()

})