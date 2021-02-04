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