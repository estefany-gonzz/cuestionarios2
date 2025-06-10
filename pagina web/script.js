document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();

  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  const validUser = "admin";
  const validPass = "1234";

  if (user === validUser && pass === validPass) {
    window.location.href = "home.html";
  } else {
    document.getElementById('error').textContent = "Credenciales incorrectas.";
  }
});
