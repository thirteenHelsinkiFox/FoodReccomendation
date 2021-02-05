

let baseUrl = "http://localhost:3000/";

let toDoId = null;

function auth() {
  console.log('inih auth');
  if(!localStorage.getItem('access_token')){
    console.log('inih auth');
      $('#login-form').show()
      $('#register-form').hide()
      $('#logOut').hide()
      $('#log').hide()
  }else{
    $('#login-form').hide()
    $('#register-form').hide()
    $('#logOut').show()
    $('#res').hide()
    $('#log').hide()
    getFood()
  }
}

function clickRegister() {
  $('#res').click(() =>{
      $('#login-form').hide()
      $('#register-form').show()
      $('#res').hide()
      $('#log').show()
  })
}

function clickLogin(){
  $('#log').click(() => {
    $('#login-form').show()
    $('#register-form').hide()
    $('#res').show()
    $('#log').hide()
  })
}

function register (){
  const email = $('#registerEmail').val()
  const password = $('#registerLogin').val()
  $.ajax({
    url: baseUrl + 'users/register',
    method:'POST',
    data:{
        email,
        password
    }
  })
    .done((response) =>{
      console.log(response);
      $('#succesRegister').show()
      $('#toLogin').click(() =>{
        $('#login').show()
        $('#register').hide()
      })
    })
    .fail((err, text) => {
      console.log(err, text)
    })
    .always(() => {
      $('#registerEmail').val('')
      $('#registerLogin').val('')
    })

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
    localStorage.setItem('access_token', response.access_token)
    auth()
  })
  .fail((err, text) => {
    console.log( err.responseJSON.err);
    
    $('#alertLogin').prepend(`
    <div class="alert alert-warning alert-dismissible fade show" role="alert">

    ${err.responseJSON.err}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    `)
  })
  .always(() =>{
    $('#emailLogin').val('')
    $('#passwordLogin').val('')
  })
}

function getFood(){
  console.log(localStorage.getItem('access_token'))
  $.ajax({
    url:baseUrl+'foods',
    headers:{
      access_token:localStorage.getItem('access_token')
    }
  })
  .done(response => {
    console.log(response.weather);
    let date = response.weather.location.localtime.split(' ')[0]
    $('#weather').append(`
    <div class="padding " >
    <div class="col-lg-6">
        <div class="card" style="height:220px; margin-left:75%;"> 
        <img class="" src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559286899/weatherbg.jpg" alt="Card image cap">
            <div class="card-img-overlay" style="height:110px;">
                <h3 class="card-title text-white m-b-0 dl">${response.weather.location.name}</h3> <small class="card-text text-white font-light">${date}</small>
            </div>
            <div class="card-body weather-small" style="background-color:#eee;">
                <div class="row">
                    <div class="col-8 b-r align-self-center">
                        <div class="d-flex">
                            <div class="display-6 text-info"><i class="mdi mdi-weather-pouring"></i></div>
                            <div class="m-l-20">
                                <h1 class="font-light text-info m-b-0">${response.weather.current.temperature}<sup>0</sup></h1> <small>${response.weather.current.weather_descriptions}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)

    response.food.forEach((food) => {
      $('#food').append(`
      <div class="card"  style="width: 18rem; float: left; margin: 40px;">
        <img class="card-img-top img-size" src="${food.img}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${food.name}</h5>
            <a href="#" class="btn btn-warning" onClick="getDetailFood(${food.id})" >Detail</a>
        </div>
     </div>
      `)
    })
  })
  .fail((err, text) => {
    console.log(err);
  })
}



function getDetailFood(id){
  $.ajax({
    url: baseUrl+`foods/${id}`,
    method:'GET',
    headers:{
      access_token:localStorage.getItem('access_token')
    }
  })
  .done(response => {
    console.log(response);
    $('#detail-modal .modal-body p').html(`
    <div class="container">
      <div class="row">
          <div class="col">
              Dscription Food : <p> ${response.wikepedia.query.search[0].snippet}</p>
          </div>
          <div class="col">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" style="height:100px ;" src="${response.restaurant.restaurants[0].restaurant.thumb}" alt="Card image cap">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Restaurant Name:${response.restaurant.restaurants[0].restaurant.name}</li>
                  <li class="list-group-item">Address :${response.restaurant.restaurants[0].restaurant.location.address}</li>
                  <li class="list-group-item">Phone Number:${response.restaurant.restaurants[0].restaurant.phone_numbers} </li>
                </ul>
                <p></p>
              </div>
          </div>
      </div>
  </div>
    `);
    $('#detail-modal').modal('show');
  })
  .fail((err, text) => {
    console.log(err);
  })
}



$(document).ready(() =>{
  auth()
  clickRegister()
  clickLogin()
  $('#succesRegister').hide()
  $('#login-form').on('submit', (e) => {
      e.preventDefault()
      login()
  })
  $('#register-form').on('submit', e => {
    e.preventDefault()
    register()
  })
  $('#logOut').on('click',e => {
    e.preventDefault()
    localStorage.clear()
    localStorage.removeItem('access_token')
    signOut()
    auth()
  })
  $('.detailFood').on('click', function(e){
    console.log('cek');
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
      auth()
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
