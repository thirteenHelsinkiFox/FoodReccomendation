let baseUrl = "http://localhost:3000/";

let toDoId = null;

function auth() {
  console.log('inih auth');
  if(!localStorage.getItem('token')){
    console.log('inih auth');
      $('#login-form').show()
      $('#register-form').hide()
      $('#logOut').hide()
  }else{
      
  }
}




function login(){
  const email = $('#emailLogin').val()
  const password = $('#passwordLogin').val()
  $.ajax({
    url:baseUrl +'users/login',
    method:'POST',
    data :{
      email,
      password
    }
  })
  .done((response) =>{
    console.log(response);
    localStorage.setItem('inihtoken', response.access_token)
  })
  .fail((err, text) => {
    console.log(err, text);
  })
  .always(() =>{
    $('#emailLogin').val('')
    $('#passwordLogin').val('')
  })
}


$(document).ready(() =>{
  auth()
  $('#succesRegister').hide()
  $('#login-form').on('submit', (e) => {
      e.preventDefault()
      login()
  })
  
})


//++++GOOGLE LOGIN+++++++\\\

function onSignIn(googleUser) {

  const id_token = googleUser.getAuthResponse().id_token

  $.ajax({
      method: "POST",
      url: baseUrl +'users/googlelogin',
      data: {
          id_token
      }
  }).done(result => {
      // console.log(result)
      localStorage.setItem('access_token', result.access_token)
      // console.log(result)
  }).fail(err => {
      console.log(err)
  })
}

function signOut() {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
      console.log('User signed out.');
  });
}
