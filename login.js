

let users = [
  {
    'email': 'test@test', 'password': 'test1234'
  }
];


function addUser() {
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  users.push({ email: email.value, password: password.value });

  window.location.href = 'login.html?msg=Du hast Dich erfolgreich registetg';

}




function login() {
  let emailLog = document.getElementById('emailLog');
  let passwordLog = document.getElementById('passwordLog');

  let user = users.find(u => u.email == emailLog.value && u.password == passwordLog.value);

  if (user) {
    console.log("Login Erfolgreich");

  } else {
    console.log("Logn fehlgeschlagen");

  }

}



function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const msg = urlParams.get('msg');
  if (msg) {
    msgBox.innerHTML = msg;
  }
}
